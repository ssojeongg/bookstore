import "../assets/css/Cart.css";
import "../assets/reponsive/Res_Cart.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

// import cartData from "../data/CartData.ts";
import { useState, useEffect } from "react";

import * as PortOne from "@portone/browser-sdk/v2";

const Cart = () => {
  // const [bookdata, setBookdata] = useState([]);
  const [newBookData, setNewBookData] = useState([]);
  const [items, setItems] = useState(newBookData.map(() => 1));

  const add = (index: number) => {
    const newItems = [...items];
    newItems[index] += 1;
    setItems(newItems);
  };

  const remove = (index: number) => {
    const newItems = [...items];
    newItems[index] = newItems[index] > 1 ? newItems[index] - 1 : 1;
    setItems(newItems);
  };

  const totalPrice = items.reduce(
    (sum, quantity, index) => sum + quantity * Number(newBookData[index].price),
    0
  );

  // const bookPrice = data.price * items[index]
  const formatPrice = (bookPrice: number) =>
    bookPrice.toLocaleString("ko-KR") + "원";

  useEffect(() => {
    const newData = JSON.parse(localStorage.getItem("cartData"));
    setNewBookData(newData);
  }, []);

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
    <div className="Cart">
      <div className="title_area">
        <p>장바구니</p>
        <p>
          <FontAwesomeIcon icon={faHouse} /> &gt; 상품상세 &gt;{" "}
          <span>장바구니</span>
        </p>
      </div>
      <div className="inner">
        <div className="cart_area">
          {newBookData.map((data, index) => (
            <div className="cart_box" key={data.id}>
              <div className="img_box">
                <img src={data.img} />
              </div>
              <div className="txt_area">
                <p className="title">{data.title}</p>
                <div className="price">
                  <div className="price_cal">
                    <button onClick={() => remove(index)}>-</button>
                    <input type="number" value={items[index]} readOnly />
                    <button onClick={() => add(index)}>+</button>
                  </div>
                  <p>{formatPrice(Number(data.price) * items[index])}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart_price_area">
          <div className="cart_price_box">
            <p>총 판매가 : {formatPrice(totalPrice)}</p>
            <p>배송비 : {formatPrice(3000)}</p>
            <p>최종결제금액 : {formatPrice(totalPrice + 3000)}</p>
          </div>
          <button onClick={() => onClickPay(totalPrice + 3000)}>
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
