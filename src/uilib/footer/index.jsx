import React from "react";

function Footer() {
  return (
    <footer>
      <div className='container footer-top'>
        <div className='row'>
          <div className='col'>
            <h4>Quick Links</h4>
            <div className='row'>
              <div className='col'>
                <ul className='footer-links'>
                  <li>
                    <a href='#'>Personal</a>
                  </li>
                  <li>Business</li>
                  <li>How we work</li>
                  <li>Our work</li>
                  <li>About Us</li>
                </ul>
              </div>
              <div className='col'>
                <ul className='footer-links'>
                  <li>Get in Touch</li>
                  <li>Testimonials</li>
                  <li>FAQ</li>
                  <li>Blog</li>
                  <li>Terms &amp; Conditions</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col'>
            <h4>SUBSCRIBE TO TIHLC</h4>
            <p>Get latest updates about us. Sign up to receive exclusive resources</p>
            <form className='form-inline footer-form'>
              <div className='form-group mx-sm-3'>
                <input
                  type='input'
                  className='form-control ftr-tihlc-input'
                  id='inputPassword2'
                  placeholder='Email Address'
                />
              </div>
              <button type='submit' className='btn footer-send-btn'>
                <span className='fa fa-chevron-right' aria-hidden='true'></span>
              </button>
            </form>
          </div>
          <div className='col clear-pad-25'>
            <p>Operating under the trade name "The Indian Handwritten Letter Co."</p>
            <p className='para-lite copyright-statement'>
              Copyright &copy; <sup>2017</sup> - <a href='#'>Handworks Technology LLP</a>
            </p>
            <div className='social-links'>
              <a className='facebook-icon' href='#'></a>
              <a className='instagram-icon' href='#'></a>
              <a className='twitter-icon' href='#'></a>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='saperator'></div>
            <h3>Why Handwritten Letters?</h3>
            <p>
              Penning down thoughts may come across as an old-fashioned way of expressing in this era of
              instant messages. But, if you believe various surveys conducted for best gifting options, a
              handwritten letter still is the best-personalised gift you can give someone, yes second to your
              time.
            </p>

            <p>
              A handwritten letter shows how much time you must have invested in coming up with the exact
              words, as you cannot delete a wrong word in a handwritten letter with a click of a button like
              you do in an email or a message. Spammed inbox with ballads of love or apologies may seem like a
              good and more accessible idea but holding a love letter with a smile or sleeping with a sorry
              letter under the pillow is still an unmatchable magic.
            </p>

            <p>
              Never forget the element of surprise that comes with a handwritten letter. We exchange hundreds
              of emails, whatsapp messages, tweets these days sitting in front of the computer screen or on a
              mobile phone but the thought of receiving handwritten letter hardly ever crosses our mind. When,
              and if a person gets one such beautiful gift, it's always a welcome surprise which also makes
              you feel important in the life of the sender. As he/she has spent so much time and energy in
              coming up with a handwritten letter so beautiful.{" "}
            </p>
            <div className='hidden-content'>
              <p>
                Penning down thoughts may come across as an old-fashioned way of expressing in this era of
                instant messages. But, if you believe various surveys conducted for best gifting options, a
                handwritten letter still is the best-personalised gift you can give someone, yes second to
                your time.
              </p>

              <p>
                A handwritten letter shows how much time you must have invested in coming up with the exact
                words, as you cannot delete a wrong word in a handwritten letter with a click of a button like
                you do in an email or a message. Spammed inbox with ballads of love or apologies may seem like
                a good and more accessible idea but holding a love letter with a smile or sleeping with a
                sorry letter under the pillow is still an unmatchable magic.
              </p>

              <p>
                Never forget the element of surprise that comes with a handwritten letter. We exchange
                hundreds of emails, whatsapp messages, tweets these days sitting in front of the computer
                screen or on a mobile phone but the thought of receiving handwritten letter hardly ever
                crosses our mind. When, and if a person gets one such beautiful gift, it's always a welcome
                surprise which also makes you feel important in the life of the sender. As he/she has spent so
                much time and energy in coming up with a handwritten letter so beautiful.{" "}
              </p>
            </div>
            <a className='view-more' href='#view-less'>
              View More
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
