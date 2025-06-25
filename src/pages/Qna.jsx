import { useState } from 'react'
import '../assets/css/Qna.css'
import qna from '../data/qna'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Qna = () => {
  const [openId, setOpenId] = useState(false)
  const toggleHandler = (id) => {
    setOpenId(openId === id ? null : id);
  }
  return (
    <div className="Qna">
      <div className="title_area">
        <p>자주 묻는 질문</p>
        <p><FontAwesomeIcon icon={faHouse} />&nbsp;&nbsp;&gt;&nbsp;&nbsp;행운책방 안내&nbsp;&nbsp;&gt;&nbsp;&nbsp;<span>고객센터</span></p>
      </div>
        <div className="inner">
          {
            qna.map((data) => (
              <div className="qna_area">
                <p className="title" key={data.id} onClick={() => toggleHandler(data.id)}>{data.title}</p>
                <p className={openId === data.id ? "sub_show" : "sub" }>{data.sub}</p>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default Qna