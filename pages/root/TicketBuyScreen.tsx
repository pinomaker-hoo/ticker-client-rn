import {
  View,
  StyleSheet,
  Image,
  Text,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import constant from '../../common/constant';

export default function TicketBuyScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <Image
          style={styles.topBoxImage}
          source={require('../../assets/ticket1.jpeg')}
        />
      </View>
      <View style={styles.middleBox}>
        <View style={styles.textBox}>
          <Text style={styles.text1}>한식</Text>
          <Text style={styles.text2}>한식 식권 1매</Text>
          <Text style={styles.text3}>4,500원</Text>
          <Text style={styles.text4}>장소 : 동양미래대학교 식당</Text>
          <Text style={styles.text5}>수량 : 1매</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.bottomBox}>
        <Text style={styles.bottomText}>식권 구매</Text>
      </TouchableOpacity>
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
  bottomBox: {
    flex: 0.3,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBoxImage: {
    flex: 1,
    width: constant.width,
    height: constant.height / 4,
  },
  textBox: {
    marginLeft: 40,
    marginTop: 40,
  },
  text1: {
    color: 'grey',
    marginBottom: 10,
  },
  text2: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text3: {
    fontSize: 20,
    color: 'blue',
    marginLeft: 200,
    marginTop: 100,
  },
  text4: {
    fontSize: 15,
    marginTop: 50,
  },
  text5: {
    fontSize: 15,
    marginTop: 20,
  },
  bottomText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
