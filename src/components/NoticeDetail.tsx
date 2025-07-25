import { useParams, Link } from 'react-router-dom';
import notice from '../data/notice';
import '../assets/css/Detail.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const NoticeDetail = () => {
  const { id } = useParams();
  const post = notice.find((item) => item.id === parseInt(id));
  return (
    <div className="Detail">
      <div className="title_area">
        <p>공지사항</p>
        <p><FontAwesomeIcon icon={faHouse} />&nbsp;&nbsp;&gt;&nbsp;&nbsp;알림마당&nbsp;&nbsp;&gt;&nbsp;&nbsp;<span>공지사항</span></p>
      </div>
      <div className="inner">
        <div className="des_box">
        <h2>{post.title}</h2>
          <p>
          {post.des?.split(/[\r\n]+|\. /).map((line, index) => (
            <span key={index}>
              {line.trim()}
              {line.trim() && (
            <>
              <br />
              <br />
            </>
          )}
            </span>
          ))}
          </p>
        </div>
        <div className="btn_area">
          <Link to="/sub/301"><button>목록으로</button></Link>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetail;
