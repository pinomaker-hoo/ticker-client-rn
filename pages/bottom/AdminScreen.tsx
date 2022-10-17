import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {findUser} from '../../api/auth';
import {updatePoint} from '../../api/point';

export default function AdminScreen({navigation}: any) {
  const [photo, setPhoto]: any[] = useState(null);
  const [user, setUser]: any = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    callApi();
    console.log(user);
  }, []);

  const callApi = async () => {
    const {data}: any = await findUser();
    setUser(() => data);
    setLoading(() => false);
  };

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

  const onPressPassword = () => {
    navigation.navigate('SetPassword');
  };

  const onPressLogoutBtn = async () => {
    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('accesstoken');
    navigation.navigate('Login');
  };

  const onPressAddPoint = async () => {
    const {data}: any = updatePoint(5000);
  };

  const onPressDelete = () => {
    Alert.alert(
      '정말로 탈퇴하시겠습니까?',
      '',
      [
        {
          text: '네',
          onPress: () => console.log('아니라는데'),
        },
        {
          text: '아니요.',
          onPress: () => console.log('아니라는데'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  if (loading) return null;
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
        <View style={styles.topBox}>
          <Text style={styles.topBoxText}>안녕하세요.</Text>
          <Text style={styles.topBoxText}>{user.name}님</Text>
          <Text style={styles.topBoxText}>포인트 : {user.point[0].money}</Text>
        </View>
        <View style={styles.middleBox}>
          <TouchableOpacity onPress={handleChoosePhoto}>
            {photo ? (
              <Image style={styles.img} source={{uri: photo.assets[0].uri}} />
            ) : (
              <Image
                style={styles.img}
                source={require('../../assets/user.png')}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.middleBoxText}>{user.email}</Text>
          <TouchableOpacity
            style={styles.middleBoxBtn}
            onPress={onPressLogoutBtn}
          >
            <Text style={styles.middleBoxBtnText}>로그아웃</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomBox}>
          <TouchableOpacity>
            <Text style={styles.bottomBoxText}>공지사항</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.bottomBoxText}>기본 정보 수정</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.bottomBoxText}>비밀번호 재설정</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressPassword}>
            <Text style={styles.bottomBoxText}>결제 비밀번호 재설정</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressDelete}>
            <Text style={styles.bottomBoxText}>회원 탈퇴하기</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressAddPoint}>
            <Text style={styles.bottomBoxText}>5,000원 충전하기. </Text>
          </TouchableOpacity>
        </View>
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
  topBox: {
    flex: 1,
  },
  topBoxText: {
    fontSize: 30,
    marginLeft: 60,
  },
  middleBox: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleBoxText: {
    marginTop: 20,
  },
  middleBoxBtn: {
    backgroundColor: 'blue',
    width: 80,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  middleBoxBtnText: {color: 'white'},
  bottomBox: {
    flex: 5,
  },
  bottomBoxText: {
    marginLeft: 60,
    fontSize: 20,
    marginBottom: 20,
  },
});
