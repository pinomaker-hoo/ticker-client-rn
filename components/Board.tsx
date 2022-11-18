import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import constant from '../common/constant';

export default function Board(props: any) {
  return (
    <TouchableOpacity style={styles.board} onPress={props.onPress}>
      <View style={styles.boardTop}>
        <Text style={styles.boardTopText}>{props.data.title}</Text>
      </View>
      <View style={styles.boardMiddle}>
        <Text style={styles.boardMiddleText}>{props.data.text}</Text>
        {props.data.imgPath1 ? (
          <Image
            source={{
              uri: `http://210.90.136.10:3050${props.data.imgPath1.substr(1)}.jpg`,
            }}
            style={styles.boardImg}
          />
        ) : (
          <Image style={styles.boardImg} />
        )}
      </View>
      <View style={styles.boardBottom}>
        <Text style={styles.boardBottomText}>{props.data.user.name}</Text>
        <Text style={styles.boardBottomText}>
          {props.data.createdAt.substr(0, 10)}
        </Text>
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
