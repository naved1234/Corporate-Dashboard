import express from 'express';
import studentController from '../api/controllers/student.controller';
import passport from 'passport';

export const router = express.Router();

// Students
router.get('/students', passport.authenticate('jwt', {session: false}), studentController.findAll);
router.get('/students/:id', passport.authenticate('jwt', {session: false}), studentController.findOne);
router.delete('/students/:id', passport.authenticate('jwt', {session: false}), studentController.delete);
router.put('/students/:id', passport.authenticate('jwt', {session: false}), studentController.update);
router.post('/students/new', passport.authenticate('jwt', {session: false}), studentController.create);
