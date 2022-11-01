import {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {updatePassword} from '../../api/auth';
import {Color} from '../../assets/color';
import {nullCheck} from '../../common/common';
import constant from '../../common/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ChangePasswordScreen({navigation}: any) {
  const [password, setPassword] = useState('');
  const [changePassword, setChangePassword] = useState('');
  const [changePasswordc, setChangePasswordc] = useState('');

  const onPressHome = () => {
    navigation.navigate('Bottom');
  };

  const onPressBtn = async () => {
    if (!nullCheck([password, changePassword, changePasswordc]))
      return Alert.alert('입력해주세요.');
    if (changePassword !== changePasswordc)
      return Alert.alert('새 비밀번호와 새 비밀번호 확인이 같지 않습니다.');
    const {data}: any = await updatePassword(password);
    if (!data) Alert.alert('ERROR');
    Alert.alert('변경 완료되었습니다.', '다시 로그인해주세요.');
    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('accesstoken');
    navigation.navigate('Login');
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
          <Text style={styles.title}>비밀번호 재설정</Text>
          <Text style={styles.text}>재설정할 비밀번호를 입력해주세요.</Text>
          <View style={styles.inBox}>
            <Text style={styles.label1}>현재 비밀번호</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={password => setPassword(password)}
            />
            <Text style={styles.label2}>새 비밀번호</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={changePassword => setChangePassword(changePassword)}
            />
            <Text style={styles.label3}>새 비밀번호 확인</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={changePasswordc =>
                setChangePasswordc(changePasswordc)
              }
            />
            <TouchableOpacity style={styles.btn} onPress={onPressBtn}>
              <Text style={styles.btnText}>비밀번호 재설정</Text>
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
  label1: {
    fontSize: 18,
    marginTop: 30,
    marginLeft: -200,
  },
  label2: {
    fontSize: 18,
    marginTop: 30,
    marginLeft: -220,
  },
  label3: {
    fontSize: 18,
    marginTop: 30,
    marginLeft: -180,
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
