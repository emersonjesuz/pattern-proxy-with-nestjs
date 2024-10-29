import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user-repository';
import { PrismaUserRepository } from '../prisma/prisma-user.repository';
import { RedisService } from '../../../redis/redis.service';
import { User } from 'src/users/user.entity';

@Injectable()
export class RedisUserRepository implements UserRepository {
  constructor(
    private readonly prisma: PrismaUserRepository,
    private readonly redis: RedisService,
  ) {}

  async findMany(): Promise<User[]> {
    const cacheUsers = await this.redis.get('users');
    if (!cacheUsers) {
      const users = await this.prisma.findMany();
      await this.redis.set('users', JSON.stringify(users), 15);
      return users;
    }

    return JSON.parse(cacheUsers);
  }
}
