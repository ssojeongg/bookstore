import '../assets/css/New.css';
import '../assets/reponsive/Res_New.css';
import newBooks from '../data/newBooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Pagination from '../components/Paginationbar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const New = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const pageCount = Math.ceil(newBooks.length / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = newBooks.slice(offset, offset + itemsPerPage);

  return (
    <div className="New">
      <div className="title_area">
        <p>신간도서</p>
        <p><FontAwesomeIcon icon={faHouse} /> &gt; 도서정보 &gt; <span>신간도서</span></p>
      </div>
      <div className="inner">
        <form>
          <select>
            <option value="title">제목</option>
          </select>
          <input type="text" />
          <button>검색</button>
        </form>

        <div className="new_area">
          <div className="img_area">
            {currentItems.map((data, index, id) => (
              <div className="img_box" key={index}>
                <div className="books_area">
                  <Link to={`/newdetail/${data.id}`}>
                    <img src={data.img} alt={data.title} />
                  </Link>
                  <div className="txt_box">
                    <p className="title">{data.title}</p>
                    <p className="author">저자 : {data.author}</p>
                    <p className="pub">출판사 : {data.publisher}</p>
                    <p className="isbn">ISBN : {data.ISBN}</p>
                    <p className="price">도서가격 : {data.price}</p>
                  </div>
                </div>
                <div className="btn_area">
                  <button>장바구니</button>
                  <button>구매하기</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {pageCount > 1 && (
          <Pagination
            pageCount={pageCount}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
};

export default New;
