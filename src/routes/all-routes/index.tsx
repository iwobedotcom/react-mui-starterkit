import { Route } from '@/interfaces';
import LoginPage from '@/pages/auth/login';
import HomePage from '@/pages/default/home';
import NewsPage from '@/pages/default/news';
import SignupPage from '@/pages/auth/signup';
import AboutPage from '@/pages/default/about';
import ContactPage from '@/pages/default/contact';
import ResetPasswordPage from '@/pages/auth/reset-password';

const defaultRoutes: Route[] = [
  { path: '/', component: <HomePage /> },
  { path: '/about', component: <AboutPage /> },
  { path: '/news', component: <NewsPage /> },
  { path: '/contact', component: <ContactPage /> }
];

const authRoutes: Route[] = [
  { path: '/login', component: <LoginPage /> },
  { path: '/signup', component: <SignupPage /> },
  { path: '/reset-password', component: <ResetPasswordPage /> }
];

export { authRoutes, defaultRoutes };
