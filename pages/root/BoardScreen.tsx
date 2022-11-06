import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import {getBoardList} from '../../api/board';
import Board from '../../components/Board';

export default function BoardScreen({navigation}: any) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    callApi();
  }, [loading]);

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
          <Image
            style={styles.back}
            source={require('../../assets/back.png')}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>게시판</Text>
        <TouchableOpacity style={styles.headerBtn2} onPress={onPressBoardWrite}>
          <Image style={styles.back} source={require('../../assets/pen.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <ScrollView style={styles.boardList}>
          {data.map((item: any) => (
            <Board
              key={item.idx}
              onPress={() => onPressBoard(item)}
              data={item}
            />
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
    marginLeft: 140,
  },
  headerText: {
    marginLeft: 100,
  },
  body: {
    flex: 7,
  },
  boardList: {},
  menuText1: {
    fontSize: 20,
  },
  back: {
    width: 30,
    height: 30,
  },
});
