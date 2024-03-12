import { check }  from "express-validator"
import { validateResult } from "./validateHelpers.js";



export const validateCreate =[ 
  check('spice')
  .exists()
  .notEmpty()
  .isNumeric()
  .withMessage('El campo spice debe ser un número'),

  check('abonated')
  .exists()
  .notEmpty()
  .isDate()
  .withMessage('El campo abonated debe ser una fecha válida'),

  check('trasplanted')
  .exists()
  .notEmpty()
  .isDate()
  .withMessage('El campo trasplanted debe ser una fecha válida'),

  check ('notes')
  .exists()
  .notEmpty()
  .isString()
  .withMessage('El campo notes debe ser una cadena de texto'),

  check('images')
  .exists()
  .isEmpty()
  .isURL()
  .withMessage('El campo images debe ser una URL válida'),
(req,res, next) => {    //esto tiene que retornar error verificar, o que siga el flujo de la continuidad de su contolador//
    validateResult(req,res,next)
}
]

