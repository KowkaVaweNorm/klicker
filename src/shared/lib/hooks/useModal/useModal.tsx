/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from 'antd';
import type { ModalFuncProps } from 'antd';
import { useState } from 'react';

type ModalType = 'info' | 'success' | 'error' | 'warning' | 'confirm';

interface IModalProps extends ModalFuncProps {
  type?: ModalType;
}

/**
 * @returns [functionOpenModal, functionHideModal, contextHolder]
 */
export const useModal = (): [
  (props: IModalProps) => void,
  () => void,
  React.ReactElement<any, string | React.JSXElementConstructor<any>>,
] => {
  const [modal, contextHolder] = Modal.useModal();
  const [modalVisible, setModalVisible] = useState(false);
  let modalInstance: ReturnType<typeof modal.confirm> | undefined;
  const openModal = (props: IModalProps): void => {
    const { type = 'confirm', ...otherProps } = props;
    if (!modalVisible) {
      setModalVisible(true);
      modalInstance = modal[type]({
        okText: 'Подтвердить',
        cancelText: 'Отменить',
        getContainer: () => document.body,
        centered: true,
        footer: false,
        icon: <></>,
        afterClose: () => {
          setModalVisible(false);
        },
        ...otherProps,
      });
    }
  };
  const hideModal = (): void => {
    if (modalInstance !== undefined) {
      modalInstance.destroy();
      setModalVisible(false);
    }
  };

  return [openModal, hideModal, contextHolder];
};
