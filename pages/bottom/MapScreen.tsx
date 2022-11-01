import {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import WebView from 'react-native-webview';
import constant from '../../common/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MapScreen({navigation}: any) {
  const [hide, setHide] = useState(true);
  const onPressMenuBtn = () => {
    navigation.navigate('Menu');
  };

  const onPressAlerttBtn = () => {
    navigation.navigate('Alert');
  };

  const onPressHideBar = () => {
    setHide(true);
  };

  const onPressShowBar = () => {
    setHide(false);
  };

  const onPressLogoutBtn = async () => {
    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('accesstoken');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn1} onPress={onPressShowBar}>
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
        <WebView
          source={{
            uri: 'https://map.naver.com',
          }}
        />
      </View>
      {hide ? null : (
        <View style={styles.navBar}>
          <View style={styles.topBox}>
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
              <Text style={styles.topBoxText}>안녕하세요.</Text>
              <Text style={styles.topBoxText}>{/* {user.name} */}님</Text>
              <Text style={styles.topBoxText}>
                {/* 포인트 : {user.point[0].money} */}
              </Text>
              <TouchableOpacity
                style={styles.topBoxBtn}
                onPress={onPressLogoutBtn}
              >
                <Text style={styles.middleBoxBtnText}>로그아웃</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.middleBox}>
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
          <View style={styles.bottomBox}></View>
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
    backgroundColor: 'blue',
  },
  barHeaderBtn: {},
  barBody: {
    flex: 7,
  },
  barTopLine: {},
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#E8E8E8',
  },
  topBox: {
    flex: 1,
    backgroundColor: 'blue',
  },
  topBoxText: {
    fontSize: 20,
    color: 'white',
  },
  middleBox: {
    flex: 2.5,
  },
  middleBoxText: {
    marginTop: 20,
  },
  topBoxBtn: {
    backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: 'white',
    width: 120,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  middleBoxBtnText: {color: 'white'},
  bottomBox: {
    flex: 1.5,
  },
  listBtn: {
    flex: 1,
    justifyContent: 'center',
  },
  lintBtnText: {
    marginLeft: 30,
    fontSize: 18,
  },
});
