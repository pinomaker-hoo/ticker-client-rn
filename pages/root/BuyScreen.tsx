import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {getTicketList} from '../../api/ticket';
import Ticket from '../../components/Ticket';

export default function BuyScreen({navigation}: any) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState(0);

  const onPressHome = () => {
    navigation.navigate('Bottom');
  };

  const onPressBuy = (data: any) => {
    navigation.navigate('TicketBuy', {data});
  };

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const {data} = await getTicketList();
    setData(() => data);
    setLoading(() => false);
  };

  if (loading) return null;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn} onPress={onPressHome}>
          <Image
            style={styles.back}
            source={require('../../assets/back.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.topBox}>
          <Text style={styles.topBoxText1}>식권 구매하기</Text>
          <Text style={styles.topBoxText2}>🌏 동양미래대학교 교내식당</Text>
        </View>
        <View style={styles.bottomBox}>
          <View style={styles.choice}>
            <TouchableOpacity onPress={() => setState(0)}>
              <Text style={styles.listTextOne}>전체</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setState(1)}>
              <Text style={styles.listText}>한식</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setState(2)}>
              <Text style={styles.listText}>중식</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={styles.ticketBox}>
              {state === 0 &&
                data.map((item: any) => (
                  <Ticket key={item.idx} data={item} onPress={onPressBuy} />
                ))}
              {state === 1 &&
                data
                  .filter((item: any) => item.kind === 0)
                  .map((item: any) => (
                    <Ticket key={item.idx} data={item} onPress={onPressBuy} />
                  ))}
              {state === 2 &&
                data
                  .filter((item: any) => item.kind === 1)
                  .map((item: any) => (
                    <Ticket key={item.idx} data={item} onPress={onPressBuy} />
                  ))}
            </View>
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
  back: {
    width: 30,
    height: 30,
  },
});
