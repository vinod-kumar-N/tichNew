import React, { useState } from 'react';
import './style.scss';

const VerticalTabs = ({ content, defaultActiveTab = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(
    defaultActiveTab > content.length - 1 ? 0 : defaultActiveTab,
  );

  const handleTabChange = (index) => {
    console.log('index', index);
    setActiveIndex(index);
  };

  return (
    <div className="container-fluid vertical-tabs-wrapper">
      <div className="row">
        <div className="col-md-3 vertical-tabs-titles">
          <ul>
            {content.map(({ title }, index) => (
              <li
                className={`vertical-tab-title ${
                  activeIndex === index ? 'vertical-tab-title-active' : ''
                }`}
                key={index}
                onClick={() => handleTabChange(index)}
              >
                {title}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-9 vertical-tabs-body">
          <div className="vertical-tab-item">{content[activeIndex].body}</div>
        </div>
      </div>
    </div>
  );
};

export default VerticalTabs;
