import React from "react";

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">📚 Тұран Кітапханасы</div>
        <nav className="nav-menu">
          <a href="#main">Басты бет</a>
          <a href="#about">Біз туралы</a>
          <a href="#services">Қызметтер</a>
          <a href="#footer">Байланыс</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;