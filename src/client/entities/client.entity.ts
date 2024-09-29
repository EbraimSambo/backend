import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Address } from "./address.entity"

@Entity("clientes")
export class Client {
    
    @PrimaryGeneratedColumn()
    id: number

    @PrimaryGeneratedColumn('uuid')
    uuid: string

    @Column({name: "nome"})
    name: string

    @Column()
    email: string

    @Column({name: "telefone"})
    phone: string

    @Column({name: "telefone_opcional"})
    optionalPhone: string

    @CreateDateColumn({name: "data_criacao"})
    createdAt: Date 

    @UpdateDateColumn({name: "data_adaptacao"})
    updatedAt: Date 

    @OneToOne(() => Address, (address) => address.client)
    address: Address
}
