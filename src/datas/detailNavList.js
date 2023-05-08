import routes from '@/configs/routes';
import { v4 as uuid } from 'uuid';
const detailNavList = [
  {
    id: uuid(),
    label: 'Overview',
    children: [
      {
        id: uuid(),
        label: 'Main',
        path: '',
      },
      {
        id: uuid(),
        label: 'Alternative Titles',
        path: 'titles',
      },
      {
        id: uuid(),
        label: 'Cast & Crew',
        path: 'cast',
      },
      {
        id: uuid(),
        label: 'Release Dates',
        path: 'release-dates',
      },
      {
        id: uuid(),
        label: 'Translations',
        path: 'translations',
      },
      {
        id: uuid(),
        label: 'Watch now',
        path: 'watch',
      },
      {
        id: uuid(),
        label: 'Changes',
        path: 'changes',
        marginTop: true,
      },
    ],
  },
  {
    id: uuid(),
    label: 'Media',
    children: [
      {
        id: uuid(),
        label: 'Backdrops',
        path: 'backdrops',
      },
      {
        id: uuid(),
        label: 'Logos',
        path: 'logos',
      },
      {
        id: uuid(),
        label: 'Posters',
        path: 'posters',
      },
      {
        id: uuid(),
        label: 'Videos',
        children: [
          {
            id: uuid(),
            label: 'Trailers',
            path: 'trailers',
          },
          {
            id: uuid(),
            label: 'Teasers',
            path: 'teasers',
          },
          {
            id: uuid(),
            label: 'Clips',
            path: 'clips',
          },
          {
            id: uuid(),
            label: 'Behind The Scenes',
            path: 'bloopers',
          },
          {
            id: uuid(),
            label: 'Featurettes',
            path: 'featurettes',
          },
        ],
      },
    ],
  },
  {
    id: uuid(),
    label: 'Fandom',
    children: [
      {
        id: uuid(),
        label: 'Discussions',
        children: [
          {
            id: uuid(),
            label: 'Overview',
            path: 'overview',
          },
          {
            id: uuid(),
            label: 'General',
            path: 'general',
          },
          {
            id: uuid(),
            label: 'Content Issues',
            path: 'content-issues',
          },
        ],
      },
      {
        id: uuid(),
        label: 'Reviews',
        path: 'reviews',
      },
    ],
  },
  {
    id: uuid(),
    label: 'Share',
    children: [
      {
        id: uuid(),
        label: 'Share Link',
        path: 'share-link',
      },
      {
        id: uuid(),
        label: 'Facebook',
        path: 'facebook',
      },
      {
        id: uuid(),
        label: 'Tweet',
        path: 'tweet',
      },
    ],
  },
];

export default detailNavList;
