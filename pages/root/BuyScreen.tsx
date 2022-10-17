import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Ticket from '../../components/Ticket';

export default function BuyScreen({navigation}: any) {
  const onPressHome = () => {
    navigation.navigate('Bottom');
  };
  const onPressBuy = () => {
    navigation.navigate('TicketBuy');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn} onPress={onPressHome}>
          <Text>뒤로가기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.topBox}>
          <Text style={styles.topBoxText1}>식권 구매하기</Text>
          <Text style={styles.topBoxText2}>🌏 동양미래대학교 교내식당</Text>
        </View>
        <View style={styles.bottomBox}>
          <View style={styles.choice}>
            <Text style={styles.listTextOne}>전체</Text>
            <Text style={styles.listText}>한식</Text>
            <Text style={styles.listText}>중식</Text>
          </View>
          <View style={styles.ticketBox}>
            <Ticket onPress={onPressBuy} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 7,
  },
  topBox: {
    flex: 1,
    marginLeft: 30,
    marginTop: -50,
  },
  bottomBox: {
    flex: 3,
    marginTop: -50,
  },
  topBoxText1: {
    marginTop: 30,
    fontSize: 30,
    marginBottom: 15,
  },
  topBoxText2: {
    fontSize: 15,
  },
  choice: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  listTextOne: {
    fontSize: 15,
  },
  listText: {
    fontSize: 15,
    marginLeft: 85,
  },
  ticketBox: {
    justifyContent: 'center',
    alignItems: 'center',
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
});
