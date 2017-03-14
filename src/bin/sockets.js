import socketIO from 'socket.io'

let sockets = {}

sockets.init = (server) => {
	const io = new socketIO(server)
	io.on('connect', (socket) => {
		console.log('connect')
		socket.emit('competitions', 'aaaaa')

		socket.on('a', (response) => {
			console.log(`${response}`)
		})
	})
}

export default sockets