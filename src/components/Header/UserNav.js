import React from 'react';
import AuthNav from './AuthNav';

export default function UserNav() {
  return (
    <div class="mobile-menu" data-menu>
      <div class="container mobile-menu__container">
        <AuthNav />
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

        <button class="mobile-menu__close-btn" data-menu-close>
          <svg class="mobile-menu__close-icon" width="40" height="40">
            <use href="./images/icons.svg#close_40px"></use>
          </svg>
        </button>
      </div>
    </div>
  );
}
