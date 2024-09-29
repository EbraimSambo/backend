import { Client } from "src/client/entities/client.entity"
import { Column, OneToOne, PrimaryGeneratedColumn } from "typeorm"


export class Sale {

    @PrimaryGeneratedColumn()
    id: number

    @PrimaryGeneratedColumn('uuid')
    uuid: string
    
    @OneToOne(() => Client, (client) =>client.address)
    client: Client
}
