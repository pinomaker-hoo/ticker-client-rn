'use strict';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const point = axios.create({
  baseURL: 'http://210.90.136.10:3050/point',
  withCredentials: true,
});

export const getPoint = async () => {
  const token = await AsyncStorage.getItem('accesstoken');
  const jsonParser = token && (await JSON.parse(token));
  return await point({
    method: 'get',
    url: '/',
    headers: {
      accessToken: jsonParser,
    },
  });
};

export const updatePoint = async (money: number) => {
  try {
    const token = await AsyncStorage.getItem('accesstoken');
    const jsonParser = token && (await JSON.parse(token));
    return await point({
      method: 'post',
      url: '/',
      data: {money},
      headers: {
        accessToken: jsonParser,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
