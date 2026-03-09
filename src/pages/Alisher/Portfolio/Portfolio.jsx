import './Portfolio.css';
import Navbar from '../../../Components/Navbar/Navbar'
import { Data } from '../../../../data';
import Banner from '../../../Components/Banner/Banner'
import Newslatter from '../../../Components/Newslatteer/Newslatter';
import icon1 from '../../../assets/Icon (1).png'
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import { useEffect } from 'react';
import Footer from '../../../Components/Footer/Footer';
function Portfolio() {
  useEffect(()=>{
    Aos.init({
      duration:2000
    })
  })
  let res = Data.cards
let navigate = useNavigate()
  return (
    <main>
      <Navbar/>
      <Banner string="Portfolio Standard" clas={"portfolio-banner"}/>
      <section className="portfolio-section-main">
        {
          res.map((item)=>(
            <div className='portfolio-card' onClick={() => navigate(`/psingle/${item.id}`)} data-aos="zoom-in" key={item.id}>
               <div className="absolute-div-p">
                <img src={icon1} alt="" />
                
              </div>
              <img className='portfolio-img' src={item.img} alt="" />
             
              <div>
                <h2 className='cth2'>
                  {item.name}
                </h2>
                <b className='ctg'>{item.category}</b>
              </div>
            </div>
          ))
        }
      </section>
      <Newslatter/>
      <Footer/>
    </main>
  );
}

export default Portfolio;