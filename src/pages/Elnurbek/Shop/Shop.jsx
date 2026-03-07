import { Link, useNavigate } from 'react-router-dom'; 
import React, { useState, useEffect } from 'react'; 
import Aos from "aos"
import 'aos/dist/aos.css';
import "./shop.css"
import l from "../../../assets/l.svg";
import brok from '../../../assets/broklyn.svg'
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
import Navbar from '../../../Components/Navbar/Navbar'

const Shop = () => {
    const navigate = useNavigate(); 

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const [eee_pochta, sss_setPochta] = useState('');
    let [serch, setSearch] = useState("");

    const jjj_jonatish = (e) => {
        e.preventDefault();
        const mmm_malumot = {
            email: eee_pochta,
            vaqt: new Date().toLocaleString(),
            holat: "Yangi obunachi"
        };
        console.log("Saqlangan obyekt:", mmm_malumot);
        sss_setPochta('');
        alert("Rahmat Ma'lumot logga saqlandi.");
    };

 
    const handleCardClick = (product) => {

      navigate(`/single`, { state: { product } });
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
        <>
            <Navbar />

            {serch.length === 0 && (
                <div className="banana">
                    <h1>Shop</h1>
                </div>
            )}

            <div className="AsosiyYy">
                <div className="SaHiFaH">
                    {mahsulotlar.filter((item) => item.nom.toLowerCase().includes(serch.toLocaleLowerCase())).map((item) => (
                        <div 
                            key={item.id} 
                            className="KaRtOcK" 
                            onClick={() => handleCardClick(item)} 
                            style={{ cursor: 'pointer' }}
                        >
                            <span className="TuRrRfF">{item.tur}</span>
                            <div className="SuRaTtt">
                                <img src={item.img} alt={item.nom} />
                            </div>
                            <div className="MaTnlArR">
                                <h3 className="NoMiIiI">{item.nom}</h3>
                                <div className="PaStKii">
                                    <div className="NaRxlArR">
                                        <span className="EsKiNnN">{item.eskiNarx}</span>
                                        <span className="YaNgInN">{item.narx}</span>
                                    </div>
                                    <div className="YuLdUzZ">
                                        {"★".repeat(item.yulduz)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="ppppastaaa">
                <section className="ooobunaaa" data-aos="flip-up">
                    <h2 className="yyyozuvvv">Subscribe to our Newsletter</h2>
                    <form className="iiichkkk" onSubmit={jjj_jonatish}>
                        <input
                            type="email"
                            className="kkkirishhh"
                            placeholder="Email..."
                            value={eee_pochta}
                            onChange={(e) => sss_setPochta(e.target.value)}
                            required
                        />
                        <button type="submit" className="tttugmaaa">Subscribe</button>
                    </form>
                </section>
                <div className="ppaayyoonnaatt" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className="uustuunn">
                        <h3>Contact Us</h3>
                        <p>Email: help@organia.com</p>
                        <p>Phone: 666 888 888</p>
                    </div>
                    <div className="uustuunn_oorrttaa">
                        <h2>Organick</h2>
                        <p>Simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="uustuunn">
                        <h3>Utility Pages</h3>
                        <ul><li>Style Guide</li><li>404 Not Found</li><li>Licences</li></ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Shop;