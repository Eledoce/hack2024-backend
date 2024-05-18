import mongoose from 'mongoose'

/**
 * @openapi
 * components:
 *   schemas:
 *     Cliente:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         nombrePaciente:
 *           type: string
 *           example: Juan Perez
 *         numeroTelefono:
 *           type: string
 *           example: 1234567890
 *         sexo:
 *           type: string
 *           example: Masculino
 */
const pacienteModel = new mongoose.model('Paciente', {
  id: {
    type: String,
    required: true,
  },
  nombrePaciente: {
    type: String,
    required: true,
  },
  numeroTelefono: {
    type: String,
    required: true,
  },
  sexo: {
    type: String,
    required: true,
  },
})

export default pacienteModel
