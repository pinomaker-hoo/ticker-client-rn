import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {findUser} from '../../api/auth';
import constant from '../../common/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Color} from '../../assets/color';
import {getFood} from '../../api/food';

export default function HomeScreen({navigation}: any) {
  const [data, setData]: any = useState();
  const [hide, setHide] = useState(true);
  const [user, setUser]: any = useState();
  const [loading, setLoading]: any = useState(true);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const {data}: any = await findUser();
    const {data: data2}: any = await getFood();
    const now = new Date();
    const dateString = getDateToString(now);
    const a = data2.filter((item: any) => item.date == dateString);
    setData(a[0]);
    setUser(() => data);
    setLoading(() => false);
  };

  const getDateToString = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay() - 1}`;
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

  if (loading) return null;
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
          <ScrollView horizontal={true} style={styles.foodBox}>
            <View style={styles.bigFoodBox}>
              <Text style={styles.foodTitle}>{data.date}</Text>
              <View style={styles.foodTextBox}>
                <Text style={styles.foodText}>🍚 {data.rice} 🍚</Text>
                <Text style={styles.foodText}>🥘 {data.soup} 🥘</Text>
                <Text style={styles.foodText}>🥟 {data.food1} 🥟</Text>
                <Text style={styles.foodText}>🍗 {data.food2} 🍗</Text>
              </View>
            </View>
          </ScrollView>
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
              {/* <Text style={styles.topBoxText}>{user.name}님</Text> */}
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
    borderColor: Color.blue,
    alignItems: 'center',
    flexDirection: 'row',
  },
  menuBox2: {
    width: constant.width - 50,
    height: 80,
    borderWidth: 1,
    borderColor: Color.blue,
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
    backgroundColor: '#28CAF7',
  },
  barHeaderBtn: {
    marginLeft: 220,
  },
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
    backgroundColor: '#28CAF7',
  },
  topBoxText: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20,
    color: 'white',
  },

  middleBox: {
    flex: 2,
  },
  middleBoxText: {
    marginTop: 20,
  },
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
  foodScrollBox: {
    width: 400,
    height: 400,
  },
  foodBox: {
    width: 330,
    height: 250,
    borderWidth: 1,
    borderColor: Color.blue,
  },
  foodText: {
    fontSize: 30,
    marginTop: 30,
  },
  foodTitle: {
    marginTop: 20,
    fontSize: 30,
    marginBottom: 20,
  },
  foodTextBox: {
    justifyContent: 'center',
  },
  bigFoodBox: {
    width: 330,
    height: 250,
    alignItems: 'center',
  },
});
