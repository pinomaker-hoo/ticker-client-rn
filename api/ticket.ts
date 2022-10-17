'use strict';
import axios from 'axios';

const ticket = axios.create({
  baseURL: 'http://localhost:3050/ticket',
  withCredentials: true,
  headers: {},
});

export const getTicketList = async () => {
  return await ticket.get('/');
};
