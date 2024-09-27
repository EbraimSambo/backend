import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repositories/user.repository';
import { DatabaseService } from 'src/database/database.service';
import { DatabaseModule } from 'src/database/database.module';
import { UserCreateController } from './controllers/user-create/user-create.controller';
import { UserReadController } from './controllers/user-read/user-read.controller';
import { UserCreateService } from './services/user-create/user-create.service';
import { UserReadService } from './services/user-read/user-read.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Appointments } from 'src/appointments/entities/appointments.entity';

@Module({
  controllers: [UserController, UserCreateController, UserReadController],
  providers: [
    UserService, 
    DatabaseService, 
    UserCreateService, 
    UserReadService, 
    UserRepository,
    {
      provide: 'IUserRepository',
      useExisting: UserRepository
    },
  ],
  imports: [TypeOrmModule.forFeature([User, Appointments])]
})
export class UserModule {}
