import { Router } from 'express'

import web from 'routes/web'
import api from 'routes/api'

const router = Router()

router.use('/', web)
router.use('/api', api)

export default router
