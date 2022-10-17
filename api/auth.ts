'use strict';

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
