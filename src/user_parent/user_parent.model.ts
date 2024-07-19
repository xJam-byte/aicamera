import { ApiProperty } from "@nestjs/swagger";
import { Column, Model, DataType, Table, HasMany } from "sequelize-typescript";
import { UserChild } from "src/user_childe/user_childe.model";

interface UserParentCreationAttrs {
  firstName: string;
  lastName: string;
  middleName: string;
  phoneNumber: string;
  address: string;
  email: string;
  password: string;
  telegramUsername: string;
}

@Table({ tableName: "user_parents" })
export class UserParent extends Model<UserParent, UserParentCreationAttrs> {
  @ApiProperty({ example: "1", description: "Unique ID of the parent" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "John Doe", description: "Full name of the parent" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName: string;
  @ApiProperty({ example: "John Doe", description: "Full name of the parent" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;
  @ApiProperty({ example: "John Doe", description: "Full name of the parent" })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  middleName: string;

  @ApiProperty({
    example: "1234567890",
    description: "Phone number of the parent",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phoneNumber: string;

  @ApiProperty({
    example: "Some address",
    description: "Address of the parent",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @ApiProperty({
    example: "parent@example.com",
    description: "Email of the parent",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @ApiProperty({
    example: "password",
    description: "Password of the parent",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({
    example: "telegramUsername",
    description: "Telegram username of the parent",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  telegramUsername: string;

  @HasMany(() => UserChild)
  children: UserChild[];
}
