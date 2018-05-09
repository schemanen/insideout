import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-lightbulb',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
  	title: 'Calendar',
  	icon: 'nb-grid-b',
  	link: '/pages/calendar'
  },
  {
    title: 'Meeting room',
    icon: 'nb-home',
    link: '/pages/meetingroom'
  },
  {
    title: 'News',
    icon: 'nb-compose',
    link: '/pages/news'
  },
  {
    title: 'ADMINISTRATION',
    group: true,
  },
  {
    title: 'Maintenance',
    icon: 'nb-heart',
    link: '/pages/maintenance'
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
