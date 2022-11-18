import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {updateImage} from '../../api/auth';
import {imgToBase64Code} from '../../common/base64';

export default function ChangeAdminScreen(props: any) {
  const [photo, setPhoto]: any[] = useState(null);
  const [user, setUser]: any = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    setUser(() => props.route.params.data);
    setLoading(() => false);
  };

  const handleChoosePhoto = () => {
    launchImageLibrary({mediaType: 'photo'}, (response: any) => {
      if (response) {
        setPhoto(response);
      }
    });
  };

  const onPressHome = () => {
    props.navigation.navigate('Bottom');
  };

  const updateImageApi = async () => {
    if (!photo) return Alert.alert('이미지를 선택하지 않았습니다.');
    const base = await imgToBase64Code(photo.assets[0].uri);
    const {data}: any = await updateImage(base);
  };

  const onPressUpdateBtn = () => {
    Alert.alert(
      '이미지 변경하겠습니까?',
      '',
      [
        {
          text: '아니요.',
          style: 'cancel',
        },
        {
          text: '네',
          onPress: () => updateImageApi(),
        },
      ],
      {cancelable: false},
    );
  };

  if (loading) return null;
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
        <TouchableOpacity onPress={handleChoosePhoto}>
          {photo ? (
            <Image style={styles.img} source={{uri: photo.assets[0].uri}} />
          ) : (
            <Image
              style={styles.img}
              source={{
                uri: `http://210.90.136.10:3050${user.image.substr(1)}.jpg`,
              }}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressUpdateBtn} style={styles.bodyBtn}>
          <Text style={styles.bodyBtnText}>이미지 변경</Text>
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
  header: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  headerBtn: {
    marginLeft: 30,
  },
  body: {
    flex: 7,
    alignItems: 'center',
  },
  img: {
    marginTop: 100,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#E8E8E8',
  },
  bodyBtn: {
    backgroundColor: 'blue',
    width: 80,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  bodyBtnText: {
    color: 'white',
  },
  back: {
    width: 30,
    height: 30,
  },
});
