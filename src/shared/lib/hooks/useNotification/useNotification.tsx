/* eslint-disable @typescript-eslint/no-explicit-any */
import { App } from 'antd';

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export interface NotificationReturn {
  openNotification: (
    type: NotificationType,
    message: string,
    description?: string,
    icon?: React.ReactElement,
  ) => any;
}

/**
 *
 * @returns function(type: NotificationType, message: string, description: string)
 */
export const useNotification = (): NotificationReturn => {
  const { notification } = App.useApp();

  const openNotificationWithIcon: NotificationReturn['openNotification'] = (
    type,
    message,
    description,
    icon,
  ): any => {
    notification[type]({
      message,
      description,
      icon,
    });
  };

  return {
    openNotification: openNotificationWithIcon,
  };
};
