import { useNavigate } from 'react-router-dom';
import '../assets/css/Event.css';
import event from '../data/event'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
const Event = () => {
  const navigate = useNavigate();
  const today = new Date();
  const date = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  const handleWriteClick = (id) => {
    navigate(`/eventdetail/${id}`);
  };
  return (
    <div className="Event">
      <div className="title_area">
        <p>행사/모임</p>
        <p><FontAwesomeIcon icon={faHouse} />&nbsp;&nbsp;&gt;&nbsp;&nbsp;문화행사&nbsp;&nbsp;&gt;&nbsp;&nbsp;<span>행사모임</span></p>
      </div>
      <div className="inner">
        <form>
          <select>
            <option value="title">제목</option>
          </select>
          <input type="text" />
          <button>검색</button>
        </form>
        <div className="Event_area">
          <table>
              <tr>
                <th>번호</th>
                <td>지역</td>
                <td>제목</td>
                <td>서점명</td>
                <td>등록일</td>
              </tr>
              {event.map((data, id) => (
                <tr key={id}>
                  <th>{data.id}</th>
                  <td>{data.area}</td>
                  <td onClick={() => handleWriteClick(data.id)}>{data.title}</td>
                  <td>{data.name}</td>
                  <td>{date}</td>
                </tr>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Event;
