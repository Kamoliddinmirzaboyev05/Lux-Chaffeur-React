import { useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header>
        <div className={open ? "mobileModal modalOpen" : "mobileModal"}>
          <ul className="modalLinks">
            <li>
              <a
                onClick={() => {
                  setOpen(false);
                }}
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setOpen(false);
                }}
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setOpen(false);
                }}
                href="#service"
              >
                Service
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setOpen(false);
                }}
                href="#fleet"
              >
                Fleet
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setOpen(false);
                }}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <nav>
          <div className="container">
            <div className="logo">
              <img src="/public/logo.svg" alt="" />
            </div>
            <ul className="links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>
              <li>
                <a href="#fleet">Fleet</a>
              </li>
              <li>
                <a href="#contact">Contact us</a>
              </li>
            </ul>
            <div
              onClick={() => {
                setOpen(true);
              }}
              className="bar"
            >
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </nav>
        <div className="hero" id="home">
          <div className="container">
            <div className="hero-text">
              <div className="ver-line"></div>
              <h1 className="text">
                Premium <br />
                and Luxurious Chauffeur Services
              </h1>
            </div>
            <div className="mers">
              <img src="/public/image 2.png" alt="" />
            </div>
          </div>
          <div className="hero-img">
            <img src="/public/hero-img.png" alt="" />
          </div>
          <div className="mobile-img">
            <img src="/public/mobile-img.png" alt="" />
          </div>
        </div>
      </header>

      <main>
        <section className="section1" id="about">
          <div className="container">
            <div className="sct1-img">
              <img src="/public/sct1.png" alt="" />
            </div>
            <div className="sct1-text">
              <h2>About </h2>
              <p>
                We are known for luxurious and <br />
                premium chaffeur services worldwide. We are simply the best you
                can find.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. We are
                known for luxurious and premium chaffeur services worldwide. We
                are simply the best you can find. ultrices mi viverra viverra.
                Mi, arcu sem nec risus cursus ipsum leo. Eget erat tincidunt
                risus gravida quis massa. Mauris, sed eu ut tellus sed sed
                morbi.
              </p>
              <p>
                Rhoncus ultricies vel enim montes, molestie sagittis dis. Cras
                lorem enim elementum vel massa. Massa natoque ac libero
                adipiscing facilisis vel iaculis. Sed nunc consectetur leo, in
                sollicitudin. Proin et aenean vitae in nunc pellentesque
                tristique.
              </p>
            </div>
          </div>
        </section>

        <section className="section2" id="service">
          <div className="container">
            <div className="sct2-title">
              <h1>Services</h1>
            </div>
            <div className="sct2-block">
              <div className="sct2-box">
                <div className="box-img">
                  <img src="/public/sct2.1.svg" alt="" />
                </div>
                <div className="box-text">
                  <h3>Lorem ipsum dolor sit amet</h3>
                  <p>
                    {" "}
                    consectetur adipiscing elit. Interdum parturient laoreet
                    nibh vitae in duis eu <br /> vel. Sagittis eget volutpat ac
                    quisque{" "}
                  </p>
                  <p>
                    tristique scelerisque proin. Vel nec ac ultrices mi viverra
                    viverra. Mi, arcu <br />
                    sem nec risus cursus ipsum leo. Eget <br />
                    erat tincidunt ri
                  </p>
                </div>
              </div>
              <div className="sct2-box">
                <div className="box-img">
                  <img src="/public/sct2.2.svg" alt="" />
                </div>
                <div className="box-text">
                  <h3>Lorem ipsum dolor sit amet</h3>
                  <p>
                    {" "}
                    consectetur adipiscing elit. Interdum parturient laoreet
                    nibh vitae in duis eu <br /> vel. Sagittis eget volutpat ac
                    quisque{" "}
                  </p>
                  <p>
                    tristique scelerisque proin. Vel nec ac ultrices mi viverra
                    viverra. Mi, arcu <br />
                    sem nec risus cursus ipsum leo. Eget <br />
                    erat tincidunt ri
                  </p>
                </div>
              </div>
              <div className="sct2-box">
                <div className="box-img">
                  <img src="/public/sct2.3.svg" alt="" />
                </div>
                <div className="box-text">
                  <h3>Lorem ipsum dolor sit amet</h3>
                  <p>
                    {" "}
                    consectetur adipiscing elit. Interdum parturient laoreet
                    nibh vitae in duis eu <br /> vel. Sagittis eget volutpat ac
                    quisque{" "}
                  </p>
                  <p>
                    tristique scelerisque proin. Vel nec ac ultrices mi viverra
                    viverra. Mi, arcu <br />
                    sem nec risus cursus ipsum leo. Eget <br />
                    erat tincidunt ri
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="dot" id="fleet"></div>
        </section>

        <section className="section3">
          <div className="container">
            <div className="sct3-title">
              <h1>Fleet</h1>
            </div>
            <div className="sct3-block">
              <div className="left">
                <img src="/public/left.svg" alt="" />
              </div>
              <div className="right">
                <img src="/public/right.svg" alt="" />
              </div>
              <div className="sct3-box">
                <div className="box3-img">
                  <img src="/public/sct3.1.png" alt="" />
                </div>
                <div className="box-text">
                  <h1 className="box-title">FIRST CLASS</h1>
                  <p className="brand">Mercedes maybach s600</p>
                  <p className="box-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent ut eu tellus cursus faucibus duis hendrerit
                    volutpat neque. Eget integer a amet iaculis. Nullam elit a{" "}
                  </p>
                </div>
                <div className="box-foot">
                  <div className="users">
                    <img src="/public/users.svg" alt="" />
                    <p>4 Seats</p>
                  </div>
                  <div className="gas">
                    <img src="/public/gas.svg" alt="" />
                    <p>2 Luggage</p>
                  </div>
                </div>
              </div>
              <div className="sct3-box">
                <div className="box3-img">
                  <img src="/public/sct3.2.png" alt="" />
                </div>
                <div className="box-text">
                  <h1 className="box-title">BUSINESS CLASS</h1>
                  <p className="brand">Mercedes G - wagon</p>
                  <p className="box-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent ut eu tellus cursus faucibus duis hendrerit
                    volutpat neque. Eget integer a amet iaculis. Nullam elit a{" "}
                  </p>
                </div>
                <div className="box-foot">
                  <div className="users">
                    <img src="/public/users.svg" alt="" />
                    <p>4 Seats</p>
                  </div>
                  <div className="gas">
                    <img src="/public/gas.svg" alt="" />
                    <p>2 Luggage</p>
                  </div>
                </div>
              </div>
              <div className="sct3-box">
                <div className="box3-img">
                  <img src="/public/sct3.3.png" alt="" />
                </div>
                <div className="box-text">
                  <h1 className="box-title">SUV</h1>
                  <p className="brand">Mercedes M class </p>
                  <p className="box-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent ut eu tellus cursus faucibus duis hendrerit
                    volutpat neque. Eget integer a amet iaculis. Nullam elit a{" "}
                  </p>
                </div>
                <div className="box-foot">
                  <div className="users">
                    <img src="/public/users.svg" alt="" />
                    <p>4 Seats</p>
                  </div>
                  <div className="gas">
                    <img src="/public/gas.svg" alt="" />
                    <p>2 Luggage</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dots">
              <img src="/public/dots.svg" alt="" />
            </div>
          </div>
        </section>

        <section className="section4">
          <div className="container">
            <div className="sct4-box">
              <h1>70</h1>
              <p>VEHICLES</p>
            </div>
            <div className="sct4-box">
              <h1>576</h1>
              <p>TRIPS DONE</p>
            </div>
            <div className="sct4-box">
              <h1>321</h1>
              <p>EVENTS</p>
            </div>
          </div>
        </section>

        <section className="section5">
          <div className="container">
            <div className="sct3-title sct5">
              <h1>Testimonials</h1>
            </div>
            <div className="comment">
              <div className="women">
                <img src="/public/woman.svg" alt="" />
                <h2>Annie Rudy</h2>
                <p>Las vegas</p>
              </div>
              <div className="comment-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mattis dui nec massa enim scelerisque scelerisque maecenas
                  lectus. Tincidunt posuere nunc at amet, in. Enim ullamcorper
                  lectus viverra donec. At faucibus nunc vel viverra massa
                  malesuada leo iaculis tellus.
                </p>
                <img src="/public/stars.svg" alt="" />
              </div>
            </div>
            <div className="dots2">
              <img src="/public/dots2.svg" alt="" />
            </div>
          </div>
        </section>

        <section className="section6">
          <div className="container">
            <p className="sct6-info">We offer the best you can imagine</p>
            <h1 className="sct6-title">Call Now for booking 01477 678905 </h1>
          </div>
        </section>

        <section className="section7" id="contact">
          <div className="container">
            <div className="sct3-title sct7">
              <h1>Contact</h1>
            </div>
            <div className="contact">
              <form>
                <input type="text" className="name" placeholder="Your Name" />
                <input type="email" className="email" placeholder="Email" />
                <select name="car-type" id="">
                  <option value="fclass" disabled selected>
                    <p>Type of Car</p>
                  </option>
                  <option value="fclass">First Class</option>
                  <option value="fclass">BUSINESS CLASS</option>
                  <option value="fclass">SUV</option>
                </select>
                <textarea
                  name="textarea"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Your Details"
                ></textarea>
                <button className="contact-btn">SEND</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-data">
            <div className="about-we">
              <div className="foot-logo">
                <img src="/public/logo.svg" alt="" />
              </div>
              <p className="foot-info">
                We are known for luxurious and premium chaffeur services
                worldwide. We are simply the best you can find.
              </p>
              <p className="foot-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                consectetur sagittis auctor.
              </p>
            </div>
            <div className="letters">
              <h1>News Letter</h1>
              <p>
                Subscribe to our news letter for updates, news and exclusive
                offers
              </p>
              <div className="subscribe">
                <form>
                  <input type="email" placeholder="Email" />
                  <button className="foot-btn">Subscribe</button>
                </form>
              </div>
            </div>
            <div className="contact-me">
              <h1>Contact</h1>
              <div className="foot-data">
                <i className="fa-solid fa-location-dot"></i>
                <p>
                  2038 2nd Avenue, <br /> Las Vegas, United States
                </p>
              </div>
              <div className="foot-data">
                <i className="fa-solid fa-phone"></i>
                <p>
                  01477 342123 <br />
                  01477 678905
                </p>
              </div>
              <div className="foot-data">
                <i className="fa-solid fa-envelope"></i>
                <p>info@luxchauffeur.com</p>
              </div>
            </div>
          </div>

          <div className="socials">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
          <div className="hr"></div>
          <div className="copy">
            <p>© Copyright 2020 · LuxChauffeur All rights reserved </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
