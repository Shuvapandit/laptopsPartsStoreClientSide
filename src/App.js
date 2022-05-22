
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home/Home';
import Nabar from './pages/Shared/Nabar';

function App() {
  return (
    <div>
      <Nabar></Nabar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/aboutus" element={<About/>} />
       
      </Routes>
    </div>
  );
}

export default App;
