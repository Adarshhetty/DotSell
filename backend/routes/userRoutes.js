import express from 'express';
// import { check, query, validationResult } from 'express-validator'
import User from '../modals/userModal.js';
import bcrypt from 'bcryptjs'
import expressAsyncHandler from 'express-async-handler'
import { generateToken } from '../utils.js';
const userRouter = express.Router()
userRouter.post(
    '/signin',
    expressAsyncHandler(async (req, res) => {
        console.log(req.body.email);
      const user = await User.findOne({ email: req.body.email });
      console.log(user);
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user),
          });
          return;
        }
      }
      res.status(401).send({ message: 'Invalid email or password' });
    })
  );
export default userRouter