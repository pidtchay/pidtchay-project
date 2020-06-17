/**
 * Data model for notification window.
 * @property {string} [description] Description of the event that triggered the notification window.
 * @property {string} [title] Notification window title.
 * @property type Type of notification displayed.
 */
export interface INotificationProps {
  description: string;
  title: string;
  type: 'success' | 'info' | 'warning' | 'error';
}
