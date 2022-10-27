import {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {getTicketUserList} from '../../api/ticket';
import Ticket2 from '../../components/Ticket2';

export default function TicketScreen({navigation}: any) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const {data} = await getTicketUserList();
    setData(() => data);
    setLoading(() => false);
  };

  const onPressHome = () => {
    navigation.navigate('Bottom');
  };

  const onPressTicket = (data: any) => {
    navigation.navigate('TicketImage', {data});
  };

  console.log(data[0]);

  if (loading) return null;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn} onPress={onPressHome}>
          <Text>뒤로가기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.topBox}>
          <Text style={styles.boxTitle}>주문 완료</Text>
          <ScrollView style={styles.rowBox} horizontal={true}>
            {data
              .filter((item: any) => item.used > 0)
              .map((item: any) => (
                <View style={styles.ticket}>
                  <Ticket2 data={item} onPress={onPressTicket} />
                </View>
              ))}
          </ScrollView>
        </View>
        <View style={styles.bottomBox}>
          <Text style={styles.boxTitle}>사용 전</Text>
          <ScrollView style={styles.rowBox} horizontal={true}>
            {data
              .filter((item: any) => item.used < 1)
              .map((item: any) => (
                <View key={item.idx} style={styles.ticket}>
                  <Ticket2 data={item} onPress={onPressTicket} />
                </View>
              ))}
          </ScrollView>
        </View>
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
  topBox: {flex: 1},
  bottomBox: {flex: 1},
  boxTitle: {
    marginLeft: 30,
  },
  rowBox: {
    flexDirection: 'row',
  },
  ticket: {
    marginLeft: 30,
    marginTop: 30,
  },
});
