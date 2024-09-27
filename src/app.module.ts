import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { ConfigModule } from '@nestjs/config';
import { SmsModule } from './sms/sms.module';
import { SmsService } from './sms/sms.service';
import { GraphqlModule } from './graphql/graphql.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfig } from 'db/datasource';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(DbConfig),
    UserModule, AuthModule, DatabaseModule, AppointmentsModule, SmsModule, GraphqlModule, ApiModule],
  controllers: [AppController],
  providers: [AppService, SmsService],
})
export class AppModule {}
