import type { Upgrade } from 'entities/Upgrade';
import { EUpgradeType } from 'entities/Upgrade/model/types';
import Factory from '@/shared/assets/icons/factory.png';
import Mine from '@/shared/assets/icons/Mine2.png';
import Pickaxe from '@/shared/assets/icons/Pickaxe.png';
export const upgradeList: Upgrade[] = [
  {
    title: 'Кирка',
    description: 'Увеличивает скорость добычи с клика',
    image_src: Pickaxe,
    cost: 50,
    cost_type: 'stone',
    effect: {
      type: EUpgradeType.CLICK_POWER,
      value: 1,
    },
  },
  {
    title: 'Шахта',
    description: 'Делает пассивный доход',
    image_src: Mine,
    cost: 200,
    cost_type: 'stone',
    effect: {
      type: EUpgradeType.PASSIVE_INCOME,
      value: 0.5,
    },
  },
  {
    title: 'Завод',
    description: 'Увеличивает скорость добычи камня',
    image_src: Factory,
    cost: 1000,
    cost_type: 'stone',
    effect: {
      type: EUpgradeType.PASSIVE_INCOME,
      value: 2,
    },
  },
  {
    title: 'Микрорайон',
    description: 'Кратно ускоряет добычу камня',
    image_src: Pickaxe,
    cost: 10000,
    cost_type: 'stone',
    effect: {
      type: EUpgradeType.PASSIVE_INCOME,
      value: 1,
    },
  },
  {
    title: 'Микрорайон',
    description: 'Кратно ускоряет добычу камня',
    image_src: Pickaxe,
    cost: 10000,
    cost_type: 'stone',
    effect: {
      type: EUpgradeType.PASSIVE_INCOME,
      value: 1,
    },
  },
  {
    title: 'Микрорайон',
    description: 'Кратно ускоряет добычу камня',
    image_src: Pickaxe,
    cost: 10000,
    cost_type: 'stone',
    effect: {
      type: EUpgradeType.PASSIVE_INCOME,
      value: 1,
    },
  },
  {
    title: 'Микрорайон',
    description: 'Кратно ускоряет добычу камня',
    image_src: Pickaxe,
    cost: 10000,
    cost_type: 'stone',
    effect: {
      type: EUpgradeType.PASSIVE_INCOME,
      value: 1,
    },
  },
  {
    title: 'Микрорайон',
    description: 'Кратно ускоряет добычу камня',
    image_src: Pickaxe,
    cost: 10000,
    cost_type: 'stone',
    effect: {
      type: EUpgradeType.PASSIVE_INCOME,
      value: 1,
    },
  },
  {
    title: 'Микрорайон',
    description: 'Кратно ускоряет добычу камня',
    image_src: Pickaxe,
    cost: 10000,
    cost_type: 'stone',
    effect: {
      type: EUpgradeType.PASSIVE_INCOME,
      value: 1,
    },
  },
  {
    title: 'Микрорайон',
    description: 'Кратно ускоряет добычу камня',
    image_src: Pickaxe,
    cost: 10000,
    cost_type: 'stone',
    effect: {
      type: EUpgradeType.PASSIVE_INCOME,
      value: 1,
    },
  },
  {
    title: 'Микрорайон',
    description: 'Кратно ускоряет добычу камня',
    image_src: Pickaxe,
    cost: 10000,
    cost_type: 'stone',
    effect: {
      type: EUpgradeType.PASSIVE_INCOME,
      value: 1,
    },
  },
];
