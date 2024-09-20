import { Table, Column, Model, DataType, ForeignKey, AllowNull } from "sequelize-typescript";
import Role from "./Role.models";

@Table({
    tableName: 'users',
    timestamps: false,
})
class User extends Model {
    @AllowNull(false)
    @Column({
        type: DataType.STRING(20)
    })
    full_name: string;

    @Column({
        type: DataType.STRING(64)
    })
    password: string;

    @Column({
        type: DataType.TEXT
    })
    address: string;

    @Column({
        type: DataType.STRING(15)
    })
    phone: string;

    @Column({
        type: DataType.INTEGER
      
    })
    dni: number;

    @Column({
        type: DataType.STRING
    })
    email: string;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true
    })
    status: boolean;

    // Relación uno a uno: Un usuario pertenece a un role
    @ForeignKey(() => Role)
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER
    })
    roleId: number;
}

export default User;
