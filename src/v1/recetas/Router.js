import { Router } from 'express'
import Receta from './receta.js'

const router = Router()

router.get('/', (req, res) => {
  Receta.find().then((data) => {
    res.json(data)
  })
})

router.post('/', (req, res) => {
  // TODO agregar validaciones
  const receta = new Receta({
    nombrePaciente: req.body.nombrePaciente,
    numeroTelefono: req.body.numeroTelefono,
    sexo: req.body.sexo,
    edad: req.body.edad,
    temperatura: req.body.temperatura,
    peso: req.body.peso,
    presionArterial: req.body.presionArterial,
    sintomas: req.body.sintomas,
    diagnostico: req.body.diagnostico,
    medicamentos: req.body.medicamentos,
  })

  receta.save().then((data) => {
    res.json(data)
  })
})

export default router
