import { Injectable } from "@nestjs/common";
import { AppointmentsProps, IAppointmentsRepo } from "../interfaces";
import { Appointments } from "../entities/appointments.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";



@Injectable()
export class AppointmentsRepository implements IAppointmentsRepo {

    constructor(
        @InjectRepository(Appointments)
        private typeOrm: Repository<Appointments>
    ) { }

    async create(values: AppointmentsProps, userId: number): Promise<Appointments> {

        const { name, bi, dateVisit, email, phone, visitTime } = values

        return await this.typeOrm.save({
            email,
            name,
            phone,
            bi,
            visitTime,
            dateVisit,
            userId,
        })
    }
}