// import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Addblog from './components/Addblog';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/addBlog" element={<Addblog />} />
        
        </Routes>
      </BrowserRouter>
      <Footer />
     
    </>
  );
}

export default App
