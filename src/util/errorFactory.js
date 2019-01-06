'use strict';

import HTTPStatus from 'http-status-codes';

export const unAuthorized = (traceId, error) => ({
  status: HTTPStatus.UNAUTHORIZED,
  message: 'User Unauthorized',
  error: error || {},
});
export const internalServerError = (traceId, error) => ({
  status: HTTPStatus.INTERNAL_SERVER_ERROR,
  message: 'Internal Server Error',
  error: error || {},
});
export const notFound = (traceId, error) => ({
  status: HTTPStatus.NOT_FOUND,
  message: 'Resource Not Found',
  error: error || {},
});
export const conflict = (traceId, error) => ({
  status: HTTPStatus.CONFLICT,
  message: 'Rsource Conflict',
  error: error || {},
});

export const errorFactory = {
  [HTTPStatus.UNAUTHORIZED]: unAuthorized,
  [HTTPStatus.INTERNAL_SERVER_ERROR]: internalServerError,
  [HTTPStatus.NOT_FOUND]: notFound,
  [HTTPStatus.CONFLICT]: conflict,
};
export default errorFactory;
