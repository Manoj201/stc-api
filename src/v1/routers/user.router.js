'use strict';

import express from 'express';

import authenticate from '../../middlewares/authenticate';
import {userOperations} from '../controllers';

const router = express.Router();

const userRoutes = (sdpApp) => {
  router.route('/:id').get(userOperations.getById);
  router.route('/').get(userOperations.getAll);
  router.route('/:id').put(userOperations.update);
  router.route('/:id/contact_details').put(userOperations.updateContactDetails);
  router.route('/:id/address').put(userOperations.updateAddress);
  router.route('/:id/job_detail').put(userOperations.updateJobDetail);
  sdpApp.use('/api/v1/users', authenticate, router);
};

export default userRoutes;
