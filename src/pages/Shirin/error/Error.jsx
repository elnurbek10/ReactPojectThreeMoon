import './Error.css'
import Navbar from '../../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom';
import Newsletter from '../../../Components/Newslatteer/Newslatter'
function Error(){
    return(
        <>
        <Navbar/>
        <section className="section-17">
            <h1 className='e404'>404</h1>
            <h1 className='page-not-f'>Page not found</h1>
            <p>The page you are looking for doesn't exist or has been moved</p>
            <button><Link className='link' to="/"><p className='link-p'>Go to Homepage &rarr;</p></Link></button>
        </section>
       <Newsletter/>
        </>
    )
}
export default Error;