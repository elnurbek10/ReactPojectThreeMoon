import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import "./about.css"
import grok from "../../../assets/grok.svg"
import deb from "../../../assets/deb.svg"
import { IoBagAddSharp } from "react-icons/io5";
import { SiCodefresh } from "react-icons/si";
import { IoIosTime } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import qora from "../../../assets/qora.svg"
import oq from "../../../assets/oq.svg"
import sariq from "../../../assets/sariq.svg"
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import j1 from "../../../assets/j1.svg";
import j2 from "../../../assets/j2.svg";
import j3 from "../../../assets/j3.svg";
import j4 from "../../../assets/j4.svg";
import Footer from '../../../Components/Footer/Footer'
import Navbar from '../../../Components/Navbar/Navbar';
import Newslatter from '../../../Components/Newslatteer/Newslatter';








const About = () =>{


    return(
        <>
         <Navbar/>
            <header className="tep">
           
                </header>
            <div className="banana">
                <h1>About Us</h1>
            </div>
            <section className="maInS">
      <div className="coNtN">
        <div className="imGcC">
          <img 
            src={grok}
            alt="uoz_card" 
            className="maInI" 
          />
        </div>

        <div className="teXtC">
          <h4 className="suBtT">About Us</h4>
          <h1 className="tiTlE">We do Creative Things for Success</h1>
          
          <p className="deScR">
            Simply dummy text of the printing and typesetting industry. Lorem had ceased 
            to been the industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley.
          </p>
          
          <p className="deScR">
            Simply dummy text of the printing and typesetting industry. Lorem had ceased 
            to been the industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley.
          </p>

          <div className="feAtR">
            <div className="itEmS">
              <div className="icOnS">🚜</div>
              <span className="itExT">Modern Agriculture Equipment</span>
            </div>
            <div className="itEmS">
              <div className="icOnS">🏭</div>
              <span className="itExT">No growth hormones are used</span>
            </div>
          </div>

          <button className="btNnS">
          <Link  className="knkkkk" to="/shop">Explore More <span className="arRoW">→</span>
          </Link>
          </button>
        </div>
      </div>
    </section>

    <section className="main-sect">
      <div className="cont-aine">
        
        <div className="topp-part">
          <div className="text-side">
            <h4 className="subb-titl">Why Choose us?</h4>
            <h1 className="head-line">We do not buy from the open market & traders.</h1>
            <p className="main-desc">
              Simply dummy text of the printing and typesetting industry. Lorem had ceased 
              to been the industry's standard the 1500s, when an unknown
            </p>

            <div className="list-item">
              <div className="pill-boxx">
                <span className="circ-icon">○</span> 100% Natural Product
              </div>
              <p className="item-desc">
                Simply dummy text of the printing and typesetting industry Lorem Ipsum
              </p>
            </div>

            <div className="list-item">
              <div className="pill-boxx">
                <span className="circ-icon">○</span> Increases resistance
              </div>
              <p className="item-desc">
                Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing
              </p>
            </div>
          </div>

          <div className="imag-side">
            <img 
              src={deb}
              alt="uoz_card" 
              className="side-imag" 
            />
          </div>
        </div>

        <div className="card-grid">
          <div className="sing-card">
            <div className="icon-wrap"><IoBagAddSharp />
            </div>
            <h3 className="card-titl">Return Policy</h3>
            <p className="card-text">Simply dummy text of the printintypesetting industry.</p>
          </div>

          <div className="sing-card">
            <div className="icon-wrap"><SiCodefresh />
            </div>
            <h3 className="card-titl">100% Fresh</h3>
            <p className="card-text">Simply dummy text of the printintypesetting industry.</p>
          </div>

          <div className="sing-card">
            <div className="icon-wrap"><IoIosTime />
            </div>
            <h3 className="card-titl">Support 24/7</h3>
            <p className="card-text">Simply dummy text of the printintypesetting industry.</p>
          </div>

          <div className="sing-card">
            <div className="icon-wrap"><MdPayment />
            </div>
            <h3 className="card-titl">Secured Payment</h3>
            <p className="card-text">Simply dummy text of the printintypesetting industry.</p>
          </div>
        </div>

      </div>
    </section>
    <section className="te10-se20">
      <div className="co11-ai22">

        <div className="he12-ad23">
          <h4 className="su13-ti24">Team</h4>
          <h1 className="ma14-ti25">Our Organic Experts</h1>
          <p className="de15-sc26">
            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley.
          </p>
        </div>

        <div className="gr16-id27">
          
          <div className="ca17-rd28">
            <img src={qora} alt="uoz_card" className="im18-ag29" />
            <div className="in19-fo30">
              <div className="na20-me31">
                <h3>Giovani Bacardo</h3>
                <span>Farmer</span>
              </div>
              <div className="so21-ci32">
                <span><FaFacebookSquare />
                </span> <span><FaTelegram />
                </span>
              </div>
            </div>
          </div>

          <div className="ca17-rd28">
            <img src={oq} alt="uoz_card" className="im18-ag29" />
            <div className="in19-fo30">
              <div className="na20-me31">
                <h3>Marianne Loreno</h3>
                <span>Designer</span>
              </div>
              <div className="so21-ci32">
                <span><FaSquareInstagram />
                </span> <span><FaFacebookSquare />
                </span> <span><FaTelegram />
                </span>
              </div>
            </div>
          </div>
          <div className="ca17-rd28">
            <img src={sariq} alt="uoz_card" className="im18-ag29" />
            <div className="in19-fo30">
              <div className="na20-me31">
                <h3>Riga Pelore</h3>
                <span>Farmer</span>
              </div>
              <div className="so21-ci32">
                <span><FaSquareInstagram />
                </span> <span><FaFacebookSquare />
                </span> <span><FaTelegram />
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="of00-se11">
      <div className="in22-co33">
        
        <div className="te44-he55">
          <h4 className="su66-ti77">About Us</h4>
          <h1 className="ma88-ti99">What We Offer for You</h1>
        </div>
        <div className="pr11-gr22">
          
          <div className="ca33-it44">
            <div className="im55-bo66">
              <img src={j1} alt="uoz_card" className="of77-im88" />
            </div>
            <h3 className="la99-te00">Spicy</h3>
          </div>

          <div className="ca33-it44">
            <div className="im55-bo66">
              <img src={j2} alt="uoz_card" className="of77-im88" />
            </div>
            <h3 className="la99-te00">Nuts & Feesd</h3>
          </div>

          <div className="ca33-it44">
            <div className="im55-bo66">
              <img src={j3} alt="uoz_card" className="of77-im88" />
            </div>
            <h3 className="la99-te00">Fruits</h3>
          </div>

          <div className="ca33-it44">
            <div className="im55-bo66">
              <img src={j4} alt="uoz_card" className="of77-im88" />
            </div>
            <h3 className="la99-te00">Vegetable</h3>
          </div>

        </div>
      </div>
    </section>
    <footer className="ppppastaaa">
    <Newslatter/>
    <Footer />
            </footer>

       </>
    )
}

export default About;