import React from 'react';
import { Grid } from '@mui/material';
import MainTabListPanelItem, {
  IIMainTabListPanelItem,
} from './components/MainTabListPanelItem/MainTabListPanelItem';

interface IMainTabListPanel {
  value: number;
  index: number;
  items: IIMainTabListPanelItem[];
}
const MainTabListPanel: React.FC<IMainTabListPanel> = ({ value, index, items }) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      <Grid container gap={5} justifyContent='space-between' marginTop='1.875rem'>
        {items.map(i => (
          <MainTabListPanelItem
            key={i.id}
            id={i.id}
            year={i.year}
            genre={i.genre}
            image={i.image}
            title={i.title}
          />
        ))}
      </Grid>
    </div>
  );
};

export default MainTabListPanel;
