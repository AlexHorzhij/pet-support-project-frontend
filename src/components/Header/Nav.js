import React from 'react';
export default function Nav() {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className="nav-list__item">
          <a className="nav-list__link nav-list__link--current" href="">
            News
          </a>
        </li>
        <li className="nav-list__item">
          <a className="nav-list__link" href="">
            Find pet
          </a>
        </li>
        <li className="nav-list__item">
          <a className="nav-list__link" href="">
            Our friends
          </a>
        </li>
      </ul>
    </nav>
  );
}
