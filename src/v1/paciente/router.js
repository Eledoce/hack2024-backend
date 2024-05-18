import { Router } from 'express'
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

export default router
