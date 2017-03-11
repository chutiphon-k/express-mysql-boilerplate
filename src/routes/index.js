import { Router } from 'express'
import example from './example'
import users from './users'

const router = Router()

router.use('/', example)
router.use('/users', users)

export default router