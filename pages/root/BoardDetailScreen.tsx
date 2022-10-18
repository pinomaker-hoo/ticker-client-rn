import {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {getCommentList, saveComment} from '../../api/comment';
import constant from '../../common/constant';

export default function BoardDetailScreen(props: any) {
  const [data, setData]: any[] = useState([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState('');

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
    console.log(data);
    setData(() => data.data);
    setLoading(() => false);
  };

  const onPressSaveComment = async () => {
    const {data}: any = saveComment(String(props.route.params.data.idx), text);
    if (data) setData((current: []) => [...current, data]);
  };

  console.log(data, typeof data);
  if (loading) return null;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn} onPress={onPressHome}>
          <Text>뒤로가기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.top}>
          <Image
            style={styles.topImage}
            source={require('../../assets/user.png')}
          />
          <View>
            <Text>{props.route.params.data.user.name}</Text>
            <Text>{props.route.params.data.createdAt.substr(0, 10)}</Text>
          </View>
        </View>
        <View style={styles.middle}>
          <Image
            style={styles.middleImage}
            source={require('../../assets/ticket1.jpeg')}
          />
          <Text style={styles.middleText}>{props.route.params.data.text}</Text>
        </View>
        <View style={styles.commentBox}>
          <ScrollView>
            {data.map((item: any) => (
              <Text>
                {item.user.name} : {item.text}
              </Text>
            ))}
          </ScrollView>
        </View>
        <View style={styles.bottom}>
          <TextInput
            placeholder="댓글을 입력하세요."
            onChangeText={text => setText(text)}
          />
          <TouchableOpacity onPress={onPressSaveComment}>
            <Text>게시</Text>
          </TouchableOpacity>
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
  },
  middle: {
    flex: 9,
  },
  bottom: {
    flex: 1.2,
    borderTopWidth: 2,
  },
  middleImage: {
    width: constant.width,
    height: constant.width * 0.8,
  },
  middleText: {
    flex: 1,
  },
  topImage: {
    width: 30,
    height: 30,
  },
  commentBox: {
    flex: 3,
  },
});
