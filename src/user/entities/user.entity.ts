import { Field, ID, Int } from "@nestjs/graphql"
import { Appointments } from "src/appointments/entities/appointments.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity("usuarios")
export class User {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number

    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    uuid: string

    @Field()
    @Column({name: "nome"})
    name: string

    @Field()
    @Column()
    email: string

    @Field()
    @Column({name: "senha"})
    password: string

    @Field()
    @Column({name: "data_criacao"})
    createdAt: Date 

    @Field()
    @Column({name: "data_adaptacao"})
    updatedAt: Date 

    @Field(()=>[Appointments], {nullable: 'itemsAndList',  })
    @OneToMany(() => Appointments, (appointment) => appointment.user)
    appointments: Appointments[]
}
