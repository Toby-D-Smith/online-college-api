import express, { Router } from 'express';
import { getCollectionById, getCollections } from '../controllers/collectionController';
import { authenticateToken } from '../common/authentication';

export const collections: Router = express.Router();

collections.route('/collections/:id').get(authenticateToken, getCollectionById);
collections.route('/collections').get(authenticateToken, getCollections);
