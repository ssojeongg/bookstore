import '../assets/css/Footer.css'

import logo from '../assets/img/logo.png'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="inner">
        <div className="ft_top">
          <p>개인정보처리방침</p>
          <p className='gray'>이메일주소무단수집거부</p>
          <p className='gray'>이용약관</p>
          <p className='gray'>제휴안내</p>
          <p className='gray'>사이트맵</p>
        </div>
        <div className="ft_middle">
          <p className="address">
          서울 구로구 가마산로 282, 대림오피스밸리 6층 (구로동, 대림오피스밸리)(우)08302
          대표전화: 02-927-1437-9 팩스: 02-927-1436
          </p>
        </div>
        <div className="ft_bottom">
          <p className="copyright">
          COPYRIGHT 한국출판문화산업진흥원 ALL RIGHTS RESERVED
          </p>
          <div className="ft_logo">
            <img src={logo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer