import clsx from 'clsx';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className = '' }: LoaderProps): JSX.Element => {
  return <div className={clsx(cls.loader, {}, [className])}></div>;
};
