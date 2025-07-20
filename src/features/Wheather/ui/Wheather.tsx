import { createPortal } from 'react-dom';
import cls from './Wheather.module.scss';
export const Wheather = () => {
  return createPortal(
    <div className={cls.sun}></div>,
    document.getElementById('root') ?? document.body,
  );
};
