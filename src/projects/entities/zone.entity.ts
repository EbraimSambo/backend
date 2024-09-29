import { Project } from "src/projects/entities/project.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("zonas")
export class Zone {
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: "rua"})
    street: string

    @Column({name: "bairro"})
    neighborhood: string

    @Column({name: "municipio"})
    municipality: string

    @OneToMany(() => Project, (project) => project.zone)
    project: Project[]
}
