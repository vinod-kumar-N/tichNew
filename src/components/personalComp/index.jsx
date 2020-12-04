import React, { Fragment } from "react";
import OrderComp from "@Components/orderComp";
import handWritingLetterImg from "@Images/hand-written-letter.jpg";

const PersonalComp = () => {
  return (
    <Fragment>
      <section className='form-capstion-personal'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <img src={handWritingLetterImg} className='capstion-personal-image' />
            </div>
            <div className='col'>
              <div className='caption-personal-content'>
                <h1>PERSONAL</h1>
                <h3>Aliquam elementum metus suscipit erat suscipit fermentum ut ac nibh.</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum ante nisl, quis
                  ullamcorper urna finibus a. Duis tincidunt magna quam, eu luctus felis sollicitudin et.{" "}
                </p>
                <p>
                  Morbi tincidunt mauris id tincidunt porta. Etiam nec ex iaculis, rhoncus ex sed, congue
                  purus. Fusce nec faucibus magna. Pellentesque nec dignissim lectus, at varius urna.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OrderComp />
    </Fragment>
  );
};

export default PersonalComp;
