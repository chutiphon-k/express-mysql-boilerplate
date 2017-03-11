import http from 'http'
import config from 'config'
import app from '../app'

const server = http.Server(app)
const port = process.env.PORT || config.Api.port

server.listen(port, () => {
    console.log('[INFO] Listening on *:' + port)
})