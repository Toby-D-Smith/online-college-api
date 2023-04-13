import { AuthenticationService } from '../interfaces/services/authenticationService';
import { authenticationRepository } from '../repositories/authenticationRepository';

export const authenticationService: AuthenticationService = {
  repo: authenticationRepository,
  async getUser(username: string) {
    try {
      return await this.repo.find(username);
    } catch (e) {
      throw e;
    }
  },
  async createUser(username, password) {
    try {
      return await this.repo.create(username, password);
    } catch (e) {
      throw e;
    }
  },
};
