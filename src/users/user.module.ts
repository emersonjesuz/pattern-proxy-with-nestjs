import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { redisProvider } from 'src/redis/redis.provider';
import { RedisService } from 'src/redis/redis.service';
import { RedisUserRepository } from './repositories/cache/redis-user.repository';
import { PrismaUserRepository } from './repositories/prisma/prisma-user.repository';
import { UserRepository } from './repositories/user-repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserService,
    PrismaUserRepository,
    PrismaService,
    RedisService,
    redisProvider,
    {
      provide: UserRepository,
      useClass: RedisUserRepository,
    },
  ],
})
export class UserModule {}
