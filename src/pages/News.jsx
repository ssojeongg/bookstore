import { useNavigate } from 'react-router-dom';
import '../assets/css/News.css';
import news from '../data/news';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
const NoticePage = () => {
  const navigate = useNavigate();
  const today = new Date();
  const date = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  const handleWriteClick = (id) => {
    navigate(`/newsdetail/${id}`);
  };
  
  return (
    <div className="News">
      <div className="title_area">
        <p>서점소식</p>
        <p><FontAwesomeIcon icon={faHouse} />&nbsp;&nbsp;&gt;&nbsp;&nbsp;알림마당&nbsp;&nbsp;&gt;&nbsp;&nbsp;<span>서점소식</span></p>
      </div>
      <div className="inner">
        <form>
          <select>
            <option value="title">제목</option>
          </select>
          <input type="text" />
          <button>검색</button>
        </form>
        <div className="News_area">
          <table>
              <tr>
                <th>번호</th>
                <td>제목</td>
                <td>등록일</td>
              </tr>
              {news.map((data, id) => (
                <tr key={id}>
                  <th>{data.id}</th>
                  <td onClick={() => handleWriteClick(data.id)}>{data.title}</td>
                  <td>{date}</td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default NoticePage;
