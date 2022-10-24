import React, {useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {Color} from '../../assets/color';
import RadioForm from 'react-native-simple-radio-button';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {register} from '../../api/auth';

export default function RegisterScreen({navigation}: any) {
  const [photo, setPhoto]: any = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('2022-01-01');
  const [male, setMale] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const radio_props = [
    {label: '남자', value: 1},
    {label: '여자', value: 0},
  ];

  const handleChoosePhoto = () => {
    launchImageLibrary({mediaType: 'photo'}, (response: any) => {
      if (response) {
        setPhoto(response.assets[0]);
      }
    });
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    setDate(() => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);
    hideDatePicker();
  };

  const onPressRegisterBtn = async () => {
    const res: any = await register({email, name, password, date, male});
    if (res.data) return navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.headerText}>회원가입</Text>
      </View>
      <View style={styles.imgBox}>
        {photo ? (
          <Image style={styles.img} source={{uri: photo.uri}} />
        ) : (
          <Image style={styles.img} source={require('../../assets/user.png')} />
        )}
        <Button title="Choose Photo" onPress={handleChoosePhoto} />
      </View>
      <View style={styles.inputBox1}>
        <TextInput
          style={styles.textInput}
          placeholder="이메일"
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="비밀번호"
          onChangeText={password => setPassword(password)}
        />
        <TextInput style={styles.textInput} placeholder="비밀번호 확인" />
      </View>
      <View style={styles.inputBox2}>
        <Text style={styles.box2Text}>이름</Text>
        <TextInput
          style={styles.textInput}
          placeholder="이름"
          onChangeText={name => setName(name)}
        />
      </View>
      <View style={styles.maleBox}>
        <Text style={styles.maleText}>성별</Text>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value: any) => {
            value ? setMale(() => true) : setMale(() => false);
          }}
        />
      </View>
      <View style={styles.birthBox}>
        <TouchableOpacity onPress={showDatePicker} style={styles.dateBtn}>
          <Text>{date}</Text>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.btnBox}>
        <TouchableOpacity style={styles.btn} onPress={onPressRegisterBtn}>
          <Text>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerBox: {
    flex: 1,
    backgroundColor: Color.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBox: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#E8E8E8',
  },
  inputBox1: {
    flex: 3,
    alignItems: 'center',
  },
  inputBox2: {
    flex: 1.2,
    alignItems: 'center',
    marginTop: -100,
  },
  maleBox: {
    flex: 1.5,
    marginLeft: 50,
  },
  btnBox: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    marginTop: 30,
  },
  textInput: {
    borderWidth: 2,
    width: 300,
    height: 40,
    marginTop: -1.5,
    padding: 3,
  },
  box2Text: {
    fontSize: 15,
    marginBottom: 10,
    marginLeft: -250,
  },
  btn: {
    backgroundColor: Color.blue,
    width: 250,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
  },
  dateBtn: {
    borderWidth: 2,
    width: 300,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  birthBox: {
    flex: 1.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  maleText: {
    marginBottom: 30,
  },
});
