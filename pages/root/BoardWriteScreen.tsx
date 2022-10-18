import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import constant from '../../common/constant';
import RNPickerSelect from 'react-native-picker-select';
import {saveBoard} from '../../api/board';

export default function BoardWriteScreen({navigation}: any) {
  const [photo1, setPhoto1]: any = useState(null);
  const [photo2, setPhoto2]: any = useState(null);
  const [photo3, setPhoto3]: any = useState(null);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [kind, setKind]: any = useState();

  const onPressHome = () => {
    navigation.navigate('Board');
  };

  const handleChoosePhoto1 = () => {
    launchImageLibrary({mediaType: 'photo'}, (response: any) => {
      if (response) {
        setPhoto1(response);
      }
    });
  };

  const handleChoosePhoto2 = () => {
    launchImageLibrary({mediaType: 'photo'}, (response: any) => {
      if (response) {
        setPhoto2(response);
      }
    });
  };

  const handleChoosePhoto3 = () => {
    launchImageLibrary({mediaType: 'photo'}, (response: any) => {
      if (response) {
        setPhoto3(response);
      }
    });
  };

  const onPressSave = async () => {
    const {data}: any = await saveBoard(title, text, kind);
    if (data) navigation.navigate('Board');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn} onPress={onPressHome}>
          <Text>취소</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerBtn} onPress={onPressSave}>
          <Text>등록</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <TextInput
          style={styles.titleInput}
          placeholder="제목 입력해주세요."
          onChangeText={title => setTitle(title)}
        />
        <RNPickerSelect
          onValueChange={value => setKind(value)}
          items={[
            {label: '자유 게시판', value: 0},
            {label: '학식 평가', value: 1},
          ]}
        />
        <Text style={styles.imgText}>
          * 사진은 최대 3개까지 등록할 수 있습니다.
        </Text>
        <View style={styles.imgBigBox}>
          <View style={styles.imgBox}>
            <TouchableOpacity onPress={handleChoosePhoto1}>
              {photo1 ? (
                <Image
                  style={styles.img}
                  source={{uri: photo1.assets[0].uri}}
                />
              ) : (
                <Image
                  style={styles.img}
                  source={require('../../assets/user.png')}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.imgBox}>
            <TouchableOpacity onPress={handleChoosePhoto2}>
              {photo2 ? (
                <Image
                  style={styles.img}
                  source={{uri: photo2.assets[0].uri}}
                />
              ) : (
                <Image
                  style={styles.img}
                  source={require('../../assets/user.png')}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.imgBox}>
            <TouchableOpacity onPress={handleChoosePhoto3}>
              {photo3 ? (
                <Image
                  style={styles.img}
                  source={{uri: photo3.assets[0].uri}}
                />
              ) : (
                <Image
                  style={styles.img}
                  source={require('../../assets/user.png')}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textView}>
          <TextInput
            style={styles.textInput}
            placeholder="내용을 간략하게 입력해주세요."
            onChangeText={text => setText(text)}
          />
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
  imgBox: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    backgroundColor: '#E8E8E8',
  },
  imgBigBox: {
    flexDirection: 'row',
  },
  imgText: {
    marginLeft: 20,
    marginBottom: 20,
  },
  textInput: {
    marginTop: 30,
    width: constant.width - 50,
    height: constant.height - 500,
  },
  textView: {
    marginLeft: 25,
  },
  titleInput: {
    marginBottom: 30,
    marginLeft: 25,
    width: constant.width - 50,
  },
});
