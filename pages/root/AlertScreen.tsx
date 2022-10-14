import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function AlertScreen({navigation}: any) {
  const onPressHome = () => {
    navigation.navigate('Bottom');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn} onPress={onPressHome}>
          <Text>뒤로가기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>메세지가 없습니다.</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 15,
    marginTop: -50,
    color: 'grey',
  },
});
