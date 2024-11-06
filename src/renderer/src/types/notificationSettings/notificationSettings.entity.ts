export interface EntityNotificationSettingsInterface {
  id: number;
  tableName: string;
  insertEnabled: boolean;
  updateEnabled: boolean;
  deleteEnabled: boolean;
}
