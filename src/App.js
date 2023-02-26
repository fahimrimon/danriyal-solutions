import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
      <Home></Home>
      <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
