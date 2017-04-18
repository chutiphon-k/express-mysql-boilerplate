import { Router } from 'express'

import web from 'src/routes/web'
import api from 'src/routes/api'

const router = Router()

router.use('/', web)
router.use('/api', api)

export default router
