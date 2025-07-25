import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/CustomerService.css';
import '../assets/reponsive/Res_CustomerService.css'
import customer from '../data/customer.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
const CustomerService = () => {
  const navigate = useNavigate();
  const today = new Date();
  const date = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  const handleWriteClick = (id:number) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="CustomerService">
      <div className="title_area">
        <p>고객센터</p>
        <p><FontAwesomeIcon icon={faHouse} />&nbsp;&nbsp;&gt;&nbsp;&nbsp;행운책방 안내&nbsp;&nbsp;&gt;&nbsp;&nbsp;<span>고객센터</span></p>
      </div>
      <div className="inner">
        <form>
          <select>
            <option value="title">제목</option>
          </select>
          <input type="text" />
          <button>검색</button>
        </form>
        <div className="customer_area">
          <table>
              <tr>
                <th>번호</th>
                <td>제목</td>
                <td>등록일</td>
                <td>작성자</td>
              </tr>
              {customer.map((data, id) => (
                <tr key={id}>
                  <th>{data.id}</th>
                  <td onClick={() => handleWriteClick(data.id)}>{data.title}</td>
                  <td>{date}</td>
                  <td>{data.name}</td>
                </tr>
              ))}
          </table>
          <div className="btn_area">
            <Link to="/Write">
              <button>글쓰기</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
