import { Server, Socket } from "socket.io";

const io = new Server(5000);

io.on('connection', (socket) => {
    console.log('a user connected');
  });