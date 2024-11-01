import { Injectable } from '@nestjs/common';
import { UserRepository } from './repositories/user-repository';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async getUsers(): Promise<User[]> {
    const users = await this.userRepository.findMany();
    return users;
  }
}
