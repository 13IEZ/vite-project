import React, { useEffect, useState } from 'react';
import { MainFooter, MainTabList, MainHeader } from 'pages/Main/components';
import { useActions } from 'hooks';
import { ActionsFormModal } from 'components';
import { getUrlParamsFromTabs, getUrlParamsByFilter } from 'helpers';
import { useSearchParams } from 'react-router-dom';

const Main = () => {
  const [tabValue, setTabValue] = useState(1);
  const [filter, setFilter] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const { getMovies } = useActions();

  useEffect(() => {
    if (searchParams.get('isShowModal')) {
      setIsOpen(true);
    } else {
      getMovies(searchParams.toString());
      setIsOpen(false);
    }
  }, [searchParams]);

  useEffect(() => {
    const tabUrlParams = getUrlParamsFromTabs(tabValue);
    const filterUrlParams = getUrlParamsByFilter(filter);
    setSearchParams(Object.assign(tabUrlParams, filterUrlParams));
  }, [tabValue, filter]);

  return (
    <>
      <MainHeader />
      <MainTabList
        tabValue={tabValue}
        setTabValue={setTabValue}
        filter={filter}
        setFilter={setFilter}
      />
      <MainFooter />
      <ActionsFormModal isOpen={isOpen} />
    </>
  );
};

export default Main;
