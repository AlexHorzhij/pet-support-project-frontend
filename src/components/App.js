import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import { LoaderPage } from 'components';
import { SharedLayout } from 'components';
import { PrivateRoute, PublicRoute } from 'services';
import { getAuth } from 'redux/auth/authSelectors';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage'));
const NoticePage = lazy(() => import('../pages/NoticePage'));
const VerificationPage = lazy(() => import('../pages/VerificationPage'));
const ResendEmailPage = lazy(() => import('../pages/ResendEmailPage'));
const ResetPasswordPage = lazy(() => import('../pages/ResetPasswordPage'));

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector(getAuth);

  useEffect(() => {
    if (token) {
      dispatch(fetchCurrentUser(token));
    }
  }, [dispatch, token]);

  return (
    <>
      <Suspense fallback={<LoaderPage />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />

            <Route element={<PublicRoute />}>
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route
                path="verification/:verificationToken"
                element={<VerificationPage />}
              />
              <Route path="verification" element={<ResendEmailPage />} />
              <Route
                path="resetpassword/:confirmationToken"
                element={<ResetPasswordPage />}
              />
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
