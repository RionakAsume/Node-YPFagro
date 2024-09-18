import { Table, Column, Model, DataType, Unique, AllowNull, HasOne } from "sequelize-typescript";
import User from "./User.models";

@Table({
    tableName: 'role',
    timestamps: true, 
})
class Role extends Model {
    @Unique
    @AllowNull(false)
    @Column({
        type: DataType.STRING(20)
    })
    description: string;

    // Relación uno a uno: Un role tiene un usuario
    @HasOne(() => User)
    user: User;
}

export default Role;
