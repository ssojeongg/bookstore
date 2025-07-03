import '../assets/css/Notice.css'
import '../assets/reponsive/Res_Notice.css'
import noticeData from '../data/notice.js'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


const Notice = () => {
  return (
    <div className="Notice">
      <div className="inner">
        <div className="Notice_title">
          <p><span>행운책방의 </span>공지사항</p>
          <FontAwesomeIcon icon={faPlus} className="icon" />
        </div>
        <div className="Notice_area">
          {noticeData.map((item)=> (
            <div className="Notice_box" key={item.id}>
              <p className='btn'>{item.btn}</p>
              <p className='title'>{item.title}</p>
              <p className='manager'>{item.manager}</p>
              <p className='date'>{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Notice