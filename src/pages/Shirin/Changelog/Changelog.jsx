import './Changelog.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Newslatter from '../../../Components/Newslatteer/Newslatter';
import Banner from '../../../Components/Banner/Banner';
import multiply from '../../../assets/multiply.png'
import Footer from '../../../Components/Footer/Footer';
function Changelog() {
  return (
    <main>
      <Navbar/>
      <Banner string={"Changelog"} clas={'licenses-banner'}/>
      <section className="section-changelog">
        <div>
          <img src={multiply} alt="" />
          <h1>V.1</h1>
          <p>Initial Organick Webflow Template Release</p>
        </div>
      </section>
      <Newslatter/>
      <Footer/>
    </main>
  );
}

export default Changelog;