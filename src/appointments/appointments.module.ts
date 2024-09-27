import { Module } from '@nestjs/common';
import { AppointmentsCreateController } from './controllers/appointments-create/appointments-create.controller';
import { AppointmentsCreateService } from './services/appointments-create/appointments-create.service';
import { AppointmentsRepository } from './repositories/appointments.repository';
import { UserReadService } from 'src/user/services/user-read/user-read.service';
import { UserRepository } from 'src/user/repositories/user.repository';
import { SmsService } from 'src/sms/sms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Appointments } from './entities/appointments.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    AppointmentsCreateService,
    AppointmentsRepository,
    UserReadService, 
    UserRepository, 
    SmsService,
    JwtService
  ],
  controllers: [
    AppointmentsCreateController, 
  ],
  imports:[
    TypeOrmModule.forFeature([User, Appointments]),
  ]
})
export class AppointmentsModule {}
