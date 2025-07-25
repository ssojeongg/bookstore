export interface BestBooksType {
  id: number
  title: string
  img: string
  price: number
  author: string
  publisher: string
  publishedDate: string
  ISBN: string
}

const bestBooks: BestBooksType[] = [
  {
    id: 1,
    title: "빛과 멜로디",
    img: "https://image.aladin.co.kr/product/34592/43/cover200/k402933577_1.jpg?RS=134",
    price: 11900,
    author: "김하나",
    publisher: "문학과지성사",
    publishedDate: "2025-01-15",
    ISBN: "9788970123456"
  },
  {
    id: 2,
    title: "이중 하나는 거짓말",
    img: "https://image.aladin.co.kr/product/34474/76/cover200/k292932634_3.jpg?RS=170",
    price: 10300,
    author: "서지우",
    publisher: "창비",
    publishedDate: "2024-11-20",
    ISBN: "9788936432108"
  },
  {
    id: 3,
    title: "부모의 어휘력",
    img: "https://image.aladin.co.kr/product/34112/12/cover500/k662931384_1.jpg?RS=170",
    price: 13200,
    author: "이은경",
    publisher: "웅진지식하우스",
    publishedDate: "2024-10-05",
    ISBN: "9788901234567"
  },
  {
    id: 4,
    title: "향설 백물어 세트",
    img: "https://image.aladin.co.kr/product/32969/59/cover200/893494630x_3.jpg?RS=170",
    price: 10300,
    author: "박향설",
    publisher: "북하우스",
    publishedDate: "2023-09-01",
    ISBN: "9788937845678"
  },
  {
    id: 5,
    title: "여자 마흔다섯, 마흔아홉",
    img: "https://image.aladin.co.kr/product/25809/46/cover200/k382736332_1.jpg?RS=170",
    price: 13900,
    author: "조현아",
    publisher: "민음사",
    publishedDate: "2024-02-14",
    ISBN: "9788937401234"
  },
  {
    id: 6,
    title: "탕비실",
    img: "https://image.aladin.co.kr/product/34193/41/cover500/k602931315_1.jpg?RS=170",
    price: 13700,
    author: "정승원",
    publisher: "문학동네",
    publishedDate: "2024-07-22",
    ISBN: "9788983924561"
  },
  {
    id: 7,
    title: "너에게 들려주는 단단한 말",
    img: "https://image.aladin.co.kr/product/34233/47/cover500/k212931234_2.jpg?RS=170",
    price: 11900,
    author: "송하나",
    publisher: "열림원",
    publishedDate: "2024-12-01",
    ISBN: "9788970941230"
  },
  {
    id: 8,
    title: "도어 (리커버 특별판)",
    img: "https://image.aladin.co.kr/product/32367/92/cover200/k572935476_1.jpg?RS=170",
    price: 13200,
    author: "이연주",
    publisher: "시공사",
    publishedDate: "2023-11-10",
    ISBN: "9788952789123"
  },
  {
    id: 9,
    title: "빈방의 빛 : 시인이 말하는 호퍼 (리버커)",
    img: "https://image.aladin.co.kr/product/31515/96/cover200/k292832532_1.jpg?RS=170",
    price: 16400,
    author: "박정원",
    publisher: "미메시스",
    publishedDate: "2024-03-08",
    ISBN: "9788965743129"
  },
  {
    id: 10,
    title: "방금 떠나온 세계 (2주년 기념 리커버)",
    img: "https://image.aladin.co.kr/product/32697/5/cover200/k522936662_3.jpg?RS=170",
    price: 11300,
    author: "황정은",
    publisher: "문학과지성사",
    publishedDate: "2023-06-15",
    ISBN: "9788970124789"
  },
  {
    id: 11,
    title: "순도 100퍼센트의 휴식",
    img: "https://image.aladin.co.kr/product/34368/67/cover200/k382932108_1.jpg?RS=170",
    price: 15500,
    author: "김아영",
    publisher: "북로그컴퍼니",
    publishedDate: "2024-08-20",
    ISBN: "9788991234560"
  },
  {
    id: 12,
    title: "노르웨이의 숲",
    img: "https://bookthumb-phinf.pstatic.net/cover/124/287/12428742.jpg",
    price: 12000,
    author: "무라카미 하루키",
    publisher: "문학동네",
    publishedDate: "2023-08-10",
    ISBN: "9788954653847"
  },  
  {
    id: 13,
    title: "완벽주의자를 위한 행복 연습",
    img: "https://shopping-phinf.pstatic.net/main_4529066/45290662620.20240117095417.jpg",
    price: 15000,
    author: "김연수",
    publisher: "문학동네",
    publishedDate: "2024-01-05",
    ISBN: "9788954655094"
  },
  {
    id: 14,
    title: "완전한 행복",
    img: "https://bookthumb-phinf.pstatic.net/cover/205/780/20578083.jpg",
    price: 14800,
    author: "정세랑",
    publisher: "문학동네",
    publishedDate: "2024-05-28",
    ISBN: "9788954656084"
  },
  {
    id: 15,
    title: "불편한 편의점",
    img: "https://bookthumb-phinf.pstatic.net/cover/189/260/18926010.jpg",
    price: 15500,
    author: "김호연",
    publisher: "나무옆의자",
    publishedDate: "2024-04-05",
    ISBN: "9791192131604"
  },
  {
    id: 16,
    title: "어린 왕자",
    img: "https://bookthumb-phinf.pstatic.net/cover/097/003/09700399.jpg",
    price: 8500,
    author: "생텍쥐페리",
    publisher: "더클래식",
    publishedDate: "2023-01-10",
    ISBN: "9788901123834"
  },
  {
    id: 17,
    title: "연금술사",
    img: "https://bookthumb-phinf.pstatic.net/cover/000/648/00064853.jpg",
    price: 11000,
    author: "파울로 코엘료",
    publisher: "문학동네",
    publishedDate: "2023-07-15",
    ISBN: "9788954620099"
  },
  {
    id: 18,
    title: "달러구트 꿈 백화점 2",
    img: "https://bookthumb-phinf.pstatic.net/cover/207/771/20777131.jpg",
    price: 14000,
    author: "이미예",
    publisher: "팩토리나인",
    publishedDate: "2024-06-20",
    ISBN: "9791192507641"
  },
  {
    id: 19,
    title: "불편한 편의점",
    img: "https://bookthumb-phinf.pstatic.net/cover/189/260/18926010.jpg",
    price: 15500,
    author: "김호연",
    publisher: "나무옆의자",
    publishedDate: "2024-04-05",
    ISBN: "9791192131604"
  },
  {
    id: 20,
    title: "언어의 온도",
    img: "https://bookthumb-phinf.pstatic.net/cover/109/245/10924505.jpg",
    price: 14500,
    author: "이기주",
    publisher: "말글터",
    publishedDate: "2025-02-10",
    ISBN: "9788998649959"
  },
];

export default bestBooks;