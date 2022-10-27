import {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Color} from '../../assets/color';
import constant from '../../common/constant';

export default function InitPasswordScreen({navigation}: any) {
  const [email, setEmail] = useState('');

  const onPressHome = () => {
    navigation.navigate('Login');
  };

  const onPressBtn = () => {
    console.log(email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn} onPress={onPressHome}>
          <Text>뒤로가기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.outBox}>
          <Text style={styles.title}>비밀번호 찾기</Text>
          <Text style={styles.text}>가입하신 이메일 주소를 입력해주세요.</Text>
          <Text style={styles.text}>임시 비밀번호를 보내드립니다.</Text>
          <Text style={styles.label}>* 이메일 주소</Text>
          <View style={styles.inBox}>
            <TextInput
              style={styles.inputText}
              onChangeText={email => setEmail(email)}
            />
            <TouchableOpacity style={styles.btn} onPress={onPressBtn}>
              <Text style={styles.btnText}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 7,
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
  btn: {
    width: constant.width * 0.8,
    height: 50,
    backgroundColor: Color.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
  },
  inputText: {
    width: constant.width * 0.8,
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
  },
  label: {
    fontSize: 18,
    marginTop: 30,
  },
  btnText: {
    fontSize: 18,
    color: 'white',
  },
  outBox: {
    marginLeft: 30,
  },
  inBox: {
    marginLeft: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
