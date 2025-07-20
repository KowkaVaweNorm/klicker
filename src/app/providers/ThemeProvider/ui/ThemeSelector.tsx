import {
  SunOutlined,
  MoonOutlined,
  FontColorsOutlined,
} from '@ant-design/icons';
import { Dropdown, Button } from 'antd';
import { useTheme } from '../lib/hooks/useTheme';

const items = [
  {
    key: 1,
    label: 'Авто',
    value: 'device',
    icon: <FontColorsOutlined />,
  },
  { key: 2, label: 'Светлая', value: 'light', icon: <SunOutlined /> },
  { key: 3, label: 'Темная', value: 'dark', icon: <MoonOutlined /> },
];

const ThemeSelector = (): JSX.Element => {
  const { themeMode, setThemeMod } = useTheme();

  return (
    <Dropdown
      key='theme-dropdown'
      trigger={['click']}
      overlayStyle={{ paddingTop: '8px' }}
      menu={{
        items,
        onClick: (e) => {
          setThemeMod(
            items.find((item) => item.key === Number(e.key))
              ?.value as typeof themeMode,
          );
        },
      }}
    >
      <Button icon={items.find((i) => i.value === themeMode)?.icon} />
    </Dropdown>
  );
};

export default ThemeSelector;
