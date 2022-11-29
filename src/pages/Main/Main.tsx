import React, { useEffect, useState } from 'react';
import { MainHeader, MainFooter, MainTabList } from 'pages/Main/components';
import { IIMainTabListPanelItem } from 'pages/Main/components/MainTabList/components/MainTabListPanel/components/MainTabListPanelItem';
import { filmsData } from 'pages/Main/components/MainTabList/mockData';
import { ActionsFormModal } from 'components';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedItemToEdit, setClickedItemToEdit] = useState<IIMainTabListPanelItem | null>(null);
  const [clickedItemToView, setClickedItemToView] = useState<IIMainTabListPanelItem | null>(null);
  const [data, setData] = useState<IIMainTabListPanelItem[]>(filmsData);

  const handleDeleteFilm = (id: number) => {
    setData(prev => prev.filter(i => i.id !== id));

    if (id === clickedItemToView?.id) {
      setClickedItemToView(null);
    }
  };

  const handleOpenEditFilm = (id: number) => {
    setIsOpen(true);
    setClickedItemToEdit(data.filter(i => i.id === id)[0]);
  };

  const handleEditFilm = (item: IIMainTabListPanelItem) => {
    setData(prev => prev.map(i => (i.id === item.id ? { ...item } : { ...i })));
  };

  useEffect(() => {
    if (clickedItemToView) {
      const refreshedIem = data.filter(i => i.id === clickedItemToView.id)[0];
      setClickedItemToView(refreshedIem);
    }
  }, [data, clickedItemToView]);

  return (
    <>
      <MainHeader
        setIsOpen={setIsOpen}
        clickedItemToView={clickedItemToView}
        setClickedItemToView={setClickedItemToView}
      />
      <MainTabList
        data={data}
        setData={setData}
        handleOpenEditFilm={handleOpenEditFilm}
        handleDeleteFilm={handleDeleteFilm}
        setClickedItemToView={setClickedItemToView}
      />
      <MainFooter />
      <ActionsFormModal
        open={isOpen}
        setIsOpen={setIsOpen}
        setData={setData}
        item={clickedItemToEdit}
        setClickedItem={setClickedItemToEdit}
        handleEditFilm={handleEditFilm}
      />
    </>
  );
};

export default Main;
