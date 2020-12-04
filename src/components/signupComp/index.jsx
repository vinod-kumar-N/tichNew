import React from 'react'
import LeftComp from './leftSide';
import RightComp from './rightSide';

export default function index() {
  return (
    <div className="contaiener">
      <div className="row no-gutters">
        <div className="col-2 d-none d-md-block"></div>
        <div className="col-4 bg-overlay d-none d-md-block">
          <LeftComp
            heading="Sign In with us"
            text="Aliguam elementum metus suscipit erot suscipit fermentum utac nigh"
            button="sign In"
            class="sign-in-container  SignUp-Container"
            mainclass="row no-gutters LeftSideDesign" />
        </div>
        <div className="col-12 col-md-5">
          <RightComp />
        </div>
      </div>
    </div>
  )
}