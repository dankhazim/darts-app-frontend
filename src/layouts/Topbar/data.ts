import avatar1 from 'assets/images/users/avatar-1.jpg';
import avatar2 from 'assets/images/users/avatar-2.jpg';
import { NotificationItem, ProfileOption } from '../types';

// get the notifications
const notifications: NotificationItem[] = [
  {
    day: 'Today',
    messages: [
      {
        id: 1,
        title: 'Új tipp',
        subText: 'Hümér tippelt a meccsre',
        time: '1 perce',
        icon: 'mdi mdi-comment-account-outline',
        variant: 'primary',
        isRead: false
      },
      {
        id: 2,
        title: 'Admin',
        subText: 'New user registered.',
        time: '1 hours ago',
        icon: 'mdi mdi-account-plus',
        variant: 'info',
        isRead: true
      }
    ]
  },
  {
    day: 'Yesterday',
    messages: [
      {
        id: 1,
        title: 'Cristina Pride',
        subText: 'Hi, How are you? What about our next meeting',
        time: '1 day ago',
        avatar: avatar1,
        isRead: true
      }
    ]
  },
  {
    day: '30 Dec 2021',
    messages: [
      {
        id: 1,
        title: 'Datacorp',
        subText: 'Caleb Flakelar commented on Admin',
        icon: 'mdi mdi-comment-account-outline',
        variant: 'primary',
        isRead: true
      },
      {
        id: 2,
        title: 'Karen Robinson',
        subText: 'Wow ! this admin looks good and awesome design',
        avatar: avatar2,
        isRead: true
      }
    ]
  }
];

// get the profilemenu
const profileMenus: ProfileOption[] = [
  {
    label: 'My Account',
    icon: 'mdi mdi-account-circle',
    redirectTo: '#'
  },
  {
    label: 'Settings',
    icon: 'mdi mdi-account-edit',
    redirectTo: '#'
  },
  {
    label: 'Support',
    icon: 'mdi mdi-lifebuoy',
    redirectTo: '#'
  },
  {
    label: 'Lock Screen',
    icon: 'mdi mdi-lock-outline',
    redirectTo: '/account/lock-screen'
  },
  {
    label: 'Logout',
    icon: 'mdi mdi-logout',
    redirectTo: '/account/logout'
  }
];

export { notifications, profileMenus };
