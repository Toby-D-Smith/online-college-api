import express, { Router } from 'express';
import { login, register } from '../controllers/authenticationController';

export const authentication: Router = express.Router();

authentication.route('/register').post(register);
authentication.route('/login').post(login);
