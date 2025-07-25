import { useParams, Link } from 'react-router-dom';
import customer from '../data/customer';
import type { PostType } from '../data/customer';
import '../assets/css/Detail.css'; 
import '../assets/reponsive/Res_Detail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <p>잘못된 접근</p>;

  const post: PostType | undefined = customer.find((item) => item.id === parseInt(id));
  if (!post) {
    return <p>게시물을 찾을 수 없습니다.</p>;
  }

  return (
    <div className="Detail">
      <div className="title_area">
        <p>고객센터</p>
        <p><FontAwesomeIcon icon={faHouse} />&nbsp;&nbsp;&gt;&nbsp;&nbsp;행운책방 안내&nbsp;&nbsp;&gt;&nbsp;&nbsp;<span>고객센터</span></p>
      </div>
      <div className="inner">
        <div className="des_box">
        <h2>{post.title}</h2>
          <p>{post.des}</p>
        </div>
        <div className="ans_box">
          <h4>답변</h4>
          <p>{post.ans}</p>
        </div>
        <div className="btn_area">
          <Link to="/sub/402"><button>목록으로</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
