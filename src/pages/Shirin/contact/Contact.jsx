import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Aos from "aos";
import 'aos/dist/aos.css';
import "./Contact.css";
import bas from "../../../assets/bas.svg";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { Fa500Px } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import Navbar from '../../../Components/Navbar/Navbar'
import New from '../../../Components/Newslatteer/Newslatter'
import Footer from '../../../Components/Footer/Footer'


const Contact = () => {

    const [serch, setSearch] = useState("");

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);


    const [f10, setF10] = useState({
        n11: '',
        e12: '',
        c13: '',
        s14: '',
        m15: ''
    });

    const h16 = async (e) => {
        e.preventDefault();

        try {
            const r17 = await fetch('http://localhost:3001/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(f10)
            });

            if (r17.ok) {
                alert("Ma'lumot db.json ga saqlandi!");
                setF10({ n11: '', e12: '', c13: '', s14: '', m15: '' });
                e.target.reset();
            }
        } catch (err) {
            console.error("Xato:", err);
            alert("Xatoni togrila😂😂");
        }
    };

    const i18 = (e) => {
        const { name, value } = e.target;
      
        setF10({ ...f10, [name]: value });
    };

    const [eee_pochta, sss_setPochta] = useState('');

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const jjj_jonatish = (e) => {
        e.preventDefault();
        const mmm_malumot = {
            email: eee_pochta,
            vaqt: new Date().toLocaleString(),
            holat: "Yangi obunachi"
        };
        console.log("Saqlangan obyekt:", mmm_malumot);
        sss_setPochta('');
        alert("Rahmat! Ma'lumot logga saqlandi.");
    };
    return (
        <>
            <Navbar/>

            {serch.length === 0 && (
                <div className="banana">
                    <h1>Contact Us</h1>
                </div>

            )}

            <div className="c10">
                <div className="i11">
                    <img
                        src={bas}
                        alt="f1"
                        className="m12"
                    />
                </div>

                <div className="t13">
                    <h1 className="h14">We'd love to talk about how we can work together.</h1>
                    <p className="p15">
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                        been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley.
                    </p>

                    <div className="b16">
                        <div className="ic17">
                            <span className="s18">✉️</span>
                        </div>
                        <div className="tx19">
                            <h4 className="m20">Massege</h4>
                            <p className="e21">support@organic.com</p>
                        </div>
                    </div>

                    <div className="b16">
                        <div className="ic17">
                            <span className="s18">📞</span>
                        </div>
                        <div className="tx19">
                            <h4 className="m20">Contact Us</h4>
                            <p className="e21">+01 123 456 789</p>
                        </div>
                    </div>

                    <div className="s22">
                        <div className="i23"><FaTwitterSquare />
                        </div>
                        <div className="i23"><FaSquareInstagram />
                        </div>
                        <div className="i23"><FaTelegram />
                        </div>
                        <div className="i23"><Fa500Px />
                        </div>
                    </div>
                </div>
            </div>


            <div className="farm_a">
                <div className="site_a">
                    <span className="head_a">Location</span>
                    <h2 className="titl_a">Our Farms</h2>
                    <p className="text_a">
                        Established fact that a reader will be distracted by the readable content of a page when looking a layout.
                    </p>
                    <div className="list_a">
                        <div className="loca_a">
                            <div className="icon_a">📍</div>
                            <div className="desc_a">
                                <strong>New York, USA:</strong><br />
                                299 Park Avenue New York, New York 10171
                            </div>
                        </div>
                        <div className="loca_a">
                            <div className="icon_a">📍</div>
                            <div className="desc_a">
                                <strong>London, UK:</strong><br />
                                30 Stamford Street, London SE1 9LQ
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="c20">
                <form onSubmit={h16} className="f21">
                    <div className="r22">
                        <div className="g23">
                            <label className="l24">Full Name*</label>
                            <input type="text" name="n11" className="i25" placeholder="Your Email Address" onChange={i18} required />
                        </div>
                        <div className="g23">
                            <label className="l24">Your Email*</label>
                            <input type="email" name="e12" className="i25" placeholder="example@yourmail.com" onChange={i18} required />
                        </div>
                    </div>

                    <div className="r22">
                        <div className="g23">
                            <label className="l24">Company*</label>
                            <input type="text" name="c13" className="i25" placeholder="yourcompany name here" onChange={i18} required />
                        </div>
                        <div className="g23">
                            <label className="l24">Subject*</label>
                            <input type="text" name="s14" className="i25" placeholder="how can we help" onChange={i18} required />
                        </div>
                    </div>

                    <div className="g23">
                        <label className="l24">Message*</label>
                        <textarea name="m15" className="t26" placeholder="hello there,i would like to talk about how to..." onChange={i18} required></textarea>
                    </div>

                    <button type="submit" className="b27">Send Message</button>
                </form>
            </div>

            <footer className="ppppastaaa">
                <New/>
            <Footer/>
            </footer>
        </>
    );
}

export default Contact;