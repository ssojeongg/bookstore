import { Link } from 'react-router-dom'
import '../assets/css/Write.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Write = () => {
  const register = () => alert("등록완료!")

  const [formData, setForm] = useState({
    title: '',
    writer: '',
    content: ''
  })

const handleFormChange = (e) => {
  setForm((prev) => ({
     ...prev,
     [e.target.name]: e.target.value
  }))
}

  return (
    <div className="Write">
      <div className="title_area">
        <p>고객센터</p>
        <p><FontAwesomeIcon icon={faHouse} />&nbsp;&nbsp;&gt;&nbsp;&nbsp;행운책방 안내&nbsp;&nbsp;&gt;&nbsp;&nbsp;<span>고객센터</span></p>
      </div>
      <div className="inner">
        <form>
          <input onChange={handleFormChange} name='title' placeholder='제목' type="text" />
          <input onChange={handleFormChange} name='writer'  placeholder='작성자' type="text" />
          <textarea onChange={handleFormChange} name="content"></textarea>
        </form>
        <div className="btn_area"><Link to="/sub/402"><button onClick={register}>등록하기</button></Link></div>
      </div>
    </div>
  )
}

export default Write