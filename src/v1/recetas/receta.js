import mongoose from 'mongoose'

/**
 * @openapi
 * components:
 *   schemas:
 *     Receta:
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
 *         edad:
 *           type: number
 *           example: 25
 *         temperatura:
 *           type: number
 *           example: 36.5
 *         peso:
 *           type: number
 *           example: 70
 *         presionArterial:
 *           type: string
 *           example: 120/80
 *         fecha:
 *           type: string
 *           example: 2021-12-31
 *         sintomas:
 *           type: string
 *           example: Dolor de cabeza
 *         diagnostico:
 *           type: string
 *           example: Migraña
 *         medicamentos:
 *           type: string
 *           example: Paracetamol
 */
const recetaModel = new mongoose.model('Receta', {
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
  edad: {
    type: Number,
    required: true,
  },
  temperatura: {
    type: Number,
    required: true,
  },
  peso: {
    type: Number,
    required: true,
  },
  presionArterial: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
  sintomas: {
    type: String,
    required: true,
  },
  diagnostico: {
    type: String,
    required: true,
  },
  medicamentos: {
    type: String,
    required: true,
  },
})

const Receta = recetaModel

export default Receta
