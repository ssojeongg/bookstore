import '../assets/css/HeaderMiddle.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/img/logo.png'
const HeaderMiddle = () => {
  return (
    <div className="HeaderMiddle">
      <div className="inner">
        <div className="HeaderMiddle_area">
          <img src={logo} />
          <div className="input_area">
            <input type="text" placeholder='검색어를 입력하세요.'/>
            <FontAwesomeIcon className='search_icon' icon={faSearch} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMiddle