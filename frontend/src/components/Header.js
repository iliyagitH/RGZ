import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo.png'; // Убедись, что logo.png находится в этой же папке
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/');
  };

  const isLoggedIn = localStorage.getItem('access_token');

  return (
    <header className="header">
      <div className="header-logo-container">
        <Link to="/" className="header-logo-link"> {/* Добавлен класс для ссылки */}
          <img src={logo} alt="Логотип" className="header-logo" />
          <span className="header-app-name">MyVideoApp</span> {/* Добавлено название приложения */}
        </Link>
      </div>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Главная</Link>
        {isLoggedIn ? (
          <>
            <Link to="/account" className="nav-link">Мой аккаунт</Link>
            <button onClick={handleLogout} className="nav-button nav-button-logout">Выход</button> {/* Обновлены классы */}
          </>
        ) : (
          <>
            <Link to="/login" className="nav-button">Вход</Link> {/* Обновлен класс */}
            {/* <Link to="/register" className="nav-button nav-button-secondary">Регистрация</Link> */}
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;