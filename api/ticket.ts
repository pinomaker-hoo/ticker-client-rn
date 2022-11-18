'use strict';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ticket = axios.create({
  baseURL: 'http://210.90.136.10:3050/ticket',
  withCredentials: true,
  headers: {},
});

const ticketUser = axios.create({
  baseURL: 'http://210.90.136.10:3050/ticketUser',
  withCredentials: true,
  headers: {},
});

export const getTicketList = async () => {
  return await ticket.get('/');
};

export const buyTicket = async (idx: number) => {
  const token = await AsyncStorage.getItem('accesstoken');
  const jsonParser = token && (await JSON.parse(token));
  return await ticketUser({
    method: 'post',
    url: '/',
    data: {ticketIdx: idx},
    headers: {
      accessToken: jsonParser,
    },
  });
};

export const getTicketUserList = async () => {
  const token = await AsyncStorage.getItem('accesstoken');
  const jsonParser = token && (await JSON.parse(token));
  return await ticketUser({
    method: 'get',
    url: '/user',
    headers: {
      accessToken: jsonParser,
    },
  });
};

export const useTicket = async (idx: number) => {
  try {
    return await ticketUser({
      method: 'patch',
      url: `/${idx}`,
    });
  } catch (err) {
    console.log(err);
  }
};
