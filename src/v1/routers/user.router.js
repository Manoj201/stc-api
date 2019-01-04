'use strict';

import express from 'express';

import authenticate from '../../middlewares/authenticate';
import {userOperations} from '../controllers';

const router = express.Router();

const userRoutes = (sdpApp) => {
  router.route('/:id').get(userOperations.getById);
  router.route('/').get(userOperations.getAll);
  sdpApp.use('/api/v1/users', authenticate, router);
};

export default userRoutes;
