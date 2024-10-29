import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user-repository';
import { User } from 'src/users/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}
  async findMany(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }
}
