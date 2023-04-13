import { User } from '../models/user';
import { AuthenticationRepository } from '../repositories/authenticationRepositoy';

export interface AuthenticationService {
  repo: AuthenticationRepository;
  getUser(username: string): Promise<User | null>;
  createUser(username: string, password: string): Promise<User>;
}
