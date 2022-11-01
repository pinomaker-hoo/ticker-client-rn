'use strict';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const board = axios.create({
  baseURL: 'http://localhost:3050/board',
  withCredentials: true,
  headers: {},
});

export const saveBoard = async (
  title: string,
  text: string,
  base: string[],
) => {
  try {
    const token = await AsyncStorage.getItem('accesstoken');
    const jsonParser = token && (await JSON.parse(token));
    return await board({
      method: 'post',
      url: '/',
      data: {title, text, base},
      headers: {
        accessToken: jsonParser,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getBoardList = async () => {
  try {
    return await board({
      method: 'get',
      url: '/',
    });
  } catch (err) {
    console.log(err);
  }
};
