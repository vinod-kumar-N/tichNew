import React, { Fragment } from "react";
import Letters from "@Images/letters.jpg";
import Swiggy from "@Images/swiggy.png";
import ShopClues from "@Images/shopclues.png";
import HotLine from "@Images/hotline.png";

function HomeComp() {
  return (
    <Fragment>
      <section className='main-top'>
        <div className='container main-cta-container'>
          <div className='row'>
            <div className='col-md-6 ml-auto'>
              <h1>
                Personalised Handwritten <br /> Letters to the ones <br /> you care!
              </h1>
              <p>
                <em>Starts at Rs. 160 /-</em>
              </p>
              <a href='#' className='yellow-btn-c'>
                Start Writing
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className='check-work'>
        <div className='container'>
          <div className='row'>
            <div className='col check-work-container'>
              <div className='check-work-content'>
                <p>
                  An year ago, we set out to make sending real handwritten notes as easy as sending emails.
                  With all this said, we love what The Indian Handwritten Letter Co. stands for— as we still
                  believe in the power of the handwritten letter, and we’re very proud of what we are doing.{" "}
                </p>
                <p>Vestibulum convallis turpis nec diam tincidunt, ac congue mauris luctus. </p>
                <div className='row work-statistics'>
                  <div className='col'>
                    <p>
                      11,000+ <br />
                      <span>Letters written</span>
                    </p>
                  </div>
                  <div className='col'>
                    <p>
                      12,000+ <br />
                      <span>Content Drafts</span>
                    </p>
                  </div>
                  <div className='col'>
                    <p>
                      10 <span>Different</span>
                      <br />
                      <span>languages</span>
                    </p>
                  </div>
                </div>
                <a href='#'>Check our Work</a>
              </div>
              <div className='check-work-image'>
                <img src={Letters} alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='featured-panel'>
        <div className='title-section container'>
          <h2>WHAT OUR CUSTOMER SAY ABOUT US</h2>
          <h1>You Type it, we Write it – Three Easy steps for Snail Mail!</h1>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='featured-body col'>
              <div className='featured-design-lt box'>
                <p>
                  {" "}
                  Pen you <span>MESSAGE</span>
                </p>
              </div>
              <div className='featured-content-rt'>
                <span>01</span>
                <p>
                  Scribble your thoughts or choose from our pre-written templates to help you pen down your
                  feelings in the best possible way.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='featured-body col'>
              <div className='featured-design-rt box'>
                <p>
                  {" "}
                  Customise <span>Need Word</span>
                </p>
              </div>
              <div className='featured-content-lt'>
                <span>02</span>
                <p>
                  Choose the design that best goes with your message, customise the handwriting and get a
                  real-time preview of how your letter would look.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='featured-body col'>
              <div className='featured-design-lt box'>
                <p>
                  {" "}
                  Have it <span>SHIPPED</span>
                </p>
              </div>
              <div className='featured-content-rt'>
                <span>03</span>
                <p>
                  Once you set up a note, we'll make sure it goes out at the earliest and be rest assured that
                  your message will be felt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='title-section container'>
        <h1>Did you Know? </h1>
        <p>
          Handwritten letters will never go out of style, and they are still the sexiest way of communication
        </p>
        <a href='#' className='yellow-btn-c'>
          Start Writing
        </a>
      </div>
      <section className='card-slider'>
        <div className='title-section container'>
          <h2 className='rev-clr'>WHAT OUR CUSTOMER SAY ABOUT US</h2>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='owl-carousel row' id='cardSlider'>
                <div className='card-content'>
                  <p>
                    <span>Simply mindblowing</span>
                    In short, none does it better! Trust,try it! They're pretty good at what they do! Good
                    job, Ayesha Siddiqui!
                  </p>
                  <span className='author-name'>- Umashankar Singh</span>
                </div>
                <div className='card-content'>
                  <p>
                    <span>Simply mindblowing</span>
                    In short, none does it better! Trust,try it! They're pretty good at what they do! Good
                    job, Ayesha Siddiqui!
                  </p>
                  <span className='author-name'>- Umashankar Singh</span>
                </div>
                <div className='card-content'>
                  <p>
                    <span>Simply mindblowing</span>
                    In short, none does it better! Trust,try it! They're pretty good at what they do! Good
                    job, Ayesha Siddiqui!
                  </p>
                  <span className='author-name'>- Umashankar Singh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <p className='rev-para'>TIHLC Is Rated 4 Stars By Trustpilot Based On Over 9 Reviews</p>
            </div>
          </div>
        </div>
      </section>
      <section className='brand-crausel'>
        <div className='title-section container'>
          <h2>TRUSTED BY</h2>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='owl-carousel' id='brandCarousel'>
                <img src={Swiggy} className='img-responsive' />
                <img src={ShopClues} className='img-responsive' />
                <img src={HotLine} className='img-responsive' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default HomeComp;
