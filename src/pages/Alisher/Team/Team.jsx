import './Team.css';
import { Data } from '../../../../data';
import Navbar from '../../../Components/Navbar/Navbar'
import Newsletter from '../../../Components/Newslatteer/Newslatter'
import Banner from '../../../Components/Banner/Banner'
import TeamB from '../../../assets/banner.jpg'
import Aos from 'aos';
import { useEffect } from 'react';
import "aos/dist/aos.css"
import Footer from '../../../Components/Footer/Footer';
function Team() {
useEffect(()=>{
  Aos.init({
    duration:2000
  })
})
  let res = Data.people
  return (
    <main>
      <Navbar/>
      <Banner string="Our Team" clas={"team-banner"}/>
      <section className='section-team'>
      {
        res.map((e)=>(
<div key={e.id} data-aos="fade-up">
  <img src={e.img} alt="" />
  <div>
    <div>
      <h1>{e.name}</h1>
      <h3 style={{ color: "#7EB693" }}>{e.job}</h3>
    </div>
    <div> <img src={e.SocialMedia} alt="" /></div>
  </div>
</div>  
        ))
      }

      </section>

      <Newsletter/>
      <Footer/>
    </main>
  );
}

export default Team;