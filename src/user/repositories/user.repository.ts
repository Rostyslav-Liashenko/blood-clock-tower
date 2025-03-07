import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserRequestDto } from '../dtos/create-user.request.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) { }

  public async create(createUser: CreateUserRequestDto): Promise<User> {
    const { firstName, lastName } = createUser;

    return this.prismaService.user.create({
      data: {
        firstName,
        lastName,
      },
    });
  }
}
