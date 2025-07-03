import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import '../assets/css/Login.css'
import '../assets/reponsive/Res_Login.css'
import login from "../assets/img/login1.jpg"
const Login = () => {
  return (
    <div className="Login">
      <div className="inner">
        <div className="login_left">
          <img src={login} />
        </div>
        <div className="login_right">
          <h2>Login</h2>
          <div className='form'>
            <div className="id_wrap">
              <FontAwesomeIcon icon={faUser}  className='icon'/>
              <input type="text" placeholder='아이디를 입력하세요'/>
            </div>
            <div className="password_wrap">
              <FontAwesomeIcon icon={faLock} className='icon'/>
              <input type="password" placeholder="비밀번호를 입력하세요" />
            </div>
          </div>
          <div className="login_btn">
            <button>LOGIN</button>
            <button>KAKAO LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login