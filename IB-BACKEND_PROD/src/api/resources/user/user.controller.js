import userService from './user.service';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR, UNAUTHORIZED } from 'http-status-codes';
import User from './user.model';

export default {
  async signup(req, res) {
  try{
    const { error, value } = userService.validateSchema(req.body);
    if (error && error.details) {
      return res.status(BAD_REQUEST).json(error);
    }
    const user = await User.create(value);
    return res.json({ success: true, message: 'User created successfully' });
    } catch (err) {
    console.error(err);
    return res.status(INTERNAL_SERVER_ERROR).json(err);
      }
    },
  }
