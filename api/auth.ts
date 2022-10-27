'use strict';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export const register = async (body: any) => {
  try {
    return await auth({
      method: 'post',
      url: '/',
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
        birth: body.date,
        male: body.male,
        base: body.base,
      },
    });
  } catch (err) {
    console.log('err', err);
  }
};

export const setPassApi = async (pass: string) => {
  try {
    const token = await AsyncStorage.getItem('accesstoken');
    const jsonParser = token && (await JSON.parse(token));
    console.log(jsonParser);
    return await auth({
      method: 'patch',
      url: '/',
      data: {pass},
      headers: {
        accessToken: jsonParser,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const findUser = async () => {
  try {
    const token = await AsyncStorage.getItem('accesstoken');
    const jsonParser = token && (await JSON.parse(token));
    return await auth({
      method: 'get',
      url: '/user',
      headers: {
        accessToken: jsonParser,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const naverLogin = async (
  email: string,
  naverId: string,
  name: string,
): Promise<any> => {
  try {
    return await auth({
      method: 'post',
      url: '/naver',
      data: {email, naverId, name},
    });
  } catch (err) {
    console.log('err', err);
  }
};

export const initPassword = async (email: string): Promise<any> => {
  try {
    return await auth({
      method: 'post',
      url: '/password',
      data: {email},
    });
  } catch (err) {
    console.log(err);
  }
};

export const updatePassword = async (password: string) => {
  try {
    const token = await AsyncStorage.getItem('accesstoken');
    const jsonParser = token && (await JSON.parse(token));
    return await auth({
      method: 'patch',
      url: '/password',
      data: {
        password,
      },
      headers: {
        accessToken: jsonParser,
      },
    });
  } catch (err) {}
};
