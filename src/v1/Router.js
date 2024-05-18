import { Router } from 'express'
import RouterRecetas from './recetas/Router.js'
import RouterPacientes from './paciente/router.js'

const router = Router()

router.use('/receta', RouterRecetas)
router.use('/paciente', RouterPacientes)

export default router
