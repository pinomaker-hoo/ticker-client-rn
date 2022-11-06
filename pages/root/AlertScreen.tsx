import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import constant from '../../common/constant';

export default function AlertScreen({navigation}: any) {
  const onPressHome = () => {
    navigation.navigate('Bottom');
  };

  const data = [
    '[정보🤔] 동양오더는 네이버 간편 로그인이 가능합니다.',
    '[정보🤔] 학식을 먹고 주변 카페찾기로 가까운 카페를 찾아보세요!',
    '[게시판 안내🚨] 게시판 글 내용에 심한비방 및 욕설이 포함될 경우 관리자에 의해 삭제될 수 있습니다.',
    '[정보🤔] 기본정보 수정에서 프로필 사진을 변경할 수 있습니다.',
    '[이벤트🥳] 게시판 학식평가글중 한분을 뽑아 스타벅스 쿠폰을 드립니다.',
    '[정보🤔] 포인트 충전은 마이페이지에서 가능합니다!',
    '[정보🤔] 메인화면에서 오늘의 식단표를 보세요!',
    '[이벤트🥳] 학식 30회 이상 구매시 학식 1매 증정!',
    '정보🤔] 게시판은 앱서랍에서 들어가 보실 수 있습니다!',
    '[정보🤔] 작성자가 쓴 게시판에 댓글을 달아보세요!',
    '[게시판 안내🚨] 논란이 될 만한 게시글은 관리자에 의해 삭제될 수도 있습니다.',
    '[정보🤔] 식권은 메인화면에서 구매, 사용 가능합니다.',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn} onPress={onPressHome}>
          <Image
            style={styles.back}
            source={require('../../assets/back.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <ScrollView>
          {data.map((item: any, index: number) => (
            <View style={styles.textBox} key={index}>
              <Text style={styles.text}>{item}</Text>
            </View>
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
  back: {
    width: 30,
    height: 30,
  },
  textBox: {
    width: constant.width * 0.9,
    borderBottomWidth: 1,
    borderColor: 'black',
    height: 60,
    justifyContent: 'center',
  },
  text: {},
});
