import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import constant from '../common/constant';

export default function Board(props: any) {
  return (
    <TouchableOpacity style={styles.board} onPress={props.onPress}>
      <View style={styles.boardTop}>
        <Text style={styles.boardTopText}>테스트</Text>
      </View>
      <View style={styles.boardMiddle}>
        <Text style={styles.boardMiddleText}>
          제육볶음은 제가 알려드린 대로 하시면 맛집에 찾아가실 필요는 없습니다.
          참치액을 쓰시는 분들이 많아서 참치액으로 만들어 봤는데요.역시 오늘
          들어가는 이 식재료가 훨씬 맛이 좋다고 하네요. 감탄이 절로 나는
          레시피입니다.
        </Text>
        <Image
          source={require('../assets/ticket1.jpeg')}
          style={styles.boardImg}
        />
      </View>
      <View style={styles.boardBottom}>
        <Text style={styles.boardBottomText}>김인후</Text>
        <Text style={styles.boardBottomText}>2022.08.28</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  board: {
    width: constant.width,
    height: constant.height / 5,
  },
  boardTop: {
    width: constant.width,
    height: 30,
    justifyContent: 'center',
  },
  boardTopText: {
    marginLeft: 20,
    fontSize: 20,
  },
  boardMiddle: {
    width: constant.width,
    height: 120,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boardBottom: {
    width: constant.width,
    height: 20,
    flexDirection: 'row',
  },
  boardBottomText: {
    marginLeft: 20,
  },
  boardImg: {
    width: 100,
    height: 100,
  },
  boardMiddleText: {
    width: constant.width * 0.6,
    height: 100,
    marginRight: 20,
  },
});
