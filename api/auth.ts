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

export const register = async (photo: any, body: any) => {
  try {
    const formData: any = await createFormData(photo, body);
    const data = formData._parts;
    console.log(data);
    const res = await auth({
      method: 'post',
      url: '/',
      data: data,
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
    console.log(data);
  } catch (err) {
    console.log('err', err);
  }
};

const createFormData = async (photo: any, body: any) => {
  const formData = new FormData();
  formData.append('photo', {
    name: photo.assets[0].fileName,
    type: photo.assets[0].type,
    uri: photo.assets[0].uri.replace('file://', ''),
  });

  Object.keys(body).forEach(key => {
    formData.append(key, body[key]);
  });

  return formData;
};
