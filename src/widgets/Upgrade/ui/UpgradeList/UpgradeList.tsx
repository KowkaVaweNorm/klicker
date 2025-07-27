import clsx from 'clsx';
import { upgradeList } from '../../../../entities/Upgrade/model/upgradeList';
import { UpgradeItem } from '../UpgradeItem/UpgradeItem';
import cls from './UpgradeList.module.scss';

type TProps = {
  className?: string;
};
export const UpgradeList = (props: TProps) => {
  const { className } = props;
  return (
    <div className={clsx(cls.wrap, className)}>
      <ul className={cls.upgrade_list}>
        {upgradeList.map((upgrade, index) => (
          <UpgradeItem
            key={upgrade.title + upgrade.description + index}
            {...upgrade}
          />
        ))}
      </ul>
    </div>
  );
};
