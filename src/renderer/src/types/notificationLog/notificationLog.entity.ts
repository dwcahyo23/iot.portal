export interface EntityNotificationLogInterface {
  id: number;
  tableName: string;
  eventType: string;
  createdAt: Date;
}
