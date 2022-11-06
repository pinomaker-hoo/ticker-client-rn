import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useTicket} from '../../api/ticket';
import constant from '../../common/constant';

export default function TicketImageScreen(props: any) {
  const onPress = async () => {
    const {data}: any = await useTicket(Number(props.route.params.data.idx));
    if (data) props.navigation.navigate('Bottom');
  };

  const onPress2 = async () => {
    Alert.alert(
      '정말로 사용하시겠습니까??',
      '',
      [
        {
          text: '네',
          onPress: onPress,
        },
        {
          text: '아니요.',
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };
  const img =
    props.route.params.data.ticket.kind === 0
      ? require('../../assets/ticket1.jpeg')
      : require('../../assets/ticket2.jpeg');
  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <Image style={styles.topBoxImage} source={img} />
      </View>
      <View style={styles.middleBox}>
        <View style={styles.textBox}>
          <Text style={styles.text1}>
            {props.route.params.data.ticket.kind === 0 ? '한식' : '중식'}
          </Text>
          <Text style={styles.text2}>
            {props.route.params.data.ticket.title}
          </Text>
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={styles.useBoxBtn} onPress={onPress2}>
            <Text style={styles.useBoxText}>사용하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBox: {
    flex: 1.0,
  },
  middleBox: {
    flex: 1.7,
  },
  topBoxImage: {
    flex: 1,
    width: constant.width,
    height: constant.height / 4,
  },
  textBox: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: 'grey',
    marginBottom: 10,
  },
  text2: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  box: {justifyContent: 'center', alignItems: 'center', marginTop: 200},
  useBoxBtn: {
    width: 200,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  useBoxText: {
    color: 'white',
    fontSize: 20,
  },
});
