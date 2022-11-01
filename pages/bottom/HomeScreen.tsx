import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Calendar from 'react-native-calendars/src/calendar';
import {deleteUser, findUser} from '../../api/auth';
import {formatDate} from '../../common/common';
import constant from '../../common/constant';
import Header from '../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({navigation}: any) {
  const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));
  const [dataList, setDataList] = useState([]);
  const [hide, setHide] = useState(true);
  const [user, setUser]: any = useState();
  const [loading, setLoading]: any = useState(true);

  const markedDates = dataList.reduce((acc: any, current: any) => {
    const formattedDate = formatDate(new Date(current.date));
    acc[formattedDate] = {marked: true};
    return acc;
  }, {});

  const markedSelectedDates = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };
  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const {data}: any = await findUser();
    setUser(() => data);
    setLoading(() => false);
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
  const onPressMenuBtn = () => {
    navigation.navigate('Menu');
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
        <View style={styles.btnBox}>
          <TouchableOpacity
            style={styles.menuBox1}
            onPress={() => navigation.navigate('Buy')}
          >
            <Text style={styles.menuText}>식권 구매하기</Text>
            <Image
              style={styles.menuImage1}
              source={require('../../assets/buylogo.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuBox2}
            onPress={() => navigation.navigate('Ticket')}
          >
            <Text style={styles.menuText}>식권함</Text>
            <Image
              style={styles.menuImage2}
              source={require('../../assets/ticketlogo.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.date}>
          <Calendar
            markedDates={markedSelectedDates}
            onDayPress={day => {
              setSelectedDate(day.dateString);
            }}
            style={styles.calendar}
          />
        </View>
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
              <Text style={styles.topBoxText}>{user.name}님</Text>
              <Text style={styles.topBoxText}>
                포인트 : {user.point[0].money}
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
  body: {
    flex: 7,
    alignItems: 'center',
  },
  menuBox1: {
    width: constant.width - 50,
    height: 80,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    flexDirection: 'row',
  },
  menuBox2: {
    width: constant.width - 50,
    height: 80,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnBox: {flex: 1},
  date: {flex: 1.2, marginTop: -30},
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  menuText: {
    marginLeft: 20,
  },
  menuImage1: {
    width: 50,
    height: 50,
    marginLeft: 180,
  },
  menuImage2: {
    width: 50,
    height: 50,
    marginLeft: 220,
  },
  headerImage: {
    width: 25,
    height: 25,
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
