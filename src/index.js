import express from 'express'
import path from 'path'
import http from 'http'
import bodyParser from 'body-parser'
import config from 'config'
import nodeNotifier from 'node-notifier'
import errorhandler from 'errorhandler'
import routes from './routes'

const app = express()
const server = http.Server(app)
const port = process.env.PORT || config.Api.port

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV == undefined) {
	app.use(errorhandler({log: errorNotification}))
}
 
function errorNotification(err, str, req) {
	let title = 'Error in ' + req.method + ' ' + req.url

	notifier.notify({
		title: title,
		message: str
	})
}

app.use('/', routes)

server.listen(port, () => {
    console.log('[INFO] Listening on *:' + port)
})
