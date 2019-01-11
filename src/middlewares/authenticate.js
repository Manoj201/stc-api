'use strict';
import HttpStatus, {UNAUTHORIZED} from 'http-status-codes';
import jwt from 'jsonwebtoken';

import errorFactory from '../util/errorFactory';
import logger from '../util/loger';

const authenticate = (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
    if (bearerToken) {
      const token = bearerToken.split('Bearer ')[1];
      const jwtPayload = jwt.verify(token, 'stc_ob_09');
      if (jwtPayload) {
        next();
      }
    } else {
      const error = errorFactory[UNAUTHORIZED](req.traceId);
      logger.error(error.message, {token: req.traceId});
      res.status(HttpStatus.FORBIDDEN).json(error);
    }
  } catch (error) {
    const err = errorFactory[UNAUTHORIZED](req.traceId);
    logger.error(error.message, {token: req.traceId});
    res.status(HttpStatus.FORBIDDEN).json(err);
  }
};

export default authenticate;
