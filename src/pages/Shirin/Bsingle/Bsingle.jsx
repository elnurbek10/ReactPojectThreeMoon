import './Bsingle.css';
import Navbar from '../../../Components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import Newslatter from '../../../Components/Newslatteer/Newslatter';
import { Data } from '../../../../data';
import { IoPersonSharp } from "react-icons/io5";
function Bsingle() {
  let res = useParams()
 let single = Data.blog.find((item)=> item.id == res.id)
  return (
    <main>
      <Navbar/>
   

    {
   <section className='section-bs'>
          <div className="bdiv-1">
    <b>Posted On:
January 6, 2022  <IoPersonSharp className='person' />  {single.name.slice(0,10)}...</b>
<h1>{single.name}</h1>
<p>Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed  </p>
</div>
      <img className='bsingle-img' src={single.img} alt="" />

      </section>
    }

      <section className='section-bsingle'>
<p>Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology.</p>
<h1>Preferred Form of Vitamin D?</h1>
<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
<ul>
  <li> Publishing packages and web pageLorem Ipsum as their default</li>
  <li> Content here, content here', making it look like readable</li>
  <li> Packages and web pageLorem Ipsum as their default</li>
  </ul>
  <div>
    <b>
      “The first rule of any organic used in a business is that nature applied to an efficient operation will magnify the efficiency. The second is that organic applied to an inefficient operation will magnify the health.”
    </b>
      </div>
    <h1>Make perfect organic product with us</h1>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
 <ol>
  <li> Publishing packages and web pageLorem Ipsum as their default</li>
  <li> Content here, content here', making it look like readable</li>
  <li> Packages and web pageLorem Ipsum as their default</li>
  <li> more-or-less normal distribution of letters</li>
 </ol>


      </section>
     <Newslatter/>
    </main>
  );
}

export default Bsingle;