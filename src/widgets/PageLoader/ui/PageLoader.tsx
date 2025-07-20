import clsx from 'clsx';
import { Loader } from 'shared/ui';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({
  className = '',
}: PageLoaderProps): JSX.Element => {
  return (
    <div className={clsx(cls.PageLoader ?? '', {}, [className])}>
      <Loader />
    </div>
  );
};
