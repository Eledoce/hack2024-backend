import { Router } from 'express'
import RouterRecetas from './recetas/Router.js'

const router = Router()

router.use('/recetas', RouterRecetas)

export default router
