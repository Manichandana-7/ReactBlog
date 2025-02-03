import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Addblog from './components/Addblog';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/addBlog" element={<Addblog />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
        
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App
