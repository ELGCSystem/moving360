const io = require("socket.io")(5000, {
	cors: {
		origin: "http://localhost:3000"
	},
});

let users = [];

const addUser = (userId, socketId) => {
	!users.some( user => user.userId === userId ) &&
	users.push({ userId, socketId });
};

const removeUser = socketId => {
	users = users.filter( user => user.socketId !== socketId );
};

const getUser = userId => {
	return users.find( user => user.userId === userId );
};
	


io.on('connection', (socket) => {

	// Cuando un usuario se conecta.
	console.log('a user connected');

	socket.on("addUser", userId => {
		addUser(userId, socket.id);
		io.emit("getUsers", users);
	});

	// Enviar y recibir mensajes.
	socket.on("sendMessage", ({ senderId, receiverId, text }) => {

		const user = getUser(receiverId);

		if (user) {
			io.to(user.socketId).emit("getMessage", {
				senderId,
				text
			});
		}
	});

	// Cuando un usuario se desconecta.
	socket.on("disconnect", () => {
		console.log('a user disconnected');
		removeUser(socket.id);
		io.emit("getUsers", users);
	});
});