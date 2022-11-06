import React from 'react';
import {TouchableOpacity, Image, View, StyleSheet, Text} from 'react-native';

const Ticket2 = (props: any) => {
  const img =
    props.data.ticket.kind === 0
      ? require('../assets/ticket1.jpeg')
      : require('../assets/ticket2.jpeg');

  return (
    <TouchableOpacity
      style={styles.ticket}
      onPress={() => props.onPress(props.data)}
    >
      <Image style={styles.ticketImage} source={img} />
      <View style={styles.ticketBody}>
        <View style={styles.ticketLeftBox}>
          <Text style={styles.ticketText1}>
            {props.data.ticket.kind === 0 ? '한식' : '중식'}
          </Text>
          <Text style={styles.ticketText2}>{props.data.ticket.title}</Text>
          <Text style={styles.ticketText3}>{props.data.ticket.price}</Text>
        </View>
        <View style={styles.ticketRightBox}>
          <Text style={styles.ticketText4}>
            {props.data.used ? '사용 완료' : '식권 사용'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Ticket2;

const styles = StyleSheet.create({
  ticketBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ticket: {
    width: 200,
    height: 200,
    borderWidth: 1,
    marginBottom: 30,
  },
  ticketImage: {
    width: 198,
    height: 100,
  },
  ticketBody: {
    flexDirection: 'row',
    height: 98,
    width: 198,
  },
  ticketRightBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'blue',
  },
  ticketLeftBox: {
    flex: 2,
  },
  ticketText1: {
    fontSize: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  ticketText2: {
    fontSize: 10,
    marginLeft: 10,
    marginTop: 40,
    fontWeight: 'bold',
  },
  ticketText3: {fontSize: 8, marginLeft: 10, marginTop: 5},
  ticketText4: {color: 'white', fontWeight: 'bold'},
});
