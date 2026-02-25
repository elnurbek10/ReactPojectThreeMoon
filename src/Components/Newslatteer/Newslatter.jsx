import './Newslatter.css';

function Newslatter() {
  return (
    <>
        <footer className="ppppastaaa">
                <section className="ooobunaaa" data-aos="zoom-in">
                    <h2 className="yyyozuvvv">Subscribe to our Newsletter</h2>
                    <form className="iiichkkk" onSubmit={handleSubscribe}>
                        <input
                            type="email"
                            className="kkkirishhh"
                            placeholder="Your Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="tttugmaaa">Subscribe</button>
                    </form>
                </section>
       </footer>
    </>
  );
}

export default Newslatter;
