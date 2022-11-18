'use strict';
import axios from 'axios';

const food = axios.create({
  baseURL: 'http://210.90.136.10:3050/food',
  withCredentials: true,
  headers: {},
});

export const getFood = async () => {
  try {
    const {data} = await food.get('/');
    return data;
  } catch (err) {
    console.log(err);
  }
};
