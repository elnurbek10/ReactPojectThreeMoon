import './service.css'
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'

function Service(){
    const data = [
        { title: "Dairy Products", icon: "🥛", side: "le" },
        { title: "Store Services", icon: "🏪", side: "le" },
        { title: "Delivery Services", icon: "🚚", side: "le" },
        { title: "Agricultural Services", icon: "🌱", side: "ri" },
        { title: "Organic Products", icon: "📦", side: "ri" },
        { title: "Fresh Vegetables", icon: "🥬", side: "ri" },
      ];
    return(
        <>
        <Navbar/>
        <div className="oqa">
      <div className="ras">
        <h1 className="xiz">Services</h1>
      </div>
<br /><br />
      <div className="mat">
        <p className="uzm">What we Grow</p>
        <h2 className="kel">
          Better Agriculture for <br />
          Better Future
        </h2>
      </div>
    </div>
    <div className="bg">
      <div className="cn">
        {/* Chap tomondagi ustun */}
        <div className="co">
          {data.filter(i => i.side === "le").map((item, idx) => (
            <div key={idx} className="it">
              <span className="ic">{item.icon}</span>
              <h3 className="ti">{item.title}</h3>
              <p className="tx">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
            </div>
          ))}
        </div>

        {/* Markaziy rasm */}
        <div className="im"></div>

        {/* O'ng tomondagi ustun */}
        <div className="co">
          {data.filter(i => i.side === "ri").map((item, idx) => (
            <div key={idx} className="it">
              <span className="ic">{item.icon}</span>
              <h3 className="ti">{item.title}</h3>
              <p className="tx">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
            </div>
          ))}
        </div>
      </div>
      
      <button className="bt">Explore More →</button>
    </div>

    <section className="he">
      <div className="ct">
        <span className="su">Organic Only</span>
        <h1 className="tt">Everyday Fresh & Clean</h1>
        <p className="ds">
          Simply dummy text of the printing and typesetting industry. Lorem had ceased 
          to been the industry's standard dummy text ever since the
        </p>
        <button className="pl">
          <div className="tr"></div>
        </button>
      </div>
    </section>
    <Footer/>
        </>
    )
}

export default Service;