import { collectionRepository } from '../repositories/collectionRepository';
import { CollectionService } from '../interfaces/services/collectionService';

export const collectionService: CollectionService = {
  repo: collectionRepository,
  async getCollectionById(id) {
    try {
      return await this.repo.find(id);
    } catch (e) {
      throw e;
    }
  },
  async getCollections() {
    try {
      return await this.repo.findMany();
    } catch (e) {
      throw e;
    }
  },
};
