import './Psingle.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Newslatter from '../../../Components/Newslatteer/Newslatter';
import { Data } from '../../../../data';
import { useParams } from 'react-router-dom';
import img18 from '../../../assets/Photo (18).png'
import Footer from '../../../Components/Footer/Footer';
function Psingle() {
    let res = useParams()
    let single = Data.cards.find((item)=> item.id == res.id)
  return (
    <>
      <Navbar/>
            <div className="P-absolute-1">
<div className="Adiv-1">
<h1>{single.name}</h1>
<p>Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
</div>
<div className="Adiv-2">
<div><b>Date     : </b><p>December 4, 2022</p></div>
<div><b>Client   : </b><p>Kevin Martin</p></div>
<div><b>Category : </b><p>Agriculture , Eco</p></div>
<div><b>Service  :</b><p>Organic Products</p></div>
</div>
      </div>
     <img src={single.img2} alt="" className='Psingle-banner' />
<section className="P-sect1">
  <div>
<h1>About The Farm:</h1>
<p>it is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
<p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
<div>
<img src={img18} alt="" />
<p>The Organic Products</p>
</div>


<h1>How To Farm:</h1>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
<p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
<h1>Conclusion:</h1>
<p>it is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
<p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
  </div>

</section>
      <Newslatter/>
      <Footer/>
    </>
  );
}

export default Psingle;