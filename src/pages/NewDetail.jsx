import newBooks from "../data/newBooks";
import { Link, useParams } from "react-router-dom";

import "../assets/css/NewDetail.css";
import "../assets/reponsive/Res_NewDetail.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Best from "../components/Best";

const NewDetail = () => {
  const { id } = useParams();
  const bookFromNew = newBooks.find(item => item.id === parseInt(id));

  const book = bookFromNew || bookFromBest;

  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const add = () => setQuantity(quantity + 1);
  const remove = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  const formatPrice = (num) => num.toLocaleString("ko-KR") + "원";

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="NewDetail">
      <div className="title_area">
        <p>상품상세</p>
        <p><FontAwesomeIcon icon={faHouse} /> &gt; <span>상품상세</span></p>
      </div>

      <div className="inner">
        <div className="new_detail_area">
          <img src={book.img} alt={book.title} />
          <div className="txt_box_area">
            <div className="txt_box">
              <p className="title">도서명 : {book.title}</p>
              <p className="price">도서가격 : {formatPrice(book.price)}</p>
              <p className="event">구매혜택 : <span>1,000 포인트 적립예정</span></p>
            </div>
            <div className="price_area">
              <div className="price_box">
                <p>수량</p>
              </div>
              <div className="price_bt_area">
                <div className="price_cal">
                  <button onClick={remove}>-</button>
                  <input type="number" value={quantity} readOnly />
                  <button onClick={add}>+</button>
                </div>
                <p>{formatPrice(book.price * quantity)}</p>
              </div>
            </div>
            <div className="btn_area">
              <button onClick={openModal}>장바구니</button>
              <button>구매하기</button>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div className="modal_overlay">
            <div className="modal">
              <div className="modal_area">
                <div className="modal_txt">
                  <p>상품이 장바구니에 담겼습니다.</p>
                  <p>장바구니로 이동하시겠습니까?</p>
                </div>
                <div className="btn_area">
                  <Link to="/cart"><button className="cart_btn">예</button></Link>
                  <button className="close_btn" onClick={closeModal}>아니오</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Best />
    </div>
  );
};

export default NewDetail;
