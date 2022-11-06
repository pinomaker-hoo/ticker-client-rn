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
import {deleteUser, findUser} from '../../api/auth';
import {updatePoint} from '../../api/point';
import constant from '../../common/constant';

export default function AdminScreen({navigation}: any) {
  const [user, setUser]: any = useState();
  const [loading, setLoading] = useState(true);
  const [hide, setHide] = useState(true);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const {data}: any = await findUser();
    setUser(() => data);
    setLoading(() => false);
  };
  const onPressHideBar = () => {
    setHide(true);
  };

  const onPressShowBar = () => {
    setHide(false);
  };

  const onPressMenuBtn = () => {
    setHide(false);
  };

  const onPressAlertBtn = () => {
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
    Alert.prompt('충전할 금액을 입력하세요.', '', [
      {
        text: '아니요.',
        style: 'cancel',
      },
      {
        text: '네',
        onPress: (value: any) => updatePointFunc(value),
      },
    ]);
  };

  const updatePointFunc = (value: string) => {
    const {data}: any = updatePoint(Number(value));
    return Alert.alert('충전 완료');
  };

  const onPressDelete = () => {
    Alert.alert(
      '정말로 탈퇴하시겠습니까?',
      '',
      [
        {
          text: '아니요.',
          style: 'cancel',
        },
        {
          text: '네',
          onPress: () => onPressDeleteBtn(),
        },
      ],
      {cancelable: false},
    );
  };

  const onPressDeleteBtn = async () => {
    const {data}: any = await deleteUser();
    if (!data) Alert.alert('ERROR');
    Alert.alert('삭제 되었습니다.');
    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('accesstoken');
    navigation.navigate('Login');
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
        <TouchableOpacity style={styles.headerBtn2} onPress={onPressAlertBtn}>
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
          {user.image ? (
            <Image
              style={styles.img}
              source={{
                uri: `http://localhost:3050${user.image.substr(1)}.jpg`,
              }}
            />
          ) : (
            <Image
              style={styles.img}
              source={require('../../assets/user.png')}
            />
          )}
          <Text style={styles.middleBoxText}>{user.email}</Text>
          <TouchableOpacity
            style={styles.middleBoxBtn}
            onPress={onPressLogoutBtn}
          >
            <Text style={styles.middleBoxBtnText}>로그아웃</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomBox}>
          <TouchableOpacity onPress={() => navigation.navigate('Alert')}>
            <Text style={styles.bottomBoxText}>공지사항</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChangeAdmin', {data: user})}
          >
            <Text style={styles.bottomBoxText}>기본 정보 수정</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChangePassword')}
          >
            <Text style={styles.bottomBoxText}>비밀번호 재설정</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressPassword}>
            <Text style={styles.bottomBoxText}>결제 비밀번호 재설정</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressDelete}>
            <Text style={styles.bottomBoxText}>회원 탈퇴하기</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressAddPoint}>
            <Text style={styles.bottomBoxText}>충전하기</Text>
          </TouchableOpacity>
        </View>
      </View>
      {hide ? null : (
        <View style={styles.navBar}>
          <View style={styles.barTopBox}>
            <View style={styles.barHeader}>
              <View style={styles.barTopLine}>
                <TouchableOpacity
                  style={styles.barHeaderBtn}
                  onPress={onPressHideBar}
                >
                  <Image
                    style={styles.headerImage}
                    source={require('../../assets/list.png')}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.barTopBoxText}>안녕하세요.</Text>
              <Text style={styles.barTopBoxText}>{user.name}님</Text>
              <TouchableOpacity
                style={styles.topBoxBtn}
                onPress={onPressLogoutBtn}
              >
                <Text style={styles.middleBoxBtnText}>로그아웃</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.barMiddleBox}>
            <TouchableOpacity
              style={styles.listBtn}
              onPress={() => navigation.navigate('Buy')}
            >
              <Text style={styles.lintBtnText}>주문하기</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listBtn}
              onPress={() => navigation.navigate('Ticket')}
            >
              <Text style={styles.lintBtnText}>식권함</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listBtn}
              onPress={() => navigation.navigate('Board')}
            >
              <Text style={styles.lintBtnText}>게시판</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listBtn}
              onPress={() => navigation.navigate('Admin')}
            >
              <Text style={styles.lintBtnText}>마이페이지</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.barBottomBox}></View>
        </View>
      )}
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
  navBar: {
    position: 'absolute',
    top: 30,
    bottom: 0,
    left: 0,
    right: 0,
    width: constant.width * 0.7,
    height: constant.height,
    backgroundColor: 'white',
    borderColor: 'black',
    borderRightWidth: 3,
    flex: 1,
  },
  barHeader: {
    flex: 3,
    marginTop: 20,
    backgroundColor: '#28CAF7',
  },
  barHeaderBtn: {
    marginLeft: 220,
  },
  barBody: {
    flex: 7,
  },
  barTopLine: {},
  topBoxBtn: {
    marginLeft: 20,
    borderWidth: 1,
    borderColor: 'white',
    width: 120,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  listBtn: {
    flex: 1,
    justifyContent: 'center',
  },
  lintBtnText: {
    marginLeft: 30,
    fontSize: 18,
  },
  barTopBox: {
    backgroundColor: '#28CAF7',
    flex: 1,
  },
  barMiddleBox: {flex: 2},
  barBottomBox: {flex: 1.5},
  barTopBoxText: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20,
    color: 'white',
  },
});
