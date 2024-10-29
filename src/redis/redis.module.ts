import { Module } from '@nestjs/common';
import { RedisService } from '../redis/redis.service';
import { redisProvider } from 'src/redis/redis.provider';

@Module({
  imports: [],
  providers: [RedisService, redisProvider],
})
export class RedisModule {}
