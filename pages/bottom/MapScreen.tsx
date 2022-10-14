import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function MapScreen({navigation}: any) {
  const onPressMenuBtn = () => {
    navigation.navigate('Menu');
  };

  const onPressAlerttBtn = () => {
    navigation.navigate('Alert');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn1} onPress={onPressMenuBtn}>
          <Image
            style={styles.headerImage}
            source={require('../../assets/list.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerBtn2} onPress={onPressAlerttBtn}>
          <Image
            style={styles.headerImage}
            source={require('../../assets/bell.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.body}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  headerBtn1: {
    marginLeft: 30,
  },
  headerBtn2: {
    marginLeft: 280,
  },
  body: {
    flex: 7,
  },
  headerImage: {
    width: 25,
    height: 25,
  },
});
