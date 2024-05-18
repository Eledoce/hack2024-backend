import { Router } from 'express'
import Receta from './receta.js'

const router = Router()

/**
 * @openapi
 * /api/v1/recetas/:
 *   get:
 *     tags:
 *       - Receta
 *     responses:
 *       200:
 *         description: Returns a list of cafeterias
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Receta"
 */
router.get('/', (req, res) => {
  Receta.find().then((data) => {
    res.json(data)
  })
})

/**
 * @openapi
 * /api/v1/recetas/:
 *   post:
 *     tags:
 *       - Receta
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Receta"
 *     responses:
 *       200:
 *         description: Returns the created Receta
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Receta"
 */

router.post('/', (req, res) => {
  console.log(req.body)
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

  receta
    .save()
    .then((data) => {
      res.json(data)
    })
    .catch((error) => {
      res.status(400).json(error)
    })
})

export default router
