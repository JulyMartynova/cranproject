// Header.tsx
import React from 'react';
import logo from '../img/dark_logo.svg'
import { CSSProperties } from 'react';


interface HeaderProps {
  img?: string;
  styles?: {
    header?: CSSProperties;
    navItem?: CSSProperties;
  },
  children?: React.ReactNode;
}

// Создаем компонент Header
const Header: React.FC<HeaderProps> = ({img=logo, styles ={} , children}) => {
  return (
    <header style={styles.header }>
      <div className="logo">
      <a href="/" rel="noopener noreferrer">
            <img src={img} alt ="logo" />
          </a>
        <span>CranProject</span>
      </div>
      <nav className="nav-list">
        <ul>
          <li><a href="/about" rel="noopener noreferrer" style={styles.navItem }>О нас</a></li>
          <li><a href="/services" rel="noopener noreferrer"  style={styles.navItem }>Услуги</a></li>
          <li><a href="/products" rel="noopener noreferrer"  style={styles.navItem }>Продукты</a></li>
        </ul>
      </nav>
      {children && <div>{children}</div>}
    </header>
  );
};

export default React.memo(Header);
