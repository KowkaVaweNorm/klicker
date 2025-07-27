import Factory from '@/shared/assets/icons/factory.png';
import Helmet from '@/shared/assets/icons/helmet.png';
import Mine from '@/shared/assets/icons/Mine2.png';
import Minicity from '@/shared/assets/icons/minicity.png';
import Pickaxe from '@/shared/assets/icons/Pickaxe.png';
import Wagon from '@/shared/assets/icons/wagon.png';
import { EUpgradeType, type Upgrade } from './types';
export const upgradeList: Upgrade[] = [
  {
    id: '1',
    title: 'Кирка',
    description: 'Увеличивает скорость добычи с клика',
    image_src: Pickaxe,
    cost: {
      value: 50,
      resource: 'stone',
      multiplier: 1.4,
      growth: 'exponential',
    },
    effect: {
      type: EUpgradeType.CLICK_POWER,
      value: 1,
    },
  },
  {
    id: '2',
    title: 'Вагонетка',
    description: 'Делает пассивный доход',
    image_src: Wagon,
    cost: {
      value: 200,
      resource: 'stone',
      multiplier: 1.5,
      growth: 'exponential',
    },
    effect: {
      type: EUpgradeType.PASSIVE_INCOME,
      value: 1,
    },
  },
  {
    id: '3',
    title: 'Шахтёр',
    description: 'Делает пассивный доход',
    image_src: Helmet,
    cost: {
      value: 500,
      resource: 'stone',
      multiplier: 1.5,
      growth: 'exponential',
    },
    effect: {
      type: EUpgradeType.PASSIVE_INCOME,
      value: 2,
    },
  },
  {
    id: '4',
    title: 'Шахта',
    description: 'Делает пассивный доход',
    image_src: Mine,
    cost: {
      value: 1000,
      resource: 'stone',
      multiplier: 1.5,
      growth: 'exponential',
    },
    effect: {
      type: EUpgradeType.PASSIVE_INCOME,
      value: 7,
    },
  },
  {
    id: '5',
    title: 'Завод',
    description: 'Увеличивает скорость добычи камня',
    image_src: Factory,
    cost: {
      value: 5000,
      resource: 'stone',
      multiplier: 1.5,
      growth: 'exponential',
    },
    effect: {
      type: EUpgradeType.PASSIVE_INCOME,
      value: 14,
    },
  },
  {
    id: '6',
    title: 'Микрорайон',
    description: 'Кратно ускоряет добычу камня',
    image_src: Minicity,
    cost: {
      value: 10000,
      resource: 'stone',
      multiplier: 1.5,
      growth: 'exponential',
    },
    effect: {
      type: EUpgradeType.PASSIVE_INCOME,
      value: 30,
    },
  },
];
