'use strict';
import HttpStatus, {NOT_FOUND} from 'http-status-codes';
import uuidv1 from 'uuid/v1';

import {userService} from '../servicess';
import errorFactory from '../../util/errorFactory';
import updateAddress from '../servicess/user/user.updateAddress';

const userOperations = {

  getById: async (req, res, next) => {
    const data = await userService.getById(req.params.id);
    data ? res.status(HttpStatus.OK).json(data) : next(errorFactory[NOT_FOUND](req.traceId));
  },

  getAll: async (req, res, next) => {
    try {
      const data = await userService.getAll();
      res.status(HttpStatus.OK).json(data);
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    const userData = {
      id: uuidv1(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      password: req.body.password,
      roleId: req.body.roleId,
    };
    const data = await userService.create(userData);
    data.status === HttpStatus.CREATED ?
      res.status(HttpStatus.CREATED).json(data.result) : next(errorFactory[data.status](req.traceId));
  },
  update: async (req, res, next) => {
    const userData = {
      id: req.params.id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      shortName: req.body.shortName,
    };
    const data = await userService.update(userData);
    data.status === HttpStatus.OK ?
      res.status(HttpStatus.OK).json(data.result) : next(errorFactory[data.status](req.traceId));
  },
  updateContactDetails: async (req, res, next) => {
    const {mobileNo1, mobileNo2, homePhone, officePhone, email, fbUrl, linkedinUrl, skypeId} = req.body;
    const {id} = req.params;
    const contactDetailsData = {
      mobileNo1,
      mobileNo2,
      homePhone,
      officePhone,
      email,
      fbUrl,
      linkedinUrl,
      skypeId,
    };
    const data = await userService.updateContactDetails(contactDetailsData, id);
    data.status === HttpStatus.OK ?
      res.status(HttpStatus.OK).json(data.result) : next(errorFactory[data.status](req.traceId));
  },
  updateAddress: async (req, res, next) => {
    const {number, street, town, city} = req.body;
    const addressData = {
      number, street, town, city,
    };
    const {id: userId} = req.params;

    const data = await userService.updateAddress(addressData, userId);
    data.status === HttpStatus.OK ?
      res.status(HttpStatus.OK).json(data.result) : next(errorFactory[data.status](req.traceId));
  },
  updateJobDetail: async (req, res, next) => {
    const {occupationId, employerId, branchId} = req.body;
    const jobData = {
      occupationId, employerId, branchId,
    };
    const {id: userId} = req.params;

    const data = await userService.updateJobDetail(jobData, userId);
    data.status === HttpStatus.OK ?
      res.status(HttpStatus.OK).json(data.result) : next(errorFactory[data.status](req.traceId));
  },
};

export default userOperations;
