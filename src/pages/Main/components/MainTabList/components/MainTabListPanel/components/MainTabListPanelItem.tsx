import React, { Dispatch, SetStateAction } from 'react';
import { Grid, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { StyledText, ColorEnum, StyledImg } from 'style/style';
import {
  StyledListPanelItem,
  StyledVertButton,
} from 'pages/Main/components/MainTabList/components/MainTabListPanel/components/MainTabListPanelItem.style';
import dayjs, { Dayjs } from 'dayjs';

export interface IIMainTabListPanelItem {
  title: string;
  genre: string;
  image: string;
  year: Dayjs | number;
  id: number;
  runtime?: string;
  rating?: string;
  overview?: string;
  isVisible?: boolean;
}

interface IMainTabListProps {
  handleOpenEditFilm: (id: number) => void;
  handleDeleteFilm: (id: number) => void;
  setClickedItemToView: Dispatch<SetStateAction<IIMainTabListPanelItem | null>>;
}

const MainTabListPanelItem: React.FC<IIMainTabListPanelItem & IMainTabListProps> = ({
  image,
  title,
  genre,
  year,
  id,
  runtime,
  rating,
  overview,
  handleOpenEditFilm,
  handleDeleteFilm,
  setClickedItemToView,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledListPanelItem>
      <Grid
        onClick={() =>
          setClickedItemToView({ image, title, genre, year, id, runtime, rating, overview })
        }
      >
        <StyledImg src={image} alt='movie poster' />
      </Grid>

      <Grid container justifyContent='space-between' alignItems='start' marginTop='1rem'>
        <Grid item>
          <StyledText fontSize='112.5%' fontWeight={500} color={ColorEnum.GREY}>
            {title}
          </StyledText>
          <StyledText fontSize='87.5%' fontWeight={500} color={ColorEnum.DARKER_GREY}>
            {genre}
          </StyledText>
        </Grid>
        <Grid
          item
          padding='0.25rem'
          sx={{ border: `0.1rem solid ${ColorEnum.DARKER_GREY}`, borderRadius: '0.25rem' }}
        >
          <StyledText fontSize='87.5%' fontWeight={500} color={ColorEnum.GREY}>
            {dayjs(year).year()}
          </StyledText>
        </Grid>
      </Grid>
      <StyledVertButton onClick={handleClick}>
        <MoreVertIcon />
      </StyledVertButton>
      <Menu
        id='basic-menu'
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleDeleteFilm(id)}>Delete</MenuItem>
        <MenuItem
          onClick={() => {
            handleOpenEditFilm(id);
            handleClose();
          }}
        >
          Edit
        </MenuItem>
      </Menu>
    </StyledListPanelItem>
  );
};

export default MainTabListPanelItem;
