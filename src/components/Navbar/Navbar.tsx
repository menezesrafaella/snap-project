import Snap from 'common/assets/svg/snap.svg'

const menus = [
 {
  title: 'Features',
  link: '/',
  submenu: [
    {
      title: 'Todo List',
      link: '/'
    },
    {
      title: 'Calendar',
      link: '/'
    },
    {
      title: 'Reminders',
      link: '/'
    },
    {
      title: 'Planning',
      link: '/'
    }
  ],
  }, 
  {
    title: 'Company',
    link: '/',
    submenu: [
      {
        title: 'History',
        link: '/'
      },
      {
        title: 'Our Team',
        link: '/'
      },
      {
        title: 'Blog',
        link: '/'
      },
    ]
  },
  {
    title: 'Careers',
    link: '/',
    submenu: []
  },
  {
    title: 'About',
    link: '/',
    submenu: []
  }
]

export const Navbar = () => {
  return <header>
    <img src={Snap} alt='' />
    <ul>

      <li></li>
    </ul>
  </header>;
};