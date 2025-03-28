// Header.tsx
import React, {useEffect} from 'react';
import logo from '../img/dark_logo.svg'
import { CSSProperties } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


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
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    if (location.pathname === '/') {
      // На главной - плавный скролл
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        
        // Обновляем URL без перезагрузки
        window.history.pushState(null, '', `/#${id}`);
      }
    } else {
      // На других страницах - переход на главную с последующим скроллом
      navigate('/', {
        state: { scrollTo: id }, // Передаем целевой ID в state
        replace: true
      });
    }
  }
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Небольшая задержка для гарантированного рендера страницы
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          // Очищаем state после скролла
          window.history.replaceState({}, document.title);
        }, 100);
      }
    }
  }, [location]);
  return (
    <header style={styles.header }>
      <div className="logo">
      <a href="/" rel="noopener noreferrer">
            <img src={img} alt ="logo" />
            <span>CranProject</span>
          </a>
        
      </div>
      <nav className="nav-list">
        <ul>
          <li><button onClick={() => handleClick("team")} style={styles.navItem }>О нас</button></li>
          <li><button onClick={() => handleClick("services")} style={styles.navItem }>Услуги</button></li>
          <li><button onClick={() => handleClick("products")}  style={styles.navItem }>Продукты</button></li>
        </ul>
      </nav>
      {children && <div>{children}</div>}
    </header>
  );
};

export default React.memo(Header);
