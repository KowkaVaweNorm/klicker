import { Button } from 'antd';
import clsx from 'clsx';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps): JSX.Element => {
  const reloadPage = (): void => {
    location.reload();
  };

  return (
    <div className={clsx(cls.error_page ?? '', {}, [className])}>
      <p>Произошла непредвиденная ошибка</p>
      <Button onClick={reloadPage}>Обновить страницу</Button>
    </div>
  );
};
