import React from 'react';
import MainTabListPanelItem, {
  IIMainTabListPanelItem,
} from './components/MainTabListPanelItem/MainTabListPanelItem';
import { StyledBox } from './MainTabListPanel.style';

interface IMainTabListPanel {
  value: number;
  index: number;
  items: IIMainTabListPanelItem[];
  handleOpenEditFilm: (id: number) => void;
  handleDeleteFilm: (id: number) => void;
}
const MainTabListPanel: React.FC<IMainTabListPanel> = ({
  value,
  index,
  items,
  handleDeleteFilm,
  handleOpenEditFilm,
}) => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center' }}
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
              handleOpenEditFilm={handleOpenEditFilm}
              handleDeleteFilm={handleDeleteFilm}
            />
          ))}
      </StyledBox>
    </div>
  );
};

export default MainTabListPanel;
