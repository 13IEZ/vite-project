import React, { useState } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import MainTabList from './components/MainTabList/MainTabList';
import MainFooter from './components/MainFooter/MainFooter';
import { IIMainTabListPanelItem } from './components/MainTabList/components/MainTabListPanel/components/MainTabListPanelItem/MainTabListPanelItem';
import { filmsData } from './components/MainTabList/mockData';
import { ActionsFormModal } from '../../components';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState<IIMainTabListPanelItem | null>(null);
  const [data, setData] = useState<IIMainTabListPanelItem[]>(filmsData);

  const handleDeleteFilm = (id: number) => {
    setData(prev => prev.filter(i => i.id !== id));
  };

  const handleOpenEditFilm = (id: number) => {
    setIsOpen(true);
    setClickedItem(data.filter(i => i.id === id)[0]);
  };

  const handleEditFilm = (item: IIMainTabListPanelItem) => {
    setData(prev => prev.map(i => (i.id === item.id ? { ...item } : { ...i })));
  };

  return (
    <>
      <MainHeader setIsOpen={setIsOpen} />
      <MainTabList
        data={data}
        setData={setData}
        handleOpenEditFilm={handleOpenEditFilm}
        handleDeleteFilm={handleDeleteFilm}
      />
      <MainFooter />
      <ActionsFormModal
        open={isOpen}
        setIsOpen={setIsOpen}
        setData={setData}
        item={clickedItem}
        setClickedItem={setClickedItem}
        handleEditFilm={handleEditFilm}
      />
    </>
  );
};

export default Main;
