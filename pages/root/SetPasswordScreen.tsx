import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {setPassApi} from '../../api/auth';

export default function SetPasswordScreen({navigation}: any) {
  const [arr, setArr]: any = useState([]);

  const onPress = async () => {
    const str = arr.join('');
    const {data}: any = await setPassApi(str);
    if (data) navigation.navigate('Bottom');
  };

  const pushNumber = (number: number) => {
    if (arr.length < 4) {
      setArr((current: []) => [...current, number]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBox}>
        <Text style={styles.topBoxText}>결제용 암호 4자리를 입력하세요.</Text>
        <View style={styles.pwBigBox}>
          <View style={styles.pwBox2}>
            <Text style={styles.pwBoxText}>{arr.length > 0 ? '*' : null}</Text>
          </View>
          <View style={styles.pwBox}>
            <Text style={styles.pwBoxText}>{arr.length > 1 ? '*' : null}</Text>
          </View>
          <View style={styles.pwBox}>
            <Text style={styles.pwBoxText}>{arr.length > 2 ? '*' : null}</Text>
          </View>
          <View style={styles.pwBox}>
            <Text style={styles.pwBoxText}>{arr.length > 3 ? '*' : null}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomBox}>
        <View style={styles.numBigBox}>
          <TouchableOpacity style={styles.numBox} onPress={() => pushNumber(0)}>
            <Text style={styles.numBoxText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numBox} onPress={() => pushNumber(1)}>
            <Text style={styles.numBoxText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numBox} onPress={() => pushNumber(2)}>
            <Text style={styles.numBoxText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numBox} onPress={() => pushNumber(3)}>
            <Text style={styles.numBoxText}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.numBigBox}>
          <TouchableOpacity style={styles.numBox} onPress={() => pushNumber(4)}>
            <Text style={styles.numBoxText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numBox} onPress={() => pushNumber(5)}>
            <Text style={styles.numBoxText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numBox} onPress={() => pushNumber(6)}>
            <Text style={styles.numBoxText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numBox} onPress={() => pushNumber(7)}>
            <Text style={styles.numBoxText}>7</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.numBigBox}>
          <TouchableOpacity style={styles.numBox} onPress={() => pushNumber(8)}>
            <Text style={styles.numBoxText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.numBox3}
            onPress={() => pushNumber(9)}
          >
            <Text style={styles.numBoxText}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnBox}>
          <TouchableOpacity style={styles.btnBoxBtn2}>
            <Text style={styles.numBoxText}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnBoxBtn} onPress={onPress}>
            <Text style={styles.numBoxText}>입력 완료</Text>
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
  topBox: {
    flex: 1.2,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBox: {
    flex: 1,
  },
  textInput: {
    backgroundColor: 'white',
    width: 100,
    height: 20,
  },
  topBoxText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 30,
  },
  pwBigBox: {
    flexDirection: 'row',
  },
  pwBox: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pwBox2: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numBigBox: {
    flexDirection: 'row',
  },
  numBox: {
    backgroundColor: 'white',
    width: 80,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    marginTop: 15,
    marginLeft: 15,
  },

  numBox3: {
    backgroundColor: 'white',
    width: 80,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    marginTop: 15,
    marginLeft: 205,
  },
  numBoxText: {
    fontSize: 20,
  },
  btnBox: {
    flexDirection: 'row',
  },
  btnBoxBtn: {
    backgroundColor: 'blue',
    width: 175,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    marginTop: 15,
    marginLeft: 15,
  },

  btnBoxBtn2: {
    backgroundColor: 'white',
    width: 175,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    marginTop: 15,
    marginLeft: 15,
  },
  pwBoxText: {
    fontSize: 40,
    marginTop: 15,
  },
});
