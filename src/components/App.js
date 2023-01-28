import React, { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';
import { Loader } from './Loader/Loader';
import { PrivateRoute, PublicRoute } from '../RouteManager/RouteManager';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const UserPage = lazy(() => import('../pages/UserPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const NewsPage = lazy(() => import('../pages/NewsPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage'));
const NoticePage = lazy(() => import('../pages/NoticePage'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />

            <Route element={<PublicRoute />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/friends" element={<OurFriendsPage />} />
              <Route path="/notices:categoryName" element={<NoticePage />} />
              {/* <Route path="/notices/sell" element={<NoticesCategoryList />} />
              <Route path="/notices/lost-found" element={<NoticesCategoryList />} />
              <Route path="/notices/for-free" element={<NoticesCategoryList />} /> */}
            </Route>

            <Route element={<PublicRoute />}>
              <Route path="/user" element={<UserPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
