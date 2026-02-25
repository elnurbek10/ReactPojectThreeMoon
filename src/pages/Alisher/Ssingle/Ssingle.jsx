import './Ssingle.css';
import Navbar from '../../../Components/Navbar/Navbar'
import Banner from '../../../Components/Banner/Banner';
import Newslatter from '../../../Components/Newslatteer/Newslatter';
import mainimg from '../../../assets/Photo (17).png'
import s1 from '../../../assets/ss-card1.png'
import s2 from '../../../assets/ss2-card1.png'
import photo from '../../../assets/photo.png'
import photo2 from '../../../assets/photo2.png'
function Ssingle() {
  return (
    <main className='ss-main'>
      <Navbar />
      <Banner string="Quality Standard" clas="ssingle-banner" />
      <section className="s-single-section-1">
        <img className='main-img' src={mainimg} alt="" />
        <div className="main-div">
          <div className="main1-div">
            <h1 className='h1-1'>Organic Store Services</h1>
            <p className='p1'>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              <br /> <br />
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>

          </div>
          <div className="main2-div">
            <div className='main2-div-1'>
              <img src={s1} alt="" />
              <div>
                <h3>Why Organic</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
              </div>
            </div>
            <div className='main2-div-1'>
              <div >
                <h3>Speciality Produce</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
              </div>
              <img src={s2} alt="" />
            </div>
            <div className='main2-div-2'>
              <h1 className='main2-div-h1'>
We farm your land
              </h1>
              <p className='main2-div-p'>
It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </p>
            </div>
            <div className="main2-div-3">
<img src={photo} alt="" />
<img src={photo2} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Newslatter />
    </main>
  );
}

export default Ssingle;