import { Link } from 'react-router-dom';
import '../assets/css/HeaderTop.css'
const HeaderTop = () => {
  return (
    <div className="HeaderTop">
      <div className="inner">
        <div className="HeaderTop_menu">
          <ul className="HeaderTop_left_menu">
            <li><a href="javascript:void(0)">서점관리</a></li>
            <li><a href="javascript:void(0)">예약관리</a></li>
            <li><a href="javascript:void(0)">서점 On Pos</a></li>
          </ul>
          <ul className="HeaderTop_right_menu">
            <li><Link to="/login">로그인</Link></li>
            <li><a href="javascript:void(0)">회원가입</a></li>  
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop