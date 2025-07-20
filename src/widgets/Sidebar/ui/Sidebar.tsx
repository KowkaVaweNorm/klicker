import clsx from 'clsx';
import { NavLink } from 'react-router';
import {
  getRouteCity,
  getRouteQuests,
  getRouteBattle,
} from 'shared/const/router';
import cls from './Sidebar.module.scss';

export const Sidebar = () => {
  return (
    <div className={cls.sidebar}>
      <NavLink
        to={getRouteCity()}
        className={({ isActive }) =>
          clsx(cls.sidebar_nav_item, isActive && cls.sidebar_nav_item_active)
        }
      >
        <div className={cls.sidebar_label_container}>
          <span className={cls.sidebar_label_container_label}>Город</span>
        </div>
      </NavLink>

      <NavLink
        to={getRouteQuests()}
        className={({ isActive }) =>
          clsx(cls.sidebar_nav_item, isActive && cls.sidebar_nav_item_active)
        }
      >
        <div className={cls.sidebar_label_container}>
          <span className={cls.sidebar_label_container_label}>Задания</span>
        </div>
      </NavLink>

      <NavLink
        to={getRouteBattle()}
        className={({ isActive }) =>
          clsx(
            cls.sidebar_nav_item,
            isActive && cls.sidebar_nav_item_active,
            cls.sidebar_nav_item_future,
          )
        }
      >
        <div className={cls.sidebar_label_container}>
          <span className={cls.sidebar_label_container_label}>
            Битва
            <span className={cls.sidebar_label_container_future_label}>
              (в будущем)
            </span>
          </span>
        </div>
      </NavLink>
    </div>
  );
};
