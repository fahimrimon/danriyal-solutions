import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
