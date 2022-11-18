import {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import {getCommentList, saveComment} from '../../api/comment';
import constant from '../../common/constant';

export default function BoardDetailScreen(props: any) {
  const [data, setData]: any[] = useState([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');
  const [imgArr, setImgArr]: any = useState([]);

  const onPressHome = () => {
    props.navigation.navigate('Board');
  };

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const {data}: any = await getCommentList(
      String(props.route.params.data.idx),
    );
    setData(() => data.data);
    if (props.route.params.data.imgPath1)
      setImgArr((current: any[]) => [props.route.params.data.imgPath1]);
    if (props.route.params.data.imgPath2)
      setImgArr((current: any[]) => [
        ...current,
        props.route.params.data.imgPath2,
      ]);
    if (props.route.params.data.imgPath3)
      setImgArr((current: any[]) => [
        ...current,
        props.route.params.data.imgPath3,
      ]);
    setLoading(() => false);
  };

  const onPressSaveComment = async () => {
    const {data}: any = await saveComment(
      String(props.route.params.data.idx),
      text,
    );
    setText('');
    if (data) Alert.alert('댓글을 달았습니다.');
  };

  if (loading) return null;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn} onPress={onPressHome}>
          <Image
            style={styles.back}
            source={require('../../assets/back.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.top}>
          {props.route.params.data.user.image ? (
            <Image
              style={styles.topImage}
              source={{
                uri: `http://210.90.136.10:3050${props.route.params.data.user.image.substr(
                  1,
                )}.jpg`,
              }}
            />
          ) : (
            <Image
              style={styles.topImage}
              source={require('../../assets/user.png')}
            />
          )}
          <View style={styles.topTextBox}>
            <Text style={styles.topTextName}>
              {props.route.params.data.user.name}
            </Text>
            <Text style={styles.topText}>
              {props.route.params.data.createdAt.substr(0, 10)}
            </Text>
          </View>
        </View>
        <View style={styles.middle}>
          <View style={styles.middleImgBox}>
            <ScrollView horizontal={true} style={styles.middleImg}>
              {imgArr.map((item: any) => (
                <Image
                  style={styles.middleImage}
                  source={{
                    uri: `http://localhost:3050${item.substr(1)}.jpg`,
                  }}
                />
              ))}
            </ScrollView>
          </View>
          <View style={styles.middleTextBox}>
            <Text style={styles.middleText}>
              {props.route.params.data.text}
            </Text>
          </View>
        </View>
        <View style={styles.commentBox}>
          <ScrollView>
            {data.map((item: any) => (
              <View key={item.idx} style={styles.commentLine}>
                <View style={styles.commentTop}>
                  {item.user.image ? (
                    <Image
                      style={styles.commentImg}
                      source={{
                        uri: `http://localhost:3050${item.user.image.substr(
                          1,
                        )}.jpg`,
                      }}
                    />
                  ) : (
                    <Image
                      style={styles.commentImg}
                      source={require('../../assets/user.png')}
                    />
                  )}
                  <Text style={styles.commentName}>{item.user.name}</Text>
                </View>
                <View style={styles.commentBottom}>
                  <Text style={styles.commentText}>{item.text}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.bottom}>
          <View style={styles.comment}>
            <TextInput
              placeholder="댓글을 입력하세요."
              onChangeText={text => setText(text)}
              style={styles.commentInput}
            />
            <TouchableOpacity
              style={styles.commentBtn}
              onPress={onPressSaveComment}
            >
              <Text>게시</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  headerBtn: {
    marginLeft: 30,
  },
  body: {
    flex: 7,
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    marginTop: -20,
  },
  middle: {
    flex: 9,
  },
  bottom: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleImage: {
    width: 350,
    borderRadius: 10,
  },
  middleText: {
    flex: 1,
  },
  topTextBox: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  topImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginLeft: 30,
  },
  commentBox: {
    flex: 5,
    marginBottom: 20,
  },
  middleImg: {
    width: 350,
    height: 180,
    marginTop: 20,
  },
  topText: {
    color: 'black',
    fontSize: 10,
    marginTop: 5,
  },
  topTextName: {
    color: 'black',
    fontSize: 20,
  },
  middleImgBox: {justifyContent: 'center', alignItems: 'center', flex: 1},
  middleTextBox: {flex: 1, marginTop: 20, marginLeft: 20},
  comment: {
    flexDirection: 'row',
    width: constant.width * 0.9,
    height: 50,
    backgroundColor: '#ced4da',
    borderRadius: 10,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commentInput: {flex: 6, paddingLeft: 10},
  commentBtn: {flex: 1},
  commentLine: {
    width: constant.width * 0.9,
    backgroundColor: '#ced4da',
    marginLeft: constant.width * 0.05,
    borderRadius: 10,
    marginBottom: 20,
  },
  commentTop: {
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentBottom: {
    marginLeft: 20,
    marginTop: 10,
  },
  commentName: {
    marginLeft: 10,
    fontSize: 20,
  },
  commentText: {
    fontSize: 15,
    width: constant.width * 0.8,
  },
  commentImg: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  commentView: {
    justifyContent: 'center',
  },
  back: {
    width: 30,
    height: 30,
  },
});
