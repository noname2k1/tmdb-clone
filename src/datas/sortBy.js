import { v4 as uuid } from 'uuid';
export const sortBy = [
  {
    id: uuid(),
    name: 'Popularity Descending',
    value: 'popularity.desc',
  },
  {
    id: uuid(),
    name: 'Popularity Ascending',
    value: 'popularity.asc',
  },
  {
    id: uuid(),
    name: 'Rating Descending',
    value: 'vote_average.desc',
  },
  {
    id: uuid(),
    name: 'Rating Ascending',
    value: 'vote_average.asc',
  },
  {
    id: uuid(),
    name: 'Release Date Descending',
    value: 'release_date.desc',
  },
  {
    id: uuid(),
    name: 'Release Date Ascending',
    value: 'release_date.asc',
  },
  {
    id: uuid(),
    name: 'Title (A-Z)',
    value: 'original_title.asc',
  },
  {
    id: uuid(),
    name: 'Title (Z-A)',
    value: 'original_title.desc',
  },
];
