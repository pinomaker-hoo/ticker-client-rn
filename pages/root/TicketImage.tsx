import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import constant from '../../common/constant';

export default function TicketImageScreen({navigation}: any) {
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
        </View>
        {/* <BarcodeCreatorViewManager
          value={'100'}
          background={'#000000'}
          foregroundColor={'#FFFFFF'}
          format={BarcodeFormat.QR}
          style={styles.box}
        /> */}
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
  box: {},
});
