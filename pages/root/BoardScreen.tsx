import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import constant from '../../common/constant';
import Board from '../../components/Board';

export default function BoardScreen({navigation}: any) {
  const onPressHome = () => {
    navigation.navigate('Bottom');
  };
  const onPressBoard = () => {
    navigation.navigate('BoardDetail');
  };

  const onPressBoardWrite = () => {
    navigation.navigate('BoardWrite');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn} onPress={onPressHome}>
          <Text>뒤로가기</Text>
        </TouchableOpacity>
        <Text>게시판</Text>
        <TouchableOpacity style={styles.headerBtn} onPress={onPressBoardWrite}>
          <Text>작성하기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.menu}>
          <Text>자유 게시판</Text>
          <Text>학식 평가</Text>
        </View>
        <ScrollView style={styles.boardList}>
          <Board onPress={onPressBoard} />
        </ScrollView>
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
  menu: {
    width: constant.width,
    height: constant.height / 15,
    flexDirection: 'row',
  },
  boardList: {},
});
