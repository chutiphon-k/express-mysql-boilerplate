import { Router } from 'express'

import example from 'src/routes/example'
import users from 'src/routes/users'

const router = Router()

router.use('/', example)
router.use('/users', users)

export default router
