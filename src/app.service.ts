import { Injectable } from '@nestjs/common';
import { SmsService } from './sms/sms.service';

@Injectable()
export class AppService {
  constructor(
    private readonly smsService: SmsService
  ){}
  async getHello(){
    return {
      message:"bem-vindo",

    };
  }
}
