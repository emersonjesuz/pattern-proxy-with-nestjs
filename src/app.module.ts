import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { RedisModule } from './redis/redis.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [RedisModule, PrismaModule, UserModule],
})
export class AppModule {}
