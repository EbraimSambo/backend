import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Zone } from "./zone.entity"


@Entity("projectos")
export class Project {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: "nome_projecto"})
    name: string

    @Column({name: "descriacao"})
    description: string

 

    @CreateDateColumn({name: "data_criacao"})
    createdAt: Date 

    @UpdateDateColumn({name: "data_adaptacao"})
    updatedAt: Date
    
    @ManyToOne(() => Zone, (zone) => zone.project)
    zone: Zone;
}
