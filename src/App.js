import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import AllBlogs from './Pages/Blogs/AllBlogs';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs';
import Services from './Pages/Services';

function App() {
  return (
    <div className='bg-white'>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
        <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/allblogs' element={<AllBlogs></AllBlogs>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
