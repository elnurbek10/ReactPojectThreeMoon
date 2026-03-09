import './Bsingle.css';
import Navbar from '../../../Components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import Newslatter from '../../../Components/Newslatteer/Newslatter';
import { Data } from '../../../../data';
import { IoPersonSharp } from "react-icons/io5";
import Footer from '../../../Components/Footer/Footer';

function Bsingle() {
  const { id } = useParams();

  // blog arrayidan id bo‘yicha topamiz
  const single = Data.blog.find((item) => item.id == id);

  // agar topilmasa fallback
  if (!single) {
    return (
      <main>
        <Navbar />
        <section style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Blog topilmadi!</h2>
          <p>Ushbu blog mavjud emas yoki noto‘g‘ri ID kiritilgan.</p>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />

      <section className='section-bs'>
        <div className="bdiv-1">
          <h1>{single.name}</h1>
          <p>
            Established fact that a reader will be distracted by the readable content of a page when looking a layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.
          </p>
        </div>
        <img className='bsingle-img' src={single.img} alt={single.name} />
      </section>

      <section className='section-bsingle'>
        <p>
          Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology.
        </p>

        <h1>Preferred Form of Vitamin D?</h1>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
        </p>
        <ul>
          <li>Publishing packages and web page Lorem Ipsum as their default</li>
          <li>Content here, content here, making it look like readable</li>
          <li>Packages and web page Lorem Ipsum as their default</li>
        </ul>

        <div>
          <b>
            “The first rule of any organic used in a business is that nature applied to an efficient operation will magnify the efficiency. The second is that organic applied to an inefficient operation will magnify the health.”
          </b>
        </div>

        <h1>Make perfect organic product with us</h1>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
        </p>
        <ol>
          <li>Publishing packages and web page Lorem Ipsum as their default</li>
          <li>Content here, content here, making it look like readable</li>
          <li>Packages and web page Lorem Ipsum as their default</li>
          <li>More-or-less normal distribution of letters</li>
        </ol>
      </section>

      <Newslatter />
      <Footer />
    </main>
  );
}

export default Bsingle;