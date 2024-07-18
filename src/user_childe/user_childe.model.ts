import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  Model,
  DataType,
  Table,
  ForeignKey,
} from "sequelize-typescript";
import { UserParent } from "src/user_parent/user_parent.model";
interface UserChildCreationAttrs {
  firstGuardianPhone: string;
  secondGuardianPhone: string;
  address: string;
  iin: string;
  parentId: number;
}

@Table({ tableName: "user_children" })
export class UserChild extends Model<UserChild, UserChildCreationAttrs> {
  @ApiProperty({ example: "1", description: "Unique ID of the child" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "1234567890",
    description: "First guardian phone number",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstGuardianPhone: string;

  @ApiProperty({
    example: "0987654321",
    description: "Second guardian phone number",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  secondGuardianPhone: string;

  @ApiProperty({ example: "Some address", description: "Address of the child" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @ApiProperty({ example: "123456789012", description: "IIN of the child" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  iin: string;

  @ForeignKey(() => UserParent)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  parentId: number;
}
