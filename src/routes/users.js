import { Router } from 'express'
import { UserController } from '../controllers'

const router = Router()

router.route('/')
	.get(UserController.getUsers)
	.post(UserController.postUser)

router.route('/:id')
	.get(UserController.getUserById)
	.patch(UserController.patchUserById)
	.delete(UserController.deleteUserById)

export default router