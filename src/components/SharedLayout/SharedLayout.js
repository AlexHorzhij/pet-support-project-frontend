import React from 'react';

import { Outlet } from 'react-router';

export default function SharedLayout() {
  return (
    <div>
      <div>HEADER</div>
      <Outlet />
    </div>
  );
}
