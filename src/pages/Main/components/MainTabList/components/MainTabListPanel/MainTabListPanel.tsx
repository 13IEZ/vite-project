import React from 'react';
import MainTabListPanelItem from './components/MainTabListPanelItem';
import { StyledBox } from './MainTabListPanel.style';
import { Box } from '@mui/material';
import { IMovie } from 'store/types/movieTypes';

interface IMainTabListPanel {
  value: number;
  index: number;
  items: IMovie[];
}

const MainTabListPanel: React.FC<IMainTabListPanel> = ({ value, index, items }) => {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center' }}
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      <StyledBox>
        {items.map(i => (
          <MainTabListPanelItem key={i.id} item={i} />
        ))}
      </StyledBox>
    </Box>
  );
};

export default MainTabListPanel;
