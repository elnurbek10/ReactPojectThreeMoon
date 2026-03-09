import './Blog.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Banner from '../../../Components/Banner/Banner';
import Newslatter from '../../../Components/Newslatteer/Newslatter';
import { Data } from '../../../../data';
import date from '../../../assets/Date (1).png'
import { IoMdPerson } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Footer from '../../../Components/Footer/Footer';
function Blog() {
  let navigate = useNavigate()
  
  let res = Data.blog
  return (
    <main>
     <Navbar/>
     <Banner string="Recent News" clas={"blog-banner"} />
<section className="section-blog">
  {
    res.map((e)=>(
      <div className='flaw' key={e.id}  onClick={() => navigate(`/bsingle/${e.id}`)}>
        <div className={`${e.className } card-b`} >
          <img src={date} alt="" />
             <div className='blog-2'>
      <b><IoMdPerson color='green' />By Rachi Card</b>
<h1>{e.name}</h1>
<p className='b-p1'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
<h3><p>Read More</p><FaArrowRightLong /></h3>
        </div>
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

export default Blog;