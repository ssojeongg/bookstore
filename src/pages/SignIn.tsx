import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import '../assets/css/SignIn.css'
import '../assets/reponsive/Res_SignIn.css'
import SignIn from "../assets/img/signup1.jpg"
const Login = () => {
  return (
    <div className="SignIn">
      <div className="inner">
        <div className="SignIn_left">
          <img src={SignIn} />
        </div>
        <div className="SignIn_right">
          <h2>SignUp</h2>
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
          <div className="SignIn_btn">
            <button>SIGNUP</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login