import { Link } from 'react-router-dom'
import '../assets/css/Write.css'

const Write = () => {
  const register = () => alert("등록완료!")
  return (
    <div className="Write">
      <div className="title_area">
        <p>고객센터</p>
      </div>
      <div className="inner">
        <form>
          <input placeholder='제목' type="text" />
          <input placeholder='작성자' type="text" />
          <textarea name="des"></textarea>
        </form>
        <div className="btn_area"><Link to="/sub/402"><button onClick={register}>등록하기</button></Link></div>
      </div>
    </div>
  )
}

export default Write