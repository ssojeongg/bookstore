export interface EventTabType {
  tabs: Tab[];
  items: Item[];
}

export type Tab = {
  id: number;
  title: string;
}

export type Item = {
  id: number;
  category: number;
  image: string;
  title: string;
  date: string;
  company: string
}


import img1 from "../assets/img/tab1.jpeg";
import img2 from "../assets/img/tab2.jpeg";
import img3 from "../assets/img/tab3.png";
import img4 from "../assets/img/tab4.png";

const eventTab:EventTabType = {
  tabs: [
    { id: 1, title: "동구" },
    { id: 2, title: "중구" },
    { id: 3, title: "서구" },
    { id: 4, title: "대덕구" },
    { id: 5, title: "유성구" },
  ],
  items: [
    { id: 1, category: 1, image: img1, title: "꿈돌이들의 수다회", date: "2025.02.11", company: "더비블리오그라피" },
    { id: 2, category: 1, image: img2, title: "심리학 잡지", date: "2025.02.11", company: "더비블리오그라피" },
    { id: 3, category: 1, image: img3, title: "정다연 시인 북토크", date: "2025.02.11", company: "더비블리오그라피" },
    { id: 4, category: 1, image: img4, title: "다정의 온도", date: "2025.02.11", company: "더비블리오그라피" },

    { id: 5, category: 2, image: img2, title: "심리학 잡지", date: "2025.02.11", company: "더비블리오그라피" },
    { id: 6, category: 2, image: img1, title: "꿈돌이들의 수다회", date: "2025.02.11", company: "더비블리오그라피" },
    { id: 7, category: 2, image: img4, title: "다정의 온도", date: "2025.02.11", company: "더비블리오그라피" },
    { id: 8, category: 2, image: img3, title: "정다연 시인 북토크", date: "2025.02.11", company: "더비블리오그라피" },

    { id: 9, category: 3, image: img2, title: "심리학 잡지", date: "2025.02.11", company: "더비블리오그라피" },
    { id: 10, category: 3, image: img1, title: "꿈돌이들의 수다회", date: "2025.02.11", company: "더비블리오그라피" },
    { id: 11, category: 3, image: img3, title: "정다연 시인 북토크", date: "2025.02.11", company: "더비블리오그라피" },
    { id: 12, category: 3, image: img4, title: "다정의 온도", date: "2025.02.11", company: "더비블리오그라피" },

    { id: 13, category: 4, image: img4, title: "다정의 온도", date: "2025.02.11", company: "더비블리오그라피" },
    { id: 14, category: 4, image: img2, title: "심리학 잡지", date: "2025.02.11", company: "더비블리오그라피" },
    { id: 15, category: 4, image: img3, title: "정다연 시인 북토크", date: "2025.02.11", company: "더비블리오그라피" },
    { id: 16, category: 4, image: img1, title: "꿈돌이들의 수다회", date: "2025.02.11", company: "더비블리오그라피" },

    { id: 17, category: 5, image: img2, title: "심리학 잡지", date: "2025.02.11", company: "더비블리오그라피" },
    { id: 18, category: 5, image: img3, title: "정다연 시인 북토크", date: "2025.02.11", company: "더비블리오그라피" },
    { id: 19, category: 5, image: img4, title: "다정의 온도", date: "2025.02.11", company: "더비블리오그라피" },
    { id: 20, category: 5, image: img1, title: "꿈돌이들의 수다회", date: "2025.02.11", company: "더비블리오그라피" }
  ]
};

export default eventTab;
