import {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {getBoardList} from '../../api/board';
import constant from '../../common/constant';
import Board from '../../components/Board';

export default function BoardScreen({navigation}: any) {
  const [data, setData] = useState([]);
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const {data}: any = await getBoardList();
    setData(() => data);
    setLoading(() => false);
  };

  const onPressHome = () => {
    navigation.navigate('Bottom');
  };
  const onPressBoard = (data: any) => {
    navigation.navigate('BoardDetail', {data});
  };

  const onPressBoardWrite = () => {
    navigation.navigate('BoardWrite');
  };

  if (loading) return null;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn1} onPress={onPressHome}>
          <Text>뒤로가기</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>게시판</Text>
        <TouchableOpacity style={styles.headerBtn2} onPress={onPressBoardWrite}>
          <Text>작성하기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => setState(false)}>
            <Text style={styles.menuText1}>자유 게시판</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setState(true)}>
            <Text style={styles.menuText}>학식 평가</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.boardList}>
          {state
            ? data
                .filter((item: any) => item.boardKind < 1)
                .map((item: any) => (
                  <Board onPress={() => onPressBoard(item)} data={item} />
                ))
            : data
                .filter((item: any) => item.boardKind > 0)
                .map((item: any) => (
                  <Board onPress={() => onPressBoard(item)} data={item} />
                ))}
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
  headerBtn1: {
    marginLeft: 30,
  },
  headerBtn2: {
    marginLeft: 100,
  },
  headerText: {
    marginLeft: 100,
  },
  body: {
    flex: 7,
  },
  menu: {
    width: constant.width,
    height: constant.height / 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
  },
  boardList: {},
  menuText1: {
    fontSize: 20,
  },
  menuText: {
    fontSize: 20,
    marginLeft: 100,
  },
});
