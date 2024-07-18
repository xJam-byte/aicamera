import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  Model,
  DataType,
  Table,
  ForeignKey,
} from "sequelize-typescript";
import { UserParent } from "src/user_parent/user_parent.model";

interface NotificationCreationAttrs {
  parentId: number;
  date: Date;
  actionTaken: string;
  importance: string;
  content: string;
}

@Table({ tableName: "notifications" })
export class Notification extends Model<
  Notification,
  NotificationCreationAttrs
> {
  @ApiProperty({ example: "1", description: "Unique ID of the notification" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => UserParent)
  @ApiProperty({ example: "1", description: "ID of the parent" })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  parentId: number;

  @ApiProperty({
    example: "2023-07-19T12:34:56Z",
    description: "Date of the notification",
  })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date: Date;

  @ApiProperty({ example: "Measure taken", description: "Action taken" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  actionTaken: string;

  @ApiProperty({
    example: "High",
    description: "Importance of the notification",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  importance: string;

  @ApiProperty({
    example: "This is a notification content",
    description: "Content of the notification",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  content: string;
}
