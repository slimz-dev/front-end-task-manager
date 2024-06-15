import io from 'socket.io-client/dist/socket.io';
console.log(process.env.REACT_APP_BE_URL);
export const socket = io(process.env.REACT_APP_BE_URL);
