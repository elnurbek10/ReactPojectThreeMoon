import './License.css';
import Banner from '../../../Components/Banner/Banner';
import Navbar from '../../../Components/Navbar/Navbar';
import Newslatter from '../../../Components/Newslatteer/Newslatter';
import Footer from '../../../Components/Footer/Footer';
function License() {
  return (
    <main>
      <Navbar/>
      <Banner string={"Licenses"} clas={'licenses-banner'}/>
     <section className="section-licenses">
      <div>
        <h1>Icon & Graphics</h1>
        <div>
          <p>Icons and Graphics are manually designed by the VictorFlow Templates team. You may download these and edit them to fit your website without asking for permission or providing credit.

</p>

          <p>Upon purchasing Software UI Kit Template our team grants you a nonexclusive, worldwide copyright license to download, copy, modify, and use the icons.</p>
        </div>
      </div>
     <div>
      <h1>Photography</h1>
      <div><p>All images used in the Organick Webflow Template are licensed for free personal and commercial use. If you'd like to use any specific image, you can check the licenses and download the images for free on Unsplash, Pexels‍. And Freepik.</p>
      <h1>Unsplash</h1>
      <p>Image 1,  Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17, Image 18, Image 19, Image 20, Image 21, Image 22, Image 23, Image 24, Image 25,</p>
     <h1>Pixcel</h1>
     <p>Image 1,  Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image 15, Image 16, Image 17, </p>

      </div>
     </div>
     <div>
      <h1>Font</h1>
      <div>
      <p> Organick template uses free licensed Google Fonts. Please check <big>Roboto, Yellowtail </big> 
 and <big>Open Sans.</big> </p> 
      </div>
     </div>
    </section> 
    <Newslatter/>
<Footer/>
    </main>
  );
}

export default License;