import React from 'react';
import ApplicationBar from '../Header/Header/Header'
import { Outlet } from 'react-router';

export default function SharedLayout() {
  return (
    <div>
        <ApplicationBar />
      <Outlet />
    </div>
  );
}
