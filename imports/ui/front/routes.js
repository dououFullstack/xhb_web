import Layout from './layout/layout';
import Home from './pages/home';
import Profile from './pages/profile';

import News from './pages/news';
import NewsShow from './pages/news_show';
import Schedule from './pages/schedule';
import About from './pages/about';
import Regions from './pages/regions';
import Regionsshow from './pages/regions_show';
import Apply from './pages/apply';

const _routes = [
  { path: '/',
    component: Layout,
    indexRoute: { component: Home },
    childRoutes: [
      { path: '/profile', component: Profile },
      { path: '/news',
        indexRoute: { component: News },
        childRoutes: [
          { path: '/news/:id', component: NewsShow },
        ],
      },
      { path: '/schedule', component: Schedule },
      { path: '/about', component: About },
      { path: '/regions', component: Regions },
      { path: '/regions/:id', component: Regionsshow },
      { path: 'apply', component: Apply },
    ],
  },
];

export default _routes;
