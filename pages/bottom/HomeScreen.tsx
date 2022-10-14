import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
        <TouchableOpacity style={styles.headerBtn} onPress={onPressMenuBtn}>
          <Text>메뉴</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerBtn} onPress={onPressAlerttBtn}>
          <Text>알림</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.btnBox}>
          <TouchableOpacity style={styles.menuBox} onPress={onPressBuyBtn}>
            <Text>식권 구매하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuBox} onPress={onPressTicketBtn}>
            <Text>식권함</Text>
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
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  headerBtn: {
    marginLeft: 30,
  },
  body: {
    flex: 7,
    alignItems: 'center',
    marginTop: 100,
  },
  menuBox: {
    width: constant.width - 50,
    height: 80,
    borderWidth: 1,
    borderColor: 'black',

    justifyContent: 'center',
  },
  btnBox: {flex: 1},
  date: {flex: 1.2},
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});
