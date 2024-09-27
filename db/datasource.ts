import { Appointments } from "src/appointments/entities/appointments.entity"
import { User } from "src/user/entities/user.entity"
import { DataSource, DataSourceOptions } from "typeorm"

export const DbConfig: DataSourceOptions = {
    type: 'mysql',
    host: 'srv1672.hstgr.io',
    username: 'u151028130_test',
    password: 'Deezycheezy@2',
    database: 'u151028130_test',
    // entities: ['dist/**/*.entity.js'], //1
    entities: [User, Appointments],
    synchronize: true, // 2
    migrations: ['dist/db/migrations/*.js']
}

const dataSource = new DataSource(DbConfig)

export default dataSource