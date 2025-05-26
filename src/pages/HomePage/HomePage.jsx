import { useState } from 'react';
import { MenuItem } from '../../components/MenuItem/MenuItem';
import './style.css';

export const HomePage = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleClick = () => {
    setMenuOpened(!menuOpened);
  };

  const handleSelectItem = () => {
    setMenuOpened(false);
  };

  return (
    <>
      <header>
        <div className={menuOpened ? 'menu' : 'menu menu--closed'}>
          <button className="menu__btn" onClick={handleClick}></button>
          <div className="menu__items">
            <MenuItem text="Domů" onSelecet={handleSelectItem} />
            <MenuItem text="Naše nabídka" onSelecet={handleSelectItem} />
            <MenuItem text="Náš tým" onSelecet={handleSelectItem} />
            <MenuItem text="Blog" onSelecet={handleSelectItem} />
            <MenuItem text="Kontakt" onSelecet={handleSelectItem} />
          </div>
        </div>
      </header>
      <main>
        <h1>Domů</h1>
      </main>
    </>
  );
};
