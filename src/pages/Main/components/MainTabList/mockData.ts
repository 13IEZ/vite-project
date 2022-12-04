import dayjs from 'dayjs';

export const tabsData = [
  { title: 'ALL', id: 1 },
  { title: 'FANTASY', id: 2 },
  { title: 'ADVENTURE', id: 3 },
  { title: 'CRIME', id: 4 },
  { title: 'DRAMA', id: 5 },
  { title: 'ROMANCE', id: 6 },
];

export const filterData = [
  { title: 'NONE', id: 1 },
  { title: 'DATE ASC', id: 2 },
  { title: 'DATE DESC', id: 3 },
  { title: 'TITLE ASC', id: 4 },
  { title: 'TITLE DESC', id: 5 },
];

export const genresData = ['FANTASY', 'ADVENTURE', 'CRIME', 'DRAMA', 'ROMANCE', 'WAR', 'HORROR'];

export const newMovie = {
  tagline: 'not empty',
  title: '',
  genres: [],
  vote_average: 0,
  vote_count: 0,
  release_date: dayjs('2014-08-18T21:11:54'),
  poster_path: '',
  overview: '',
  budget: 0,
  revenue: 0,
  runtime: 0,
};
