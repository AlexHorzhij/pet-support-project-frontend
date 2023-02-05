import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import { LoaderPage } from 'components';
import { PrivateRoute, PublicRoute } from '../services/RouteManager';

// const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const NewsPage = lazy(() => import('../pages/NewsPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage'));
const NoticePage = lazy(() => import('../pages/NoticePage'));
// const ModalBackDrop = lazy(() => import('./ModalBackDrop/ModalBackDrop'))

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<LoaderPage />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />

            <Route element={<PublicRoute />}>
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
            <Route path="news" element={<NewsPage />} />
            <Route path="friends" element={<OurFriendsPage />} />
            <Route path="notices/:categoryName" element={<NoticePage />} />
            <Route element={<PrivateRoute />}>
              <Route path="user" element={<UserPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;
