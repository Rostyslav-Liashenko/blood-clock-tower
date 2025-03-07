import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [UserRepository, UserService],
  exports: [UserService],
})
export class UserModule { }
