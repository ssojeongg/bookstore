import '../assets/css/HeaderMenu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import menus from '../data/menu.js';
import { useState } from 'react';

const HeaderMenu = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isAllMenuOpen, setIsAllMenuOpen] = useState(false);

  const toggleMenu = (menuId) => {
    setOpenMenu(openMenu === menuId ? null : menuId);
  };

  const toggleAllMenu = () => {
    setIsAllMenuOpen(!isAllMenuOpen);
  };

  return (
    <div className="HeaderMenu">
      <div className="inner">
        <div className="HeaderMenu_left" onClick={toggleAllMenu}> 
          <FontAwesomeIcon className='bar_icon' icon={isAllMenuOpen ? faTimes : faBars} />
          <a href="#">전체메뉴</a>
        </div>
        <div className={`HeaderMenu_right ${isAllMenuOpen ? 'all_menu_open' : ''}`}>
          <ul className="nav">
            {menus.map((menu) => (
              <div className="inner">
              <li key={menu.id} className='menu_list'>
                {menu.title}
                <ul className={`sub${(openMenu === menu.id || isAllMenuOpen) ? 'show' : ''}`}>
                    <div className="inner">
                    {menu.subMenu.map((subItem, index) => (
                      <li key={index} className='submenu_list'>
                        {subItem}
                      </li>
                    ))}
                    </div>
                </ul>
              </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderMenu;
