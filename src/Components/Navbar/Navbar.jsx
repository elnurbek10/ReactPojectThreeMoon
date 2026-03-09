import './Navbar.css';
import Logo from '../../assets/Logo (4).svg';
import { SlBasket } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import Aos from 'aos';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import 'aos/dist/aos.css';

function Navbar({ onSearch }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    Aos.init({ duration: 1500, delay: 200 });

    const params = new URLSearchParams(location.search);
    const initial = params.get("search") || "";
    setSearchValue(initial);
  }, [location.search]);

  const ChangePage = (e) => {
    if (e.target.value) navigate(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    if (onSearch) onSearch(e.target.value);
    navigate(`/shop?search=${encodeURIComponent(e.target.value)}`);
  };

  return (
    <nav data-aos="slide-down" data-aos-delay="200">
      <div className="nav-1">
        <Link style={{textDecoration:"none", color:"black"}} to={'/'}>
          <img className='logo' src={Logo} alt="Logo" />
        </Link>
        <p><Link style={{textDecoration:"none", color:"black"}} to="/">Home</Link></p>
        <p><Link style={{textDecoration:"none", color:"black"}} to="/about">About</Link></p>

        <select onChange={ChangePage} defaultValue="" className='style1'>
          <option value="" disabled>choose the page</option>
          <option value="/about">About</option>
          <option value="/shop">Shop</option>
          <option value="/single">Single Shop</option>
          <option value="/service">Service</option>
          <option value="/portfolio">Portfolio</option>
          <option value="/psingle">single portfolio</option>
          <option value="/team">Team</option>
          <option value="/blog">Blog</option>
          <option value="/bsingle">Blog single</option>
          <option value="/contact">Contact</option>
          <option value="/error">Error</option>
          <option value="/licenses">Licenses</option>
          <option value="/changelog">Changelog</option>
          <option value="/pprotect">Password Protect</option>
        </select>

        <p><Link style={{textDecoration:"none", color:"black"}} to='/shop'>Shop</Link></p>
        <p><Link style={{textDecoration:"none", color:"black"}} to='/Project'>Project</Link></p>
        <p><Link style={{textDecoration:"none", color:"black"}} to='/News'>News</Link></p>
      </div>

      <div className="ong">
        <div className="izl">
          <input 
            type="text" 
            className="kir" 
            placeholder="Search..."
            value={searchValue}
            onChange={handleSearch}
          />
          <button className="izt">🔍</button>
        </div>
        <div className="sav">
          <div className="ayl">🛒</div>
          <span className="son">Cart (0)</span>
        </div>
      </div>

     
    </nav>
  );
}

export default Navbar;