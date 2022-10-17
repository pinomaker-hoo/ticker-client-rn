import {useLinkProps} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, Image, View, StyleSheet, Text} from 'react-native';

const Ticket = (props: any) => {
  return (
    <TouchableOpacity style={styles.ticket} onPress={props.onPress}>
      <Image
        style={styles.ticketImage}
        source={require('../assets/ticket1.jpeg')}
      />
      <View style={styles.ticketBody}>
        <View style={styles.ticketLeftBox}>
          <Text style={styles.ticketText1}>한식</Text>
          <Text style={styles.ticketText2}>동양미래대 식권 1매</Text>
          <Text style={styles.ticketText3}>4,500원</Text>
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
