import io from 'socket.io-client';

export const socket = io(process.env.BE_URL);
