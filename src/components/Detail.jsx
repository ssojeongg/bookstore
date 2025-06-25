// src/pages/Detail.jsx
import { useParams, Link } from 'react-router-dom';
import customer from '../data/customer';
import '../assets/css/Detail.css'; // 필요시

const Detail = () => {
  const { id } = useParams();
  const post = customer.find((item) => item.id === parseInt(id)); // id 매칭

if (!post) {
    return (
      <div className="Detail">
        <div className="inner">
          <h2>해당 글을 찾을 수 없습니다.</h2>
          <div className="btn_area">
            <Link to="/sub/402"><button>목록으로</button></Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="Detail">
      <div className="title_area">
        <p>고객센터</p>
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
