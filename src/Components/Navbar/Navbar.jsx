import './Navbar.css';
import './navbar.css'
import Logo from '../../assets/Logo (4).svg'
import { SlBasket } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import Aos from 'aos';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Navbar() {
 
  const navigate = useNavigate();

  const Change = (e) => {
    if (e.target.value) {
      navigate(e.target.value); 
    }
  };
  Aos.init(
            {
                duration:1500,
                delay:200,
            }
        )
  return (
    <>
        
    
        <nav data-aos="slide-down" data-aos-delay="200" >
                                        
            <div className="nav-1">
      <Link style={{textDecoration:"none", color:"black"}} to={'/'}><img className='logo'  src={Logo} alt="" /></Link>  
       <p><Link to={"/"}  style={{textDecoration:"none", color:"black"}}>Home</Link> </p>
        <p > <Link style={{textDecoration:"none", color:"black"}} to={'/about'}>About</Link></p>
   <select onChange={Change} defaultValue="">
      <option value="" disabled>
        choose the page
      </option>
      <option value="/organik">Organik</option>
      <option value="/about">About</option>
      <option value="/shop">Shop</option>
      <option value="/single">Single Shop</option>
      <option value="/service">Service</option>
      <option value="/ssingle">service single</option>
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
        <p> <Link style={{textDecoration:"none", color:"black",}} to={'/shop'}>Shop</Link> </p>
        <p>Projects</p>
        <p>News</p>
          
  
  
            </div>
            
                   <div className="div-2">
         <div className='icon-cont1'> <CiSearch size={21} color='white' className='icon-1'/></div>
            <div className="icon-cont2"><div className="icon-3"><SlBasket color='white' className='icon-2'/></div></div> </div>    
        </nav>
    </>
  );
}

export default Navbar