import './Protect.css';
import Newslatter from '../../../Components/Newslatteer/Newslatter';
import Navbar from '../../../Components/Navbar/Navbar';
import Banner from '../../../Components/Banner/Banner';
import Protected from '../../../assets/Protect.png'
import Footer from '../../../Components/Footer/Footer';
function Protect() {
  return (
    <main>
     <Navbar/>
     <Banner string={'Protected Page'} clas={'licenses-banner'}/>
     <section className="section-Protect">
      <div>
        <img src={Protected} alt="" />
        <div>
          <h1>Password</h1>
          <input type="password" placeholder='Enter Your Password'/>
          <button>Send Now &rarr;</button>
        </div>
      </div>
     </section>
     <Newslatter/> 
<Footer/>
    </main>
  );
}

export default Protect;