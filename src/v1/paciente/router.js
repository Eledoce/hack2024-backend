import { Router } from 'express'
import crypto from 'node:crypto'

import pacienteModel from './cliente.js'
const router = Router()

// rutas a Pacientes
/**
 * @openapi
 * /api/v1/paciente/:
 *  get:
 *    tags:
 *      - Paciente
 *    responses:
 *      200:
 *        description: Returns a list of clientes
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  example: OK
 *                data:
 *                  type: array
 *                  items:
 *                    $ref: "#/components/schemas/Cliente"
 */

router.get('/', async (req, res) => {
  const pacientes = await pacienteModel.find()
  res.json(pacientes)
})

/**
 * @openapi
 * /api/v1/paciente/:
 *  post:
 *    tags:
 *      - Paciente
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/Cliente"
 *    responses:
 *      200:
 *        description: Returns the created Paciente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Cliente"
 */

router.post('/', async (req, res) => {
  const paciente = new pacienteModel({
    nombrePaciente: req.body.nombrePaciente,
    numeroTelefono: req.body.numeroTelefono,
    sexo: req.body.sexo,
    id: crypto.randomUUID(),
  })
  await paciente.save()
  res.json(paciente)
})

/**
 * @openapi
 * /api/v1/paciente/{id}:
 *  put:
 *    tags:
 *      - Paciente
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID del paciente
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/Cliente"
 *    responses:
 *      200:
 *        description: Returns the Paciente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Cliente"
 */
router.put('/:id', async (req, res) => {
  const paciente = await pacienteModel.findOneAndUpdate(
    { id: req.params.id },
    req.body,
    { new: true }
  )
  res.json(paciente)
})
router.put('/:id', async (req, res) => {
  const paciente = await pacienteModel.findOneAndUpdate(
    { id: req.params.id },
    req.body,

    { new: true }
  )
  res.json(paciente)
})

// delete
/**
 * @openapi
 * /api/v1/paciente/{id}:
 *  delete:
 *    tags:
 *      - Paciente
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: ID del paciente
 *    responses:
 *      200:
 *        description: Returns the Paciente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Cliente"
 */

router.delete('/:id', async (req, res) => {
  console.log(req.params.id, 'req.params.id')
  const paciente = await pacienteModel.findOneAndDelete({ _id: req.params.id })

  res.json(paciente)
})

export default router
