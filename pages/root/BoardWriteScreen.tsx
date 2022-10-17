import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

export default function BoardWriteScreen({navigation}: any) {
  const onPressHome = () => {
    navigation.navigate('Board');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn} onPress={onPressHome}>
          <Text>뒤로가기</Text>
        </TouchableOpacity>
        <Text>게시판</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <Text>작성하기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}></View>
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
});
