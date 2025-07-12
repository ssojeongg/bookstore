import '../assets/css/Cart.css';
import '../assets/reponsive/Res_Cart.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import cartData from '../data/CartData';
import { useState } from 'react';

const Cart = () => {
  const [items, setItems] = useState(cartData.map(() => 1));

  const add = (index) => {
    const newItems = [...items];
    newItems[index] += 1;
    setItems(newItems);
  };

  const remove = (index) => {
    const newItems = [...items];
    newItems[index] = newItems[index] > 1 ? newItems[index] - 1 : 1;
    setItems(newItems);
  };

  const totalPrice = items.reduce(
    (sum, quantity, index) => sum + quantity * cartData[index].price,
    0
  );

  const formatPrice = (num) => num.toLocaleString("ko-KR") + "원";

  return (
    <div className="Cart">
      <div className="title_area">
        <p>장바구니</p>
        <p><FontAwesomeIcon icon={faHouse} /> &gt; 상품상세 &gt; <span>장바구니</span></p>
      </div>

      <div className="inner">
        <div className="cart_area">
          {cartData.map((data, index) => (
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
                    <p>{formatPrice(data.price * items[index])}</p>
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
          <button>구매하기</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
