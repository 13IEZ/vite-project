import React from 'react';
import { Grid, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { StyledText, ColorEnum, StyledImg } from 'style/style';
import { StyledListPanelItem, StyledVertButton } from './MainTabListPanelItem.style';
import dayjs from 'dayjs';
import { IMovie, GetMovieType } from 'store/types/movieTypes';
import { useSearchParams } from 'react-router-dom';
import { useActions } from 'hooks';

interface IMainTabListProps {
  item: IMovie;
}

const MainTabListPanelItem: React.FC<IMainTabListProps> = ({ item }) => {
  const { title, poster_path, genres, release_date, id } = item;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { deleteMovie, getMovie } = useActions();
  const isOpen = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = (id: number) => {
    searchParams.set('isShowModal', id?.toString() || 'new');
    setSearchParams(searchParams);
    setAnchorEl(null);
  };

  const handleDeleteMovie = (id: number) => {
    deleteMovie(id.toString(), searchParams.toString());
    setAnchorEl(null);
  };

  return (
    <StyledListPanelItem id={'test'}>
      <Grid onClick={() => id && getMovie(id.toString(), GetMovieType.VIEW)}>
        <StyledImg src={poster_path} alt='movie poster' />
      </Grid>

      <Grid
        container
        justifyContent='space-between'
        alignItems='start'
        marginTop='1rem'
        wrap='nowrap'
      >
        <Grid item>
          <StyledText fontSize='112.5%' fontWeight={500} color={ColorEnum.GREY}>
            {title}
          </StyledText>
          <StyledText fontSize='87.5%' fontWeight={500} color={ColorEnum.DARKER_GREY}>
            {genres.join(', ')}
          </StyledText>
        </Grid>
        <Grid
          item
          padding='0.25rem'
          sx={{ border: `0.1rem solid ${ColorEnum.DARKER_GREY}`, borderRadius: '0.25rem' }}
        >
          <StyledText fontSize='87.5%' fontWeight={500} color={ColorEnum.GREY}>
            {dayjs(release_date).year()}
          </StyledText>
        </Grid>
      </Grid>
      <StyledVertButton onClick={handleOpenMenu}>
        <MoreVertIcon color='action' />
      </StyledVertButton>
      <Menu
        id='basic-menu'
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={() => id && handleDeleteMovie(id)}>Delete</MenuItem>
        <MenuItem onClick={() => id && handleOpenModal(id)}>Edit</MenuItem>
      </Menu>
    </StyledListPanelItem>
  );
};

export default MainTabListPanelItem;
