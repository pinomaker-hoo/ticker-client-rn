'use strict';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const comment = axios.create({
  baseURL: 'http://localhost:3050/comment',
  withCredentials: true,
  headers: {},
});

export const saveComment = async (idx: string, text: string) => {
  try {
    console.log(text);
    const token = await AsyncStorage.getItem('accesstoken');
    const jsonParser = token && (await JSON.parse(token));
    return await comment({
      method: 'post',
      url: `/${idx}`,
      data: {text},
      headers: {
        accessToken: jsonParser,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const getCommentList = async (idx: string) => {
  try {
    return await comment({
      method: 'get',
      url: `/${idx}`,
    });
  } catch (err) {
    console.log(err);
  }
};
