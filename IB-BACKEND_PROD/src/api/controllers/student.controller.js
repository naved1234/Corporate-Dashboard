import Joi from 'joi';
import HttpStatus from 'http-status-codes';
import Student from '../models/student.model';

export default {
  findAll(req, res, next) {
    Student.find()
      .then(students => res.json(students))
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },
  create(req, res, next) {
    const schema = Joi.object().keys({
      name: Joi.string().required(),
      technology: Joi.string().required(),
      experience: Joi.string().optional(),
      phone: Joi.string().required(),
    });
    const { error, value } = Joi.validate(req.body, schema);
    if (error && error.details) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    Student.create(value)
      .then(student => res.json(student))
  .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },
  findOne(req, res) {
    const { id } = req.params;
    Invoice.findById(id)
      .then(invoice => {
      if (!invoice) {
      return res.status(HttpStatus.NOT_FOUND).json({ err: 'Could not find any invoice' });
    }
    return res.json(invoice);
  })
  .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },
  delete(req, res) {
    const { id } = req.params;
    Invoice.findByIdAndRemove(id)
      .then(invoice => {
      if (!invoice) {
      return res.status(HttpStatus.NOT_FOUND).json({ err: 'Could not delete any invoice' });
    }
    return res.json(invoice);
  })
  .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },
  update(req, res) {
    const { id } = req.params;
    const schema = Joi.object().keys({
      item: Joi.string().optional(),
      date: Joi.date().optional(),
      due: Joi.date().optional(),
      qty: Joi.number()
        .integer()
        .optional(),
      tax: Joi.number().optional(),
      rate: Joi.number().optional(),
    });
    const { error, value } = Joi.validate(req.body, schema);
    if (error && error.details) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    Invoice.findOneAndUpdate({ _id: id }, value, { new: true })
      .then(invoice => res.json(invoice))
  .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },
};