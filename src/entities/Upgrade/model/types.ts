export const enum EUpgradeType {
  CLICK_POWER = 'click_power',
  PASSIVE_INCOME = 'passive_income',
}

type UpgrateEffect = {
  type: EUpgradeType;
  value: number;
};

export type Upgrade = {
  id: string;
  title: string;
  description: string;
  image_src: string;
  cost: {
    value: number;
    resource: 'stone' | 'diamond';
    multiplier: number;
    growth: 'linear' | 'exponential';
  };
  effect: UpgrateEffect;
};
