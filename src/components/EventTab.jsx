import '../assets/css/EventTab.css';
import eventTab from '../data/eventTab.js';
import { useState, useEffect } from 'react';

const EventTab = () => {
  const [activeTab, setActiveTab] = useState(1); // 현재 선택된 탭
  const [items, setItems] = useState([]); // 선택된 탭에 해당하는 아이템들

  // activeTab이 변경될 때마다 해당 탭에 맞는 아이템만 필터링
  useEffect(() => {
    const filteredItems = eventTab.items.filter(item => item.category === activeTab);
    setItems(filteredItems);
  }, [activeTab]);

  return (
    <div className="EventTab">
      <div className="inner">
        <div className="EventTab_title">
          <p><span>대전광역시 서점들의 </span>행사 모임</p>
        </div>

        {/* 탭 메뉴 */}
        <div className="tabs">
          {eventTab.tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab_button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* 선택된 탭의 내용 */}
        <div className="tab_content">
          {items.map((item) => (
            <div className="tab_area" key={item.id}>
              <img src={item.image} alt={item.title} />
              <p className="tab_title">{item.title}</p>
              <div className="sub_area">
                <p className="date">{item.date}</p>
                <p className="tab_company">{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventTab;
