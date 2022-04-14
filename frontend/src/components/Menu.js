import React from 'react';
import { Link } from 'react-router-dom';

import './components.css';

const MainMenu = ({ user }) => {
  return (
    // возвращаем верстку
    <div className="div-menu">
      <nav>
        <ul className="menu-main">
          <li>
            <Link to="/">Все пользователи</Link>
          </li>
          <li>
            <Link to="/projects/">Проекты</Link>
          </li>
          <li>
            <Link to="/todos/">TODO листы</Link>
          </li>
          <li className="login">
            <Link to="/login/">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainMenu;
