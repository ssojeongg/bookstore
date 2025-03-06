import '../assets/css/HeaderMenu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import menus from '../data/menu.js'

const HeaderMenu = () => {
  return (
    <div className="HeaderMenu">
      <div className="inner">
        <div className="HeaderMenu_left">
          <FontAwesomeIcon className='bar_icon' icon={faBars} />
          <a href="javascript:void(0)">전체메뉴</a>
        </div>
        <div className="HeaderMenu_right">
          <ul className="nav"> 
            {menus.map((menu) => (
              <li key={menu.id} className='menu_list'>
                {menu.title}
                <ul className='sub'>
                  <div className="inner">
                    {menu.subMenu.map((subItem, index) => (
                      <li key={index} className='submenu_list'>
                        {subItem}
                      </li>
                    ))}
                  </div>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>  
    </div>
  )
}

export default HeaderMenu