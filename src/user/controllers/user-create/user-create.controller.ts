import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserInput } from 'src/user/dto/create-user.input';
import { UserCreateService } from 'src/user/services/user-create/user-create.service';

@Controller('user/create')
export class UserCreateController {

    constructor(
        private readonly userService: UserCreateService
    ){}

    @Post()
    async create(@Body() createUserDto: CreateUserInput){
        return this.userService.create(createUserDto);
    }
}
