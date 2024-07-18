export class CreateNotificationDto {
  readonly parentId: number;
  readonly date: Date;
  readonly actionTaken: string;
  readonly importance: string;
  readonly content: string;
}
