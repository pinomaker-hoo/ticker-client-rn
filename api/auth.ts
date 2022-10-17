'use strict';

import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import axios from 'axios';

const auth = axios.create({
  baseURL: 'http://localhost:3050/auth',
  withCredentials: true,
  headers: {},
});

export const login = async (email: string, password: string): Promise<any> => {
  try {
    return await auth({
      method: 'post',
      url: '/local',
      data: {email, password},
    });
  } catch (err) {
    console.log(err);
  }
};

export const nullCheck = (data: string): boolean => {
  if (!data) return false;
  return true;
};

export const register = async (
  email: string,
  password: string,
  photo: any,
  male: boolean,
  birth: string,
  name: string,
) => {
  try {
    const res = await fetch('http://localhost:3050/auth', {
      method: 'post',
      body: createFormData(photo, email, password, male, birth, name),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const createFormData = (
  photo: any,
  email: string,
  password: string,
  male: boolean,
  birth: string,
  name: string,
) => {
  const data = new FormData();
  // const uri: string = photo.uri;
  data.append('photo', {
    name: photo.fileName,
    type: photo.type,
    uri: photo.uri,
  });
  data.append('email', email);
  data.append('password', password);
  data.append('male', male);
  data.append('birth', birth);
  data.append('name', name);
  return data;
};
