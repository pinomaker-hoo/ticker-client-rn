import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

export default function AdminScreen({navigation}: any) {
  const [photo, setPhoto]: any[] = useState(null);

  const handleChoosePhoto = () => {
    launchImageLibrary({mediaType: 'photo'}, (response: any) => {
      if (response) {
        setPhoto(response);
      }
    });
  };

  const onPressMenuBtn = () => {
    navigation.navigate('Menu');
  };

  const onPressAlerttBtn = () => {
    navigation.navigate('Alert');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn1} onPress={onPressMenuBtn}>
          <Image
            style={styles.headerImage}
            source={require('../../assets/list.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerBtn2} onPress={onPressAlerttBtn}>
          <Image
            style={styles.headerImage}
            source={require('../../assets/bell.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text>안녕하세요.</Text>
        <Text>도연님</Text>
        {photo ? (
          <Image style={styles.img} source={{uri: photo.assets[0].uri}} />
        ) : (
          <Image style={styles.img} source={require('../../assets/user.png')} />
        )}
        <Button title="Choose Photo" onPress={handleChoosePhoto} />
        <Text>inhoo23@naver.com</Text>
        <TouchableOpacity>
          <Text>로그아웃</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>공지사항</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>기본 정보 수정</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>비밀번호 재설정</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>결제 비밀번호 재설정</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>회원 탈퇴하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  headerBtn1: {
    marginLeft: 30,
  },
  headerBtn2: {
    marginLeft: 280,
  },
  body: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    width: 25,
    height: 25,
  },

  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#E8E8E8',
  },
});
