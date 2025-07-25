import "../assets/css/BestPage.css";
import "../assets/reponsive/Res_BestPage.css";
import best from "../data/Best";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../components/Paginationbar";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as PortOne from "@portone/browser-sdk/v2";

const BestPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [bookdata, setBookdata] = useState([]);

  const navigate = useNavigate();

  const itemsPerPage = 8;
  const pageCount = Math.ceil(best.length / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = best.slice(offset, offset + itemsPerPage);

  const onClickSetData = (data) => {
    console.log(data); // data가 잘 들어오는지 확인
    if (!data) return; // 만약 data가 없다면 함수 중단

    const hasData = localStorage.getItem("cartData"); // 로컬에 cartData가 있는지 확인
    let cartData = hasData ? JSON.parse(hasData) : []; // 있으면 parse해서 변수에 담고, 없으면 공배열

    if (!Array.isArray(cartData)) cartData = []; // 마지막으로 배열 맞는지 확인해서 아니면 공배열

    cartData.push(data); // 파라미터로 받은 선택data를 cart에 담기
    localStorage.setItem("cartData", JSON.stringify(cartData)); // 로컬로 보내서 덮어쓰기

    navigate("/cart");
  };

  const onClickPay = async (price: number) => {
    const payment = await PortOne.requestPayment({
      //우측 상단에 상점아이디
      storeId: "store-f6a1b0fa-293c-4c8b-ad61-88c627b329f3",
      //좌측 사이드바에 결제연동 > 연동정보 > 채널관리 > 테스트결제 > 채널키
      channelKey: "channel-key-35585708-4830-4826-a495-d15f7c4e6762",

      // 내가 하고 싶은 상품 명과 가격
      paymentId: "테스트 아이디",
      orderName: "테스트 상품",
      totalAmount: price,

      // 결제 화제, 수단 "그냥 그대로 쓰면 됨"
      currency: "CURRENCY_KRW",
      payMethod: "EASY_PAY",

      // 구매자 정보
      customer: {
        customerId: "테스트 유저",
        fullName: "박소정",
        phoneNumber: "010-3905-8153",
        email: "qkrthwjd0209@naver.com",
        // address: {
        //     country: "COUNTRY_KR",
        //     addressLine1: "seoul",
        //     addressLine2: "seongbuk",
        //     city: "seoul",
        //     province: "seongbuk",
        // },
        // zipcode: "00001",
      },
      // 결제 완료 후 되돌아갈 사이트주소
      redirectUrl: "http://localhost:5173/cart",
    });

    console.log(payment);
  };

  return (
    <div className="BestPage">
      <div className="title_area">
        <p>행운책방 BEST</p>
        <p>
          <FontAwesomeIcon icon={faHouse} /> &gt; 도서정보 &gt;{" "}
          <span>행운책방 BEST</span>
        </p>
      </div>
      <div className="inner">
        <form>
          <select>
            <option value="title">제목</option>
          </select>
          <input type="text" />
          <button>검색</button>
        </form>

        <div className="bestPage_area">
          <div className="img_area">
            {currentItems.map((data, index) => (
              <div className="img_box" key={index}>
                <div className="books_area">
                  <Link to={`/bestdetail/${data.id}`}>
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
                  <button className="cart" onClick={() => onClickSetData(data)}>
                    장바구니
                  </button>
                  <button
                    className="pay"
                    onClick={() => onClickPay(data.price)}
                  >
                    구매하기
                  </button>
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

export default BestPage;
