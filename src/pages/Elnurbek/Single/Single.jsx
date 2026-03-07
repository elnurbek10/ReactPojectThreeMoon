import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../../Components/Navbar/Navbar';
import './Single.css';
import l from "../../../assets/l.svg";
import brok from '../../../assets/broklyn.svg';
import ba from '../../../assets/ba.svg';
import ps from '../../../assets/ps.svg';
import po from '../../../assets/po.svg';
import pa from '../../../assets/pa.svg';
import pi from '../../../assets/pi.svg';
import pt from '../../../assets/pt.svg';
import pn from '../../../assets/pn.svg';
import b1 from '../../../assets/b1.svg';
import b2 from '../../../assets/b2.svg';
import b3 from '../../../assets/b3.svg';
import b4 from '../../../assets/b4.svg';
import Newslatter from '../../../Components/Newslatteer/Newslatter'
import Footer from '../../../Components/Footer/Footer'


const Single = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('desc');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) return <div className="not-found">Mahsulot topilmadi...</div>;

  const handleCardClick = (item) => {
    navigate(`/single`, { state: { product: item } });
  };

  const mahsulotlar = [
    { id: 1, tur: 'Vegetable', nom: 'Calabrese Broccoli', eskiNarx: '$20.00', narx: '$13.00', yulduz: 5, img: brok },
    { id: 2, tur: 'Fresh', nom: 'Fresh Banana Fruites', eskiNarx: '$20.00', narx: '$14.00', yulduz: 5, img: ba },
    { id: 3, tur: 'Millets', nom: 'White Nuts', eskiNarx: '$20.00', narx: '$15.00', yulduz: 5, img: ps },
    { id: 4, tur: 'Vegetable', nom: 'Vegan Red Tomato', eskiNarx: '$20.00', narx: '$17.00', yulduz: 5, img: po },
    { id: 5, tur: 'Health', nom: 'Mung Bean', eskiNarx: '$20.00', narx: '$11.00', yulduz: 5, img: pa },
    { id: 6, tur: 'Nuts', nom: 'Brown Hazelnut', eskiNarx: '$20.00', narx: '$12.00', yulduz: 5, img: pi },
    { id: 7, tur: 'Fresh', nom: 'Eggs', eskiNarx: '$20.00', narx: '$17.00', yulduz: 5, img: pt },
    { id: 8, tur: 'Fresh', nom: 'Zelco Suji Elaichi Rusk', eskiNarx: '$20.00', narx: '$15.00', yulduz: 5, img: pn },
    { id: 9, tur: 'Health', nom: 'Mung Bean', eskiNarx: '$20.00', narx: '$11.00', yulduz: 5, img: b1 },
    { id: 10, tur: 'Nuts', nom: 'White Hazelnut', eskiNarx: '$20.00', narx: '$12.00', yulduz: 5, img: b2 },
    { id: 11, tur: 'Fresh', nom: 'Fresh Corn', eskiNarx: '$20.00', narx: '$17.00', yulduz: 5, img: b3 },
    { id: 12, tur: 'Fresh', nom: 'Organic Almonds', eskiNarx: '$20.00', narx: '$15.00', yulduz: 5, img: b4 },
  ];
  return (
    <div className="single-page">
      <Navbar />

      <div className="container">
        <div className="product-main">
          <div className="product-image-side">
            <span className="category-badge">{product.tur}</span>
            <img src={product.img} alt={product.nom} />
          </div>

          <div className="product-info-side">
            <h1 className="product-title">{product.nom}</h1>
            <div className="rating-stars">{"★".repeat(5)}</div>
            <div className="price-box">
              <span className="old-price">{product.eskiNarx}</span>
              <span className="current-price">{product.narx}</span>
            </div>
            <p className="description">Simply dummy text of the printing and typesetting industry...</p>
            <div className="order-actions">
              <div className="quantity-control">
                <span>Quantity :</span>
                <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} />
              </div>
              <button className="add-cart-btn">Add To Cart ➔</button>
            </div>
          </div>
        </div>

        <div className="tabs-wrapper">
          <div className="tab-buttons">
            <button className={activeTab === 'desc' ? 'active' : ''} onClick={() => setActiveTab('desc')}>Product Description</button>
            <button className={activeTab === 'info' ? 'active' : ''} onClick={() => setActiveTab('info')}>Additional Info</button>
          </div>
          <div className="tab-content">
            {activeTab === 'desc' ? <p>Welcome to the world of natural...</p> : <p>Additional information...</p>}
          </div>
        </div>

        <div className="AsosiyYy">
          <h2 style={{ textAlign: 'center', margin: '50px 0', color: '#274C5B' }}>Related Products</h2>
          <div className="SaHiFaH">
            {mahsulotlar.slice(0, 4).map((item) => (
              <div key={item.id} className="KaRtOcK" onClick={() => handleCardClick(item)} style={{ cursor: 'pointer' }}>
                <span className="TuRrRfF">{item.tur}</span>
                <div className="SuRaTtt"><img src={item.img} alt={item.nom} /></div>
                <div className="MaTnlArR">
                  <h3 className="NoMiIiI">{item.nom}</h3>
                  <div className="PaStKii">
                    <div className="NaRxlArR">
                      <span className="EsKiNnN">{item.eskiNarx}</span>
                      <span className="YaNgInN">{item.narx}</span>
                    </div>
                    <div className="YuLdUzZ">{"★".repeat(item.yulduz)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Newslatter/>
<Footer/>
    </div>
    

  
  );
};

export default Single;