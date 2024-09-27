import { Appointments } from "src/appointments/entities/appointments.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity("usuarios")
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @PrimaryGeneratedColumn('uuid')
    uuid: string

    @Column({name: "nome"})
    name: string

    @Column()
    email: string

    @Column({name: "senha"})
    password: string

    @Column({name: "data_criacao"})
    createdAt: Date 

    @Column({name: "data_adaptacao"})
    updatedAt: Date 

    @OneToMany(() => Appointments, (appointment) => appointment.user)
    appointments: Appointments[]
}
