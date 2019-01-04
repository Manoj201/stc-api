'use strict';

import express from 'express';
import HttpStatus from 'http-status-codes';
import Promise from 'bluebird';

import {authenticateRoutes, userRoutes} from './src/v1/routers';
import init from './src/config/init';
import config from './src/config/appConfig';
import logger from './src/util/loger';
import errorFactory from './src/util/errorFactory';
import models from './src/models';
import middlewares from './src/middlewares';

const app = express();
app.listenAsync = Promise.promisify(app.listen).bind(app);

const registerApi = (sdpApp) => {
  authenticateRoutes(sdpApp);
  userRoutes(sdpApp);
};

const registerGlobalErrorHandler = (sdpApp) => {
  sdpApp.use((err, req, res, next) => {
    logger.error(err.message || err, {token: req.traceId});
    res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR)
      .json(err || errorFactory.internalServerError(req.traceId, err));
  });
};

init();
middlewares.configure(app);
registerApi(app);
registerGlobalErrorHandler(app);

models.sequelize.sync({}).then(() => {
  app.listen(config.port, () => {
    logger.info(`SDP API started and listening on port ${config.port}`);
  });
});


