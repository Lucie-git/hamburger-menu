import { useState } from 'react';
import { MenuItem } from '../../components/MenuItem/MenuItem';
import './style.css';

export const HomePage = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [pageTitle, setPageTitle] = useState('Domů');

  const handleClick = () => {
    setMenuOpened(!menuOpened);
  };

  const handleSelectItem = (page) => {
    setMenuOpened(false);
    setPageTitle(page);
  };

  return (
    <>
      <header>
        <div className={menuOpened ? 'menu' : 'menu menu--closed'}>
          <button className="menu__btn" onClick={handleClick}></button>
          <div className="menu__items">
            <MenuItem pageTitle="Domů" text="Domů" onSelect={handleSelectItem} />
            <MenuItem pageTitle="Naše nabídka" text="Naše nabídka" onSelect={handleSelectItem} />
            <MenuItem pageTitle="Náš tým" text="Náš tým" onSelect={handleSelectItem} />
            <MenuItem pageTitle="Blog" text="Blog" onSelect={handleSelectItem} />
            <MenuItem pageTitle="Kontakt" text="Kontakt" onSelect={handleSelectItem} />
          </div>
        </div>
      </header>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};
