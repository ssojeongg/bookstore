import '../assets/css/HeaderMenu.css';
import '../assets/reponsive/Res_HeaderMenu.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import menus from '../data/menu.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const HeaderMenu = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);
  const [isAllMenuOpen, setIsAllMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null)

  const toggleMenu = (menuId) => {
    setOpenMenu(openMenu === menuId ? null : menuId);
  };

  const toggleAllMenu = () => {
    setIsAllMenuOpen(!isAllMenuOpen);
  };

  const handleMenuClick = (subMenuId) => {
  const allSubMenus = menus.flatMap(menu => menu.subMenu);
  const selectedSubMenu = allSubMenus.find(sub => sub.id === subMenuId);

  if (selectedSubMenu) {
    setSelectedMenu(subMenuId);
    navigate(`/sub/${subMenuId}`);
  }
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
                      <li onClick={() => handleMenuClick(subItem.id)} key={index} className='submenu_list'>
                        {subItem.name}
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
