import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Modal, Grid, IconButton } from '@mui/material';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  StyledModalBody,
  StyledFormModalInput,
} from 'components/Modals/ActionsFormModal/ActionsFormModal.style';
import { PrimaryButton } from 'components/Buttons/PrimaryButton/PrimaryButton';
import { ColorEnum, StyledText } from 'style/style';
import CloseIcon from '@mui/icons-material/Close';
import { IIMainTabListPanelItem } from 'pages/Main/components/MainTabList/components/MainTabListPanel/components/MainTabListPanelItem';

interface IActionsFormModal {
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setData: Dispatch<SetStateAction<IIMainTabListPanelItem[]>>;
  setClickedItem: Dispatch<SetStateAction<IIMainTabListPanelItem | null>>;
  handleEditFilm: (item: IIMainTabListPanelItem) => void;
  item?: null | IIMainTabListPanelItem;
}

const defValue = {
  title: '',
  genre: '',
  image: '',
  year: dayjs('2014-08-18T21:11:54'),
  runtime: '',
  rating: '',
  overview: '',
  id: Math.floor(Math.random() * 10000) + 1,
  isVisible: true,
};

export const ActionsFormModal: React.FC<IActionsFormModal> = ({
  open,
  setIsOpen,
  item,
  setData,
  setClickedItem,
  handleEditFilm,
}) => {
  const [state, setState] = useState<IIMainTabListPanelItem>(defValue);

  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
      id: prev.id ?? Math.floor(Math.random() * 10000) + 1,
    }));
  };

  const handleOnSave = (id?: number) => {
    if (id) {
      handleEditFilm(state);
    } else {
      setData(prevState => [...prevState, state]);
    }
    setClickedItem(null);
    setState(defValue);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setClickedItem(null);
    setState(defValue);
  };

  useEffect(() => {
    item?.id && setState(item);
  }, [item]);
  return (
    <Modal open={open} onClose={handleClose}>
      <StyledModalBody>
        <Grid container justifyContent='end'>
          <IconButton size='large' color='inherit' onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Grid>

        <StyledText fontSize='250%' fontWeight={300} color={ColorEnum.WHITE}>
          ADD MOVIE
        </StyledText>

        <Grid container rowSpacing={2} columnSpacing={4}>
          <Grid item xs={8}>
            <StyledFormModalInput
              value={state.title}
              onChange={handleChangeData}
              name='title'
              label='TITLE'
              variant='outlined'
              fullWidth
            />
            <StyledFormModalInput
              value={state.image}
              onChange={handleChangeData}
              name='image'
              label='MOVIE URL'
              variant='outlined'
              fullWidth
            />
            <StyledFormModalInput
              value={state.genre}
              onChange={handleChangeData}
              name='genre'
              label='GENRE'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label='RELEASE DATE'
                value={state.year}
                onChange={newValue => setState(prev => ({ ...prev, year: dayjs(newValue) }))}
                renderInput={params => <StyledFormModalInput {...params} />}
              />
            </LocalizationProvider>

            <StyledFormModalInput
              value={state.rating}
              onChange={handleChangeData}
              name='rating'
              label='RATING'
              variant='outlined'
              fullWidth
            />
            <StyledFormModalInput
              value={state.runtime}
              onChange={handleChangeData}
              name='runtime'
              label='RUNTIME'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <StyledFormModalInput
              value={state.overview}
              onChange={handleChangeData}
              name='overview'
              multiline
              minRows={3}
              maxRows={3}
              label='OVERVIEW'
              variant='outlined'
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container justifyContent='end' alignItems='center' marginTop='2rem' columnSpacing={2}>
          <Grid item xs={2}>
            <PrimaryButton
              clickHandler={() => setIsOpen(!open)}
              title='Reset'
              isFullWidth
              type='outlined'
            />
          </Grid>
          <Grid item xs={2}>
            <PrimaryButton
              clickHandler={() => handleOnSave(item?.id)}
              title='Save'
              isFullWidth
              type='contained'
            />
          </Grid>
        </Grid>
      </StyledModalBody>
    </Modal>
  );
};
