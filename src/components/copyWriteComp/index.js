import React from 'react';
import './content.css';
import ContentBanner from './contentBanner';
import Helpful from './helpFulList';
import PrivacyContent from './privacyContent';
import WorkFlow from './workFlow';
import Sample from './samples';
import FAQ from './contentFAQ';

const content = () => {
    return (
        <div className="content">
            <div className="">
                <ContentBanner />
            </div>
            <div className="row no-gutters">
                <div className="col-12">
                    <Helpful />
                    <PrivacyContent />
                    <WorkFlow />
                    <Sample />
                    <FAQ />
                </div>
            </div>
        </div>
    )
}

export default content;