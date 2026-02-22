import './App.css'
// Library lar uchun import qilingan
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
// Elnurbek uchun import qilingan.
import Organik from './pages/Elnurbek/Organik/organik';
import About from './pages/Elnurbek/About/About';
import Service from './pages/Elnurbek/Service/service';
import Shop from './pages/Elnurbek/Shop/Shop';
import Single from './pages/Elnurbek/Single/Single';

// Alisher uchun import qilingan.
import Blog from './pages/Alisher/Blog/Blog';
import Portfolio from './pages/Alisher/Portfolio/Portfolio';
import Psingle from './pages/Alisher/Psingle/Psingle';
import Ssingle from './pages/Alisher/Ssingle/Ssingle';
import Team from './pages/Alisher/Team/Team';

// Shirin uchun import qilingan.
import Bsingle from './pages/Shirin/Bsingle/Bsingle';
import Changelog from './pages/Shirin/Changelog/Changelog';
import Contact from './pages/Shirin/Contact/Contact';
import Error from './pages/Shirin/Error/Error';
import Licenses from './pages/Shirin/Licenses/License';
import Pprotect from './pages/Shirin/Pprotect/Protect';    
function App() {

  return (
    <>
           <Routes>
        {/* Elnurbek */}
        <Route path="/organik" element={<Organik />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/single" element={<Single />} />

        {/* Alisher */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/psingle" element={<Psingle />} />
        <Route path="/ssingle" element={<Ssingle />} />
        <Route path="/team" element={<Team />} />

        {/* Shirin */}
        <Route path="/bsingle" element={<Bsingle />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/licenses" element={<Licenses />} />
        <Route path="/pprotect" element={<Pprotect />} />

        {/* Error */}
        <Route path="*" element={<Error />} />
      </Routes>

    </>
  )
}

export default App
