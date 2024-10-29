import { User } from '../user.entity';

export abstract class UserRepository {
  abstract findMany(): Promise<User[]>;
}
