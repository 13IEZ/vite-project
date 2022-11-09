import React from 'react';
import { Grid } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { StyledText, ColorEnum } from '../../../../../../../../style/style';
import { StyledListPanelItem, StyledVertButton } from './MainTabListPanelItem.style';

export interface IIMainTabListPanelItem {
  title: string;
  genre: string;
  image: string;
  year: number;
  id: number;
}

const MainTabListPanelItem: React.FC<IIMainTabListPanelItem> = ({
  image,
  title,
  genre,
  year,
  id,
}) => {
  console.log(id);
  return (
    <StyledListPanelItem item>
      <img src={image} style={{ cursor: 'pointer' }} alt='movie poster' />
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
            {year}
          </StyledText>
        </Grid>
      </Grid>
      <StyledVertButton onClick={() => console.log('vert btn')}>
        <MoreVertIcon />
      </StyledVertButton>
    </StyledListPanelItem>
  );
};

export default MainTabListPanelItem;
