import '../assets/css/Banner.css';

const Banner = () => {
  const texts = Array(10).fill("Click!! 행운책방 EVENT");

  return (
    <div className="Banner">
      <div className="event_area">
        {/* 동일한 텍스트 블록을 2번 반복하여 무한 스크롤 구현 */}
        <div className="marquee">
          {texts.map((text, index) => (
            <p className="text" key={index}>{text}</p>
          ))}
        </div>
        <div className="marquee">
          {texts.map((text, index) => (
            <p className="text" key={index}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
