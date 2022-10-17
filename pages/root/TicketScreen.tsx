import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ticket from '../../components/Ticket';

export default function TicketScreen({navigation}: any) {
  const onPressHome = () => {
    navigation.navigate('Bottom');
  };

  const onPressTicket = () => {
    navigation.navigate('TicketImage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn} onPress={onPressHome}>
          <Text>뒤로가기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Ticket onPress={onPressTicket} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  body: {
    flex: 7,
  },
  ticketBox: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});
