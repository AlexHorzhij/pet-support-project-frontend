import React from 'react';
export default function AuthNav() {
  return (
    <ul className="nav-list">
      <li className="nav-list__item">
        <a className="nav-list__link nav-list__link--current" href="">
          Login
        </a>
      </li>
      <li className="nav-list__item">
        <a className="nav-list__link" href="">
          Registration
        </a>
      </li>
    </ul>
  );
}
