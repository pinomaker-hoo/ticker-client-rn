import {useLinkProps} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, Image, View, StyleSheet, Text} from 'react-native';

const Ticket = (props: any) => {
  const img =
    props.data.kind === 0
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
            {props.data.kind === 0 ? '한식' : '중식'}
          </Text>
          <Text style={styles.ticketText2}>{props.data.title}</Text>
          <Text style={styles.ticketText3}>{props.data.price}</Text>
        </View>
        <View style={styles.ticketRightBox}>
          <Text style={styles.ticketText4}>식권 구매</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Ticket;

const styles = StyleSheet.create({
  ticketBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ticket: {
    width: 250,
    height: 250,
    borderWidth: 1,
    marginBottom: 30,
  },
  ticketImage: {
    width: 248,
    height: 125,
  },
  ticketBody: {
    flexDirection: 'row',
    height: 123,
    width: 248,
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
    fontSize: 15,
    marginLeft: 10,
    marginTop: 50,
    fontWeight: 'bold',
  },
  ticketText3: {fontSize: 12, marginLeft: 10, marginTop: 5},
  ticketText4: {color: 'white', fontWeight: 'bold'},
});
