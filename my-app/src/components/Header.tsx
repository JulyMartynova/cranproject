// Header.tsx
import React from 'react';

import { CSSProperties } from 'react';

// Определяем интерфейс для стилей


// Определяем интерфейс для пропсов компонента
interface HeaderProps {
  styles?: {
    header?: CSSProperties;
    navItem?: CSSProperties;
  },
  children?: React.ReactNode;
}

// Создаем компонент Header
const Header: React.FC<HeaderProps> = ({styles ={} , children}) => {
  return (
    <header style={styles.header }>
      <div className="logo">
        <span>CranProject</span>
      </div>
      <nav className="nav-list">
        <ul>
          <li><a href="/about" style={styles.navItem }>О нас</a></li>
          <li><a href="/services" style={styles.navItem }>Услуги</a></li>
          <li><a href="/products" style={styles.navItem }>Продукты</a></li>
        </ul>
      </nav>
      {children && <div>{children}</div>}
    </header>
  );
};

export default Header;
