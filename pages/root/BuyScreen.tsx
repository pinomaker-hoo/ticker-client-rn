import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

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
            <TouchableOpacity style={styles.ticket} onPress={onPressBuy}>
              <Image
                style={styles.ticketImage}
                source={require('../../assets/ticket1.jpeg')}
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
