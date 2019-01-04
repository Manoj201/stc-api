'use strict';

import express from 'express';

import {authenticateOperation, userOperations} from '../controllers';

const router = express.Router();

const authenticateRoutes = (sdpApp) => {
  router.route('/login').post(authenticateOperation.autenticate);
  router.route('/create_account').post(userOperations.create);
  sdpApp.use('/api/v1', router);
};

export default authenticateRoutes;
