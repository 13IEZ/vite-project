export const getUrlParamsByFilter = (filter: number) => {
  switch (filter) {
    case 1:
      return '';
    case 2:
      return { sortBy: 'release_date', sortOrder: 'asc' };
    case 3:
      return { sortBy: 'release_date', sortOrder: 'desc' };
    case 4:
      return { sortBy: 'title', sortOrder: 'asc' };
    case 5:
      return { sortBy: 'title', sortOrder: 'desc' };
    default:
      return '';
  }
};
