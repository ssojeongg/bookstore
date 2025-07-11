// App.js
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './layout/Footer'
import Header from './layout/Header'
import Main from './layout/Main'
import Login from './pages/Login';
import SignIn from './pages/SignIn'
import Qna from './pages/Qna';
import CustomerService from './pages/CustomerService';
import Write from './pages/Write';
import Detail from './components/Detail';
import Notice from './pages/NoticePage';
import News from './pages/News';
import Event from './pages/Event';
import NoticeDetail from './components/NoticeDetail';
import NewsDetail from './components/EventDetail';
import EventDetail from './components/EventDetail';
import New from './pages/New';
import BestPage from './pages/BestPage';

function App() {
  return (
    <BrowserRouter basename='/bookstore'>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/sub/101" element={<New />} />
        <Route path="/sub/102" element={<BestPage />} />
        <Route path="/sub/201" element={<Event />} />
        <Route path="/sub/301" element={<Notice />} />
        <Route path="/sub/302" element={<News />} />
        <Route path="/sub/401" element={<Qna />} />
        <Route path="/sub/402" element={<CustomerService />} />
        <Route path="/Write" element={<Write />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/NoticeDetail/:id" element={<NoticeDetail />} />
        <Route path="/NewsDetail/:id" element={<NewsDetail />} />
        <Route path="/eventDetail/:id" element={<EventDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
