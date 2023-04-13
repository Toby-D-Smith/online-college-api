import express, { Router } from 'express';
import { getCollectionById, getCollections } from '../controllers/collectionController';

export const collections: Router = express.Router();

collections.route('/collections/:id').get(getCollectionById);
collections.route('/collections').get(getCollections);
