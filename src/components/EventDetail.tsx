import { useParams, Link } from 'react-router-dom';
import event from '../data/event.ts';
import type { EventType } from '../data/event.ts';
import '../assets/css/Detail.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <p>잘못된 접근</p>;

  const post: EventType | undefined = event.find((item) => item.id === parseInt(id));
  if (!post) {
    return <p>게시물을 찾을 수 없습니다.</p>;
  }
  
  return (
    <div className="Detail">
      <div className="title_area">
        <p>행사/모임</p>
        <p><FontAwesomeIcon icon={faHouse} />&nbsp;&nbsp;&gt;&nbsp;&nbsp;문화행사&nbsp;&nbsp;&gt;&nbsp;&nbsp;<span>행사모임</span></p>
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
          <Link to="/sub/201"><button>목록으로</button></Link>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
