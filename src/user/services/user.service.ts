import { CreateUserRequestDto } from '../dtos/create-user.request.dto';
import { UserResponseDto } from '../dtos/user.response.dto';
import { UserRepository } from './../repositories/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) { }

  public async create(createUser: CreateUserRequestDto): Promise<UserResponseDto> {
    return this.userRepository.create(createUser);
  }
}
