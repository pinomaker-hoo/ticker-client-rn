import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function MenuScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Buy')}>
        <Text>주문하기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Ticket')}>
        <Text>식권함</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Board')}>
        <Text>게시판</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
        <Text>마이 페이지</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
        <Text>설정</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
