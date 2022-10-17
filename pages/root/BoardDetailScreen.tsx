import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
} from 'react-native';
import constant from '../../common/constant';

export default function BoardDetailScreen({navigation}: any) {
  const onPressHome = () => {
    navigation.navigate('Board');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn} onPress={onPressHome}>
          <Text>뒤로가기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.top}>
          <Image
            style={styles.topImage}
            source={require('../../assets/user.png')}
          />
          <View>
            <Text>김인후</Text>
            <Text>2022-08-22</Text>
          </View>
        </View>
        <View style={styles.middle}>
          <Image
            style={styles.middleImage}
            source={require('../../assets/ticket1.jpeg')}
          />
          <Text style={styles.middleText}>
            제육볶음은 제가 알려드린 대로 하시면 맛집에 찾아가실 필요는
            없습니다. 참치액을 쓰시는 분들이 많아서 참치액으로 만들어
            봤는데요.역시 오늘 들어가는 이 식재료가 훨씬 맛이 좋다고 하네요.
            감탄이 절로 나는 레시피입니다.
          </Text>
        </View>
        <View style={styles.bottom}>
          <TextInput placeholder="댓글을 입력하세요." />
          <TouchableOpacity>
            <Text>게시</Text>
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
  top: {
    flex: 1,
    flexDirection: 'row',
  },
  middle: {
    flex: 9,
  },
  bottom: {
    flex: 1.2,
    borderTopWidth: 2,
  },
  middleImage: {
    width: constant.width,
    height: constant.width * 0.8,
  },
  middleText: {
    flex: 1,
  },
  topImage: {
    width: 30,
    height: 30,
  },
});
