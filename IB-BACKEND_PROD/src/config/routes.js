import express from 'express';
import studentController from '../api/controllers/student.controller';

export const router = express.Router();

// Students
router.get('/students', studentController.findAll);
router.get('/students/:id', studentController.findOne);
router.delete('/students/:id', studentController.delete);
router.put('/students/:id', studentController.update);
router.post('/students', studentController.create);
