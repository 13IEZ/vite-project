import React, { Dispatch, SetStateAction } from 'react';
import MainTabListPanelItem, {
  IIMainTabListPanelItem,
} from 'pages/Main/components/MainTabList/components/MainTabListPanel/components/MainTabListPanelItem';
import { StyledBox } from 'pages/Main/components/MainTabList/components/MainTabListPanel/MainTabListPanel.style';
import { Box } from '@mui/material';

interface IMainTabListPanel {
  value: number;
  index: number;
  items: IIMainTabListPanelItem[];
  handleOpenEditFilm: (id: number) => void;
  handleDeleteFilm: (id: number) => void;
  setClickedItemToView: Dispatch<SetStateAction<IIMainTabListPanelItem | null>>;
}

const MainTabListPanel: React.FC<IMainTabListPanel> = ({
  value,
  index,
  items,
  handleDeleteFilm,
  handleOpenEditFilm,
  setClickedItemToView,
}) => {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center' }}
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      <StyledBox>
        {items
          .filter(i => i.isVisible)
          .map(i => (
            <MainTabListPanelItem
              key={i.id}
              id={i.id}
              year={i.year}
              genre={i.genre}
              image={i.image}
              title={i.title}
              runtime={i.runtime}
              rating={i.rating}
              overview={i.overview}
              handleOpenEditFilm={handleOpenEditFilm}
              handleDeleteFilm={handleDeleteFilm}
              setClickedItemToView={setClickedItemToView}
            />
          ))}
      </StyledBox>
    </Box>
  );
};

export default MainTabListPanel;
