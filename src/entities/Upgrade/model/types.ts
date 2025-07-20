export const enum EUpgradeType {
  CLICK_POWER = 'click_power',
  PASSIVE_INCOME = 'passive_income',
}

type UpgrateEffect = {
  type: EUpgradeType;
  value: number;
};

export type Upgrade = {
  title: string;
  description: string;
  image_src: string;
  cost: number;
  cost_type: 'stone' | 'diamond';
  effect: UpgrateEffect;
};
