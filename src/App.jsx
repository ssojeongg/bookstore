// App.js
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './layout/Footer'
import Header from './layout/Header'
import Main from './layout/Main'
import Login from './pages/Login';
import SignIn from './pages/SignIn'
import Qna from './pages/Qna';

function App() {
  return (
    <BrowserRouter basename='/bookstore'>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/sub/401" element={<Qna />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
