import SocketIO from 'socket.io'

let sockets = {}

sockets.init = (server) => {
	const io = new SocketIO(server)
	io.on('connect', (socket) => {
		console.log('connect')
		socket.emit('competitions', 'aaaaa')

		socket.on('a', (response) => {
			console.log(`${response}`)
		})
	})
}

export default sockets
