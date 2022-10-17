import React, {useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Calendar from 'react-native-calendars/src/calendar';
import {formatDate} from '../../common/common';
import constant from '../../common/constant';
import Header from '../../components/Header';

export default function HomeScreen({navigation}: any) {
  const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));
  const [dataList, setDataList] = useState([]);

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

  const onPressMenuBtn = () => {
    navigation.navigate('Menu');
  };

  const onPressAlerttBtn = () => {
    navigation.navigate('Alert');
  };

  const onPressBuyBtn = () => {
    navigation.navigate('Buy');
  };

  const onPressTicketBtn = () => {
    navigation.navigate('Ticket');
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
        <View style={styles.btnBox}>
          <TouchableOpacity style={styles.menuBox1} onPress={onPressBuyBtn}>
            <Text style={styles.menuText}>식권 구매하기</Text>
            <Image
              style={styles.menuImage1}
              source={require('../../assets/buylogo.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuBox2} onPress={onPressTicketBtn}>
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
});
