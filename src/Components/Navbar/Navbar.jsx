import './Navbar.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {

  const navigate = useNavigate();

  const Change = (e) => {
    if (e.target.value) {
      navigate(e.target.value);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1500,
      delay: 200,
    });
  }, []);

  return (
    <>
    
    </>
  );
}

export default Navbar;