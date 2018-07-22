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
    Student.findById(id)
      .then(student => {
      if (!student) {
      return res.status(HttpStatus.NOT_FOUND).json({ err: 'Could not find any student' });
    }
    return res.json(student);
  })
  .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },
  delete(req, res) {
    const { id } = req.params;
    Student.findByIdAndRemove(id)
      .then(student => {
      if (!student) {
      return res.status(HttpStatus.NOT_FOUND).json({ err: 'Could not delete any student' });
    }
    return res.json(student);
  })
  .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },
  update(req, res) {
    const { id } = req.params;
    const schema = Joi.object().keys({
      name: Joi.string().optional(),
      technology: Joi.string().optional(),
      experience: Joi.string().optional(),
      phone: Joi.string().optional(),
    });
    const { error, value } = Joi.validate(req.body, schema);
    if (error && error.details) {
      return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    Student.findOneAndUpdate({ _id: id }, value, { new: true })
      .then(student => res.json(student))
      .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
  },
};