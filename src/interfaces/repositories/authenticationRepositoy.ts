import { User } from '../models/user';

export interface AuthenticationRepository {
  find(username: string): Promise<User>;
  create(username: string, password: string): Promise<User>;
}
