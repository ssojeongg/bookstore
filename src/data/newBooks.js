const newBooks = [
  {
    id: 1,
    title: "달러구트 꿈 백화점 2",
    img: "https://bookthumb-phinf.pstatic.net/cover/207/771/20777131.jpg",
    price: 14000,
    author: "이미예",
    publisher: "팩토리나인",
    publishedDate: "2024-06-20",
    ISBN: "9791192507641"
  },
  {
    id: 2,
    title: "어린이라는 세계",
    img: "https://bookthumb-phinf.pstatic.net/cover/171/912/17191260.jpg",
    price: 15000,
    author: "오찬호",
    publisher: "사계절",
    publishedDate: "2024-02-28",
    ISBN: "9788958284790"
  },
  {
    id: 3,
    title: "걷는 사람, 하정우",
    img: "https://bookthumb-phinf.pstatic.net/cover/142/576/14257616.jpg",
    price: 16000,
    author: "하정우",
    publisher: "웅진지식하우스",
    publishedDate: "2023-10-23",
    ISBN: "9788901253200"
  },
  {
    id: 4,
    title: "불편한 편의점",
    img: "https://bookthumb-phinf.pstatic.net/cover/189/260/18926010.jpg",
    price: 15500,
    author: "김호연",
    publisher: "나무옆의자",
    publishedDate: "2024-04-05",
    ISBN: "9791192131604"
  },
  {
    id: 5,
    title: "언어의 온도",
    img: "https://bookthumb-phinf.pstatic.net/cover/109/245/10924505.jpg",
    price: 14500,
    author: "이기주",
    publisher: "말글터",
    publishedDate: "2025-02-10",
    ISBN: "9788998649959"
  },
  {
    id: 6,
    title: "완전한 행복",
    img: "https://bookthumb-phinf.pstatic.net/cover/205/780/20578083.jpg",
    price: 14800,
    author: "정세랑",
    publisher: "문학동네",
    publishedDate: "2024-05-28",
    ISBN: "9788954656084"
  },
  {
    id: 7,
    title: "초원의 역사",
    img: "https://shopping-phinf.pstatic.net/main_4988486/49884869623.20240827090801.jpg",
    price: 13800,
    author: "최은영",
    publisher: "문학과지성사",
    publishedDate: "2024-03-15",
    ISBN: "9788932038104"
  },
  {
    id: 8,
    title: "토막 난 우주를 안고서",
    img: "https://shopping-phinf.pstatic.net/main_5507748/55077486003.20250610092651.jpg",
    price: 13500,
    author: "김초엽",
    publisher: "다산초당",
    publishedDate: "2023-09-15",
    ISBN: "9788959956997"
  },
  {
    id: 9,
    title: "신의 탑 1",
    img: "https://bookthumb-phinf.pstatic.net/cover/157/030/15703059.jpg",
    price: 13000,
    author: "SIU",
    publisher: "코미카",
    publishedDate: "2023-11-01",
    ISBN: "9788998823882"
  },
  {
    id: 10,
    title: "나는 나로 살기로 했다",
    img: "https://bookthumb-phinf.pstatic.net/cover/214/733/21473397.jpg?type=m5",
    price: 12500,
    author: "김수현",
    publisher: "마음서재",
    publishedDate: "2023-04-10",
    ISBN: "9788998625821"
  },
  {
    id: 11,
    title: "어린 왕자",
    img: "https://bookthumb-phinf.pstatic.net/cover/097/003/09700399.jpg",
    price: 8500,
    author: "생텍쥐페리",
    publisher: "더클래식",
    publishedDate: "2023-01-10",
    ISBN: "9788901123834"
  },
  {
    id: 12,
    title: "완벽주의자를 위한 행복 연습",
    img: "https://shopping-phinf.pstatic.net/main_4529066/45290662620.20240117095417.jpg",
    price: 15000,
    author: "김연수",
    publisher: "문학동네",
    publishedDate: "2024-01-05",
    ISBN: "9788954655094"
  },
  {
    id: 13,
    title: "연금술사",
    img: "https://bookthumb-phinf.pstatic.net/cover/000/648/00064853.jpg",
    price: 11000,
    author: "파울로 코엘료",
    publisher: "문학동네",
    publishedDate: "2023-07-15",
    ISBN: "9788954620099"
  },
  {
    id: 14,
    title: "지적 대화를 위한 넓고 얕은 지식",
    img: "https://bookthumb-phinf.pstatic.net/cover/162/144/16214429.jpg",
    price: 18000,
    author: "채사장",
    publisher: "한빛비즈",
    publishedDate: "2023-02-10",
    ISBN: "9788968486018"
  },
  {
    id: 15,
    title: "데미안",
    img: "https://shopping-phinf.pstatic.net/main_5467207/54672072122.20250510091920.jpg",
    price: 9500,
    author: "헤르만 헤세",
    publisher: "민음사",
    publishedDate: "2023-03-05",
    ISBN: "9788937463459"
  },
  {
    id: 16,
    title: "노르웨이의 숲",
    img: "https://bookthumb-phinf.pstatic.net/cover/124/287/12428742.jpg",
    price: 12000,
    author: "무라카미 하루키",
    publisher: "문학동네",
    publishedDate: "2023-08-10",
    ISBN: "9788954653847"
  },
  {
    id: 17,
    title: "연애의 온도",
    img: "https://bookthumb-phinf.pstatic.net/cover/144/739/14473926.jpg",
    price: 13000,
    author: "이도우",
    publisher: "문학동네",
    publishedDate: "2023-06-15",
    ISBN: "9788954651348"
  },
  {
    id: 18,
    title: "고마워, 고마워!",
    img: "https://shopping-phinf.pstatic.net/main_5492409/54924097774.20250612072114.jpg",
    price: 14500,
    author: "박준",
    publisher: "문학동네",
    publishedDate: "2024-01-25",
    ISBN: "9788954655673"
  },
  {
    id: 19,
    title: "기억 전달자",
    img: "https://shopping-phinf.pstatic.net/main_4673346/46733460625.20240330092107.jpg",
    price: 11500,
    author: "로이스 로리",
    publisher: "시공사",
    publishedDate: "2023-02-20",
    ISBN: "9788952751345"
  },
  {
    id: 20,
    title: "어느 날, 내 죽음에 네가 들어왔다",
    img: "https://bookthumb-phinf.pstatic.net/cover/224/377/22437765.jpg",
    price: 13900,
    author: "김수연",
    publisher: "민음사",
    publishedDate: "2024-03-10",
    ISBN: "9788934975678"
  }
];

export default newBooks;
