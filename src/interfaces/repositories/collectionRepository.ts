import { Collection } from '../models/collection';

export interface CollectionRepository {
  find(id: string): Promise<Collection>;
  findMany(): Promise<Collection[]>;
}
