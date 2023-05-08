import { v4 as uuid } from 'uuid';
const footerLinks = [
  {
    id: uuid(),
    label: 'The Basics',
    children: [
      {
        id: uuid(),
        label: 'About TMDb',
        path: '/about',
      },
      {
        id: uuid(),
        label: 'Contact Us',
        path: '/contact',
      },
      {
        id: uuid(),
        label: 'Support Forums',
        path: '/support',
      },
      {
        id: uuid(),
        label: 'API',
        path: '/api',
      },
      {
        id: uuid(),
        label: 'System Status',
        path: '/status',
      },
    ],
  },
  {
    id: uuid(),
    label: 'Get Involved',
    children: [
      {
        id: uuid(),
        label: 'Contribution Bible',
        path: '/contribution',
      },
      {
        id: uuid(),
        label: '3rd Party Applications',
        path: '/3rdparty',
      },
      {
        id: uuid(),
        label: 'Add New Movie',
        path: '/addmovie',
      },
      {
        id: uuid(),
        label: 'Add New TV Show',
        path: '/addtvshow',
      },
    ],
  },
  {
    id: uuid(),
    label: 'Community',
    children: [
      {
        id: uuid(),
        label: 'Guidelines',
        path: '/guidelines',
      },
      {
        id: uuid(),
        label: 'Discussions',
        path: '/discussions',
      },
      {
        id: uuid(),
        label: 'Leaderboard',
        path: '/leaderboard',
      },
      {
        id: uuid(),
        label: 'Twitter',
        path: '/twitter',
      },
    ],
  },
  {
    id: uuid(),
    label: 'Legal',

    children: [
      {
        id: uuid(),
        label: 'Terms of Use',
        path: '/termsofuse',
      },
      {
        id: uuid(),
        label: 'API Terms of Use',
        path: '/apitermsofuse',
      },
      {
        id: uuid(),
        label: 'Privacy Policy',
        path: '/privacypolicy',
      },
    ],
  },
];

export default footerLinks;
