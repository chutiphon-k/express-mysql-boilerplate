import { Router } from 'express'

const router = Router()

router.route('/')
	.get((req, res) => {
		res.send('Web Express Mysql Boilerplate')
	})

export default router
