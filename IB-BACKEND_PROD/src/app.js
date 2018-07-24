import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';
import cors from 'cors';

import { router } from './config/routes';
import { userRouter} from "./api/resources/user/user.router";

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/studentBuilder', { useNewUrlParser: true },
  () => console.log('Connected to mongo...'));

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(logger('dev'));
app.use('/api', router);
app.use('/api/users', userRouter);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.message = 'Invalid route';
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message,
    },
  });
});

app.get('/', (req, res) => {
  res.json({
  msg: 'Welcome to Invoice builder backend',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});