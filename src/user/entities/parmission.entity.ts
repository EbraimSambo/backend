import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('permissoes')
export class Permission {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: true, name: 'dcodigo_permissao'})
    code: string 

    @Column({nullable: true,})
    role: string

    @Column({nullable: true, name: 'usuario_id', unique: true})
    userId: number
}