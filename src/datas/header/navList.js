import routes from '@/configs/routes';
import { v4 as uuid } from 'uuid';
const navList = [
  {
    id: uuid(),
    label: 'Movies',
    children: [
      {
        id: uuid(),
        label: 'Popular',
        path: routes.movie,
      },
      {
        id: uuid(),
        label: 'Now Playing',
        path: '',
      },
      {
        id: uuid(),
        label: 'Upcoming',
        path: '',
      },
      {
        id: uuid(),
        label: 'Top Rated',
        path: '',
      },
    ],
  },
  {
    id: uuid(),
    label: 'TV Shows',
    children: [
      {
        id: uuid(),
        label: 'Popular',
        path: '',
      },
      {
        id: uuid(),
        label: 'Airing Today',
        path: '',
      },
      {
        id: uuid(),
        label: 'On TV',
        path: '',
      },
      {
        id: uuid(),
        label: 'Top Rated',
        path: '',
      },
    ],
  },
  {
    id: uuid(),
    label: 'People',
    children: [
      {
        id: uuid(),
        label: 'Popular People',
        path: '',
      },
    ],
  },
  {
    id: uuid(),
    label: 'More',
    children: [
      {
        id: uuid(),
        label: 'Discussions',
        path: '',
      },
      {
        id: uuid(),
        label: 'Leaderboard',
        path: '',
      },
      {
        id: uuid(),
        label: 'Support',
        path: '',
      },
      {
        id: uuid(),
        label: 'API',
        path: '',
      },
    ],
  },
];

export default navList;
