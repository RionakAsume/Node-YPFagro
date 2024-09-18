import { Table, Column, Model, DataType, ForeignKey, AllowNull } from "sequelize-typescript";
import Role from "./Role.models";

@Table({
    tableName: 'user',
    timestamps: false,
})
class User extends Model {
    @Column({
        type: DataType.STRING(20)
    })
    fullName: string;

    @Column({
        type: DataType.STRING(20)
    })
    password: string;

    @Column({
        type: DataType.TEXT
    })
    address: string;

    @Column({
        type: DataType.INTEGER
    })
    phone: number;

    @Column({
        type: DataType.INTEGER
    })
    dni: number;

    @Column({
        type: DataType.STRING
    })
    email: string;

        // @Column({
    //     type:DataType.BOOLEAN
    // })
    // status:boolean;

    // Relación uno a uno: Un usuario pertenece a un role
    @ForeignKey(() => Role)
    @Column({
        type: DataType.INTEGER
    })
    roleId: number; 
}

export default User;
