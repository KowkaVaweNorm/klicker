import { ClickStats } from 'widgets/ClickStats';
import { TapZone } from 'widgets/TapZone';
import { UpgradeList } from 'widgets/Upgrade';
import BG_Tunnel from '@/shared/assets/images/bg_tunnel.png';
import cls from './MainPage.module.scss';
export const MainPage = () => {
  return (
    <div className={cls.wrap_main}>
      <div className={cls.bg_tunnel_container}>
        <img src={BG_Tunnel} alt='' className={cls.bg_tunnel} />
      </div>
      <div className={cls.middle_column}>
        <ClickStats />
        <TapZone className={cls.klicker} />
        <UpgradeList className={cls.upgrades} />
      </div>
    </div>
  );
};
