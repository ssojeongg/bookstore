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

function App() {
  return (
    <BrowserRouter basename='/bookstore'>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/sub/401" element={<Qna />} />
        <Route path="/sub/402" element={<CustomerService />} />
        <Route path="/Write" element={<Write />} />
        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
