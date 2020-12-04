import React from 'react';
import '../../../styles/index.scss';

const workFlowContent = () => {
    return (
        <div className="WorkFlow">
            <div className="row no-gutters">
                <div className="col-12">
                    <section className='featured-panel'>
                        <div className='title-section container'>
                            <h2 className="text-uppercase">How it works</h2>
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
                </div>
            </div>
        </div>
    )
}

export default workFlowContent;