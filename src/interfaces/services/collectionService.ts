import { Collection } from '../models/collection';
import { CollectionRepository } from '../repositories/collectionRepository';

export interface CollectionService {
  repo: CollectionRepository;
  getCollectionById(id: string): Promise<Collection>;
  getCollections(): Promise<Collection[]>;
}
