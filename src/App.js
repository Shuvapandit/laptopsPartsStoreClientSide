
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home/Home';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import Footer from './pages/Shared/Footer/Footer';
import Nabar from './pages/Shared/Nabar';
import NotFound from './pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Nabar></Nabar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/aboutus" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/myportfolio" element={<MyPortfolio/>} />
       
        <Route path="*" element={<NotFound/>} />
       
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
