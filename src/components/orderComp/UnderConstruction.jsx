import React from "react";

const UnderConstruction = ({ navigateTo, moduleName, currentIndex, availableTabs }) => {
  const someHeight = 300;
  const customStyle = {
    display: 'flex',
    alignContent: 'baseline',
    height: `${someHeight}px`,
    justifyContent: 'center',
    borderRadius: '10px',
    backgroundColor: '#ffc9c9',
    border: '1px solid #FFBF00',
    margin: '10px',
    backgroundColor: 'rgb(255 191 0 / 32%)',
  };
  return (
    <div>
      <div className="" style={customStyle}>
        <div style={{ textAlign: "center", height: '20px', paddingTop: `${someHeight * 0.3}px` }}><p>Under construction</p> <h1>{moduleName}</h1> </div>
      </div>
      <div className="col-md-12 yellow-saperator"></div>
      <div className="col-md-12 next-prev-btn-container">
        {currentIndex > 1 &&
          <a className="btn btn-primary white-btn btn-prev" onClick={() => navigateTo(currentIndex - 1)} >Back</a>
        }
        {currentIndex !== availableTabs.length &&
          <a className="btn btn-primary blue-btn btn-next" onClick={() => navigateTo(currentIndex + 1)}>{availableTabs.find(x => x.tabIndex === (currentIndex + 1))?.label}</a>
        }
      </div>
    </div>

  );
};

export default UnderConstruction;
