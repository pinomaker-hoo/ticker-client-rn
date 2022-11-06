import React, {useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Color} from '../../assets/color';
import {login, nullCheck, naverLogin} from '../../api/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NaverLogin, getProfile} from '@react-native-seoul/naver-login';

const iosKeys = {
  kConsumerKey: 'W9xVpecA1cMK2mrjELZk',
  kConsumerSecret: '0I7Gq4kTEb',
  kServiceAppName: 'Dongyang Order',
  kServiceAppUrlScheme: 'naverLogin',
};

export default function LoginScreen({navigation}: any) {
  const [naverToken, setNaverToken]: any = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressLogin = async () => {
    if (!nullCheck(email)) return Alert.alert('이메일을 입력하세요.');
    if (!nullCheck(password)) return Alert.alert('비밀번호를 입력하세요.');
    const {data} = await login(email, password);
    if (!data) return Alert.alert('로그인 실패!');
    await AsyncStorage.setItem('accesstoken', JSON.stringify(data.token));
    await AsyncStorage.setItem('user', JSON.stringify(data.user));
    if (!data.user.pass) return navigation.navigate('SetPassword');
    navigation.navigate('Bottom');
  };

  const naverLoginBtnClick = async (props: any) => {
    NaverLogin.login(props, (err, token: any) => {
      setNaverToken(token);
      if (err) console.log(err);
    });
    await getUserProfile();
  };

  const getUserProfile = async () => {
    const profileResult = await getProfile(naverToken.accessToken);
    if (profileResult.resultcode === '024') {
      Alert.alert('로그인 실패', profileResult.message);
      return;
    }
    const {data} = await naverLogin(
      profileResult.response.email,
      profileResult.response.id,
      profileResult.response.name,
    );
    await AsyncStorage.setItem('accesstoken', JSON.stringify(data.token));
    await AsyncStorage.setItem('user', JSON.stringify(data.user));
    if (!data.user.pass) return navigation.navigate('SetPassword');
    navigation.navigate('Bottom');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image style={styles.img} source={require('../../assets/logo.png')} />
      </View>
      <View style={styles.inputBox}>
        <View style={styles.innerBox}>
          <Text style={styles.innerBoxText}>이메일</Text>
          <TextInput
            onChangeText={email => setEmail(email)}
            style={styles.innerBoxInput}
          />
        </View>
        <View style={styles.innerBox}>
          <Text style={styles.innerBoxText1}>패스워드</Text>
          <TextInput
            onChangeText={password => setPassword(password)}
            style={styles.innerBoxInput}
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={styles.loginBtnBox}>
        <TouchableOpacity style={styles.loginBtn} onPress={onPressLogin}>
          <Text>로그인</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textBox}>
        <Text
          style={styles.textBoxText}
          onPress={() => navigation.navigate('InitPassword')}
        >
          비밀번호가 기억이 안 나세요?
        </Text>
        <Text
          style={styles.textBoxText}
          onPress={() => navigation.navigate('Register')}
        >
          회원 가입
        </Text>
      </View>
      <View style={styles.kakaoBox}>
        <TouchableOpacity
          style={styles.kakaoBtn}
          onPress={() => naverLoginBtnClick(iosKeys)}
        >
          <Text style={styles.naverBtnText}>네이버 로그인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.blue,
  },
  logoBox: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    marginTop: 40,
    width: 150,
    height: 150,
  },
  inputBox: {
    flex: 2,
  },
  loginBtnBox: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  kakaoBox: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerBoxText: {
    color: 'white',
    marginLeft: -210,
  },
  innerBoxText1: {
    color: 'white',
    marginTop: -50,
    marginLeft: -200,
  },
  innerBoxInput: {
    backgroundColor: 'white',
    width: 250,
    height: 40,
    marginTop: 10,
  },
  loginBtn: {
    backgroundColor: 'white',
    width: 250,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBoxText: {
    color: 'white',
    marginRight: 40,
  },
  kakaoBtn: {
    backgroundColor: '#2db400',
    width: 250,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
  },
  naverBtnText: {
    color: 'white',
  },
});
