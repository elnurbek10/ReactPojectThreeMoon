import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import './organik.css';
import Footer from '../../../Components/Footer/Footer'
import Navbar from '../../../Components/Navbar/Navbar';
import Newslatter from '../../../Components/Newslatteer/Newslatter';


import l from '../../../assets/l.svg';
import s from '../../../assets/s.svg';
import brok from '../../../assets/broklyn.svg';
import ba from '../../../assets/ba.svg';
import ps from '../../../assets/ps.svg';
import po from '../../../assets/po.svg';
import pa from '../../../assets/pa.svg';
import pi from '../../../assets/pi.svg';
import pt from '../../../assets/pt.svg';
import pn from '../../../assets/pn.svg';
import sara from '../../../assets/sara.svg';
import zz from '../../../assets/zz.svg';
import zzz from '../../../assets/zzz.svg';
import zzzz from '../../../assets/zzzz.svg';
import t from '../../../assets/t.svg';
import t1 from '../../../assets/t1.svg';
import t2 from '../../../assets/t2.svg';
import t3 from '../../../assets/t3.svg';

function Organik() {
    const items = [
        { id: 1, type: 'Vegetable', name: 'Calabrese Broccoli', old: '$20.00', new: '$13.00', img: brok },
        { id: 2, type: 'Fresh', name: 'Fresh Banana Fruites', old: '$20.00', new: '$14.00', img: ba },
        { id: 3, type: 'Millets', name: 'White Nuts', old: '$20.00', new: '$15.00', img: ps },
        { id: 4, type: 'Vegetable', name: 'Vegan Red Tomato', old: '$20.00', new: '$17.00', img: po },
        { id: 5, type: 'Health', name: 'Mung Bean', old: '$20.00', new: '$11.00', img: pa },
        { id: 6, type: 'Nuts', name: 'Brown Hazelnut', old: '$20.00', new: '$12.00', img: pi },
        { id: 7, type: 'Fresh', name: 'Eggs', old: '$20.00', new: '$17.00', img: pt },
        { id: 8, type: 'Fresh', name: 'Zelco Suji Elaichi Rusk', old: '$20.00', new: '$15.00', img: pn },
    ];

    const [email, setEmail] = useState('');

    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log("Saqlangan obekt:", {
            email,
            time: new Date().toLocaleString(),
            status: "subscriber"
        });
        setEmail('');
        alert("Ma'lumot saqlandi.");
    };

    return (
        <>
          <Navbar />
            <div className="outer">
              

                <section className="kat">
                    <div className="ich">
                        <p className="yash">100% Natural Food</p>
                        <h1 className="sar">Choose the best healthier way of life</h1>
                        <Link to="/found" className="tug">
                            Explore Now <span className="str">→</span>
                        </Link>
                    </div>
                </section>

                <section className="pas">
                    <div className="pus" data-aos="flip-left">
                        <p className="tab">Natural!!</p>
                        <h2 className="mat">Get Garden Fresh Fruits</h2>
                    </div>
                    <div className="kul" data-aos="flip-right">
                        <p className="che">Offer!!</p>
                        <h2 className="mat">Get 10% off on Vegetables</h2>
                    </div>
                </section>

                <section className="biz">
                    <div className="ras">
                        <img src={s} alt="About Us" />
                    </div>
                    <div className="mal">
                        <p className="yash">About Us</p>
                        <h2 className="sar-2">We Believe in Working Accredited Farmers</h2>
                        <p className="mat-k">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s.</p>

                        <div className="inf">
                            <div className="ico">🥣</div>
                            <div>
                                <h4>Organic Foods Only</h4>
                                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            </div>
                        </div>

                        <div className="inf">
                            <div className="ico">✉️</div>
                            <div>
                                <h4>Quality Standards</h4>
                                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            </div>
                        </div>

                        <Link to="/shop" className="tug-2">
                            Shop Now <span className="str">→</span>
                        </Link>
                    </div>
                </section>

                <section className="prods">
                    <p className="categ">Categories</p>
                    <h2 className="title">Our Products</h2>

                    <div className="grids">
                        {items.map((item) => (
                            <div key={item.id} className="cards" data-aos="fade-up">
                                <div className="tagss">{item.type}</div>
                                <div className="photo">
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <h4 className="names">{item.name}</h4>
                                <div className="lines"></div>
                                <div className="price">
                                    <div className="costs">
                                        <span className="olds">{item.old}</span>
                                        <span className="news">{item.new}</span>
                                    </div>
                                    <div className="stars">⭐⭐⭐⭐⭐</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="loadm">
                    <Link to="/shop" className="tug-2">
                            Load More
                        </Link><span className="arrow">→</span>
                    </button>
                </section>
            </div>

            <div className="all">
                <section className="otz">
                    <p className="zag">Testimonial</p>
                    <h2 className="glv">What Our Customer Saying?</h2>

                    <div className="usr">
                        <img src={sara} alt="Sara Taylor" />
                        <p className="tst">
                            Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy
                            text of the printing and typesetting industry.
                        </p>
                        <h4 className="nam">Sara Taylor</h4>
                        <p className="rol">Consumer</p>
                        <div className="dot"><span></span><span className="act"></span><span></span></div>
                    </div>

                    <div className="lin"></div>

                    <div className="cnt">
                        <div className="itn">
                            <div className="kru"> 
                                <CountUp start={0} end={100} duration={3} suffix="%" />
                                <p>Organic</p>
                            </div>
                        </div>
                        <div className="itn">
                            <div className="kru"> 
                                <CountUp start={0} end={285} duration={3} />
                                <p>Active Product</p>
                            </div>
                        </div>
                        <div className="itn">
                            <div className="kru">
                                <CountUp start={0} end={385} duration={3} suffix="+" />
                                <p>Organic Orchards</p>
                            </div>
                        </div>
                        <div className="itn">
                            <div className="kru">
                                <CountUp start={0} end={25} duration={3} suffix="+" />
                                <p>Years of Farming</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ofm">
                    <div className="top">
                        <div>
                            <p className="zag">Offer</p>
                            <h2 className="glw">We Offer Organic For You</h2>
                        </div>
                        <button className="btn">View All Product <span>→</span></button>
                    </div>

                    <div className="grd">
                        {[
                            { tag: 'Vegetable', name: 'Mung Bean', old: '$20.00', new: '$11.00', img: brok },
                            { tag: 'Vegetable', name: 'Brown Hazelnut', old: '$20.00', new: '$12.00', img: zz },
                            { tag: 'Vegetable', name: 'Onion', old: '$20.00', new: '$17.00', img: zzz },
                            { tag: 'Vegetable', name: 'Cabbage', old: '$20.00', new: '$17.00', img: zzzz },
                        ].map((el, i) => (
                            <div key={i} className="krt" data-aos="zoom-in">
                                <div className="tg3">{el.tag}</div>
                                <img src={el.img} alt={el.name} className="pic" />
                                <h4 className="tit">{el.name}</h4>
                                <div className="prc">
                                    <span className="skd">{el.old}</span>
                                    <span className="now">{el.new}</span>
                                    <span className="zvd">⭐⭐⭐⭐⭐</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <div className="asos1">
                <section className="ekol1">
                    <div className="rasm1">
                        <img src={t} alt="Organik dala" className="foto1" />
                    </div>
                    <div className="matn1">
                        <p className="yash1">Eco Friendly</p>
                        <h2 className="sarl1">Econis is a Friendly Organic Store</h2>
                        <div className="blok1">
                            <h4 className="kich1">Start with Our Company First</h4>
                            <p className="izoh1">Sed ut perspiciatis unde omnis iste natus error sit voluptat.</p>
                        </div>
                        <div className="blok1">
                            <h4 className="kich1">Learn How to Grow Yourself</h4>
                            <p className="izoh1">Sed ut perspiciatis unde omnis iste natus error sit voluptat.</p>
                        </div>
                        <div className="blok1">
                            <h4 className="kich1">Farming Strategies of Today</h4>
                            <p className="izoh1">Sed ut perspiciatis unde omnis iste natus error sit voluptat.</p>
                        </div>
                    </div>
                </section>

                <section className="gall1">
                    <div className="uyma1">
                        <div className="kart1" data-aos="fade-right">
                            <img src={t1} alt="Organic Juice" className="rasm2" />
                            <div className="oqly1">Organic Juice</div>
                        </div>
                        <div className="kart1" data-aos="fade-up">
                            <img src={t2} alt="Organic Food" className="rasm2" />
                            <div className="oqly1">Organic Food</div>
                        </div>
                        <div className="kart1" data-aos="fade-left">
                            <img src={t3} alt="Nuts Cookies" className="rasm2" />
                            <div className="oqly1">Nuts Cookies</div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="yangilikkk">
                <div className="tepaaa">
                    <div className="sarlavhaaa">
                        <p className="kichikkk">News</p>
                        <h2 className="kattaaa">Discover weekly content about organic food</h2>
                    </div>
                    <button className="tugmaaa">More News <span>→</span></button>
                </div>
                <div className="qatorrr">
                    <div className="blokkk" data-aos="fade-up">
                        <div className="rasmmm rasm111">
                            <div className="sanannn"><span>25</span><span>Nov</span></div>
                        </div>
                        <div className="ichkkk">
                            <div className="muallifff">👤 By Rachi Card</div>
                            <h4 className="nommmm">The Benefits of Vitamin D</h4>
                            <p className="matnnn">Simply dummy text of the printing industry.</p>
                            <button className="oqishhh">Read More <span>→</span></button>
                        </div>
                    </div>
                    <div className="blokkk" data-aos="fade-up" data-aos-delay="200">
                        <div className="rasmmm rasm222">
                            <div className="sanannn"><span>25</span><span>Nov</span></div>
                        </div>
                        <div className="ichkkk">
                            <div className="muallifff">👤 By Rachi Card</div>
                            <h4 className="nommmm">Our Favourite Summertime Tomato</h4>
                            <p className="matnnn">Simply dummy text of the printing industry.</p>
                            <button className="oqishhh">Read More <span>→</span></button>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="ppppastaaa">
               <Newslatter/>
                <Footer />
            </footer>
        </>
    );
}

export default Organik;