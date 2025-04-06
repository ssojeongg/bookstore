// App.js
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './layout/Footer'
import Header from './layout/Header'
import Main from './layout/Main'
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter basename='/bookstore'>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
