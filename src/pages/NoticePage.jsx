import { useNavigate } from 'react-router-dom';
import '../assets/css/NoticePage.css';
import customer from '../data/customer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
const NoticePage = () => {
  const navigate = useNavigate();
  const today = new Date();
  const date = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  const handleWriteClick = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <div className="NoticePage">
      <div className="title_area">
        <p>공지사항</p>
        <p><FontAwesomeIcon icon={faHouse} />&nbsp;&nbsp;&gt;&nbsp;&nbsp;알림마당&nbsp;&nbsp;&gt;&nbsp;&nbsp;<span>공지사항</span></p>
      </div>
      <div className="inner">
        <form>
          <select>
            <option value="title">제목</option>
          </select>
          <input type="text" />
          <button>검색</button>
        </form>
        <div className="NoticePage_area">
          <table>
              <tr>
                <th>번호</th>
                <td>제목</td>
                <td>등록일</td>
              </tr>
              {customer.map((data, id) => (
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
