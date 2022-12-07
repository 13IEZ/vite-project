export const getUrlParamsFromTabs = (tabValue: number) => {
  switch (tabValue) {
    case 1:
      return '';
    case 2:
      return { searchBy: 'genres', filter: 'fantasy' };
    case 3:
      return { searchBy: 'genres', filter: 'adventure' };
    case 4:
      return { searchBy: 'genres', filter: 'crime' };
    case 5:
      return { searchBy: 'genres', filter: 'drama' };
    case 6:
      return { searchBy: 'genres', filter: 'romance' };
    default:
      return '';
  }
};
