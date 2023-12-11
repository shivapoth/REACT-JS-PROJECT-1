import React, { useState } from 'react';


import imgSrc from '../../assests/images/intro1-img'; 

const Intro = () => {
    const [content, setContent] = useState(null);

    const handleButtonClick = () => {
        setContent(
          <div className="container text-center">
              <div className='row'>
            <div className="col">
              <span>1 Million Parcels</span>
              <p>This winter, food banks in our network are expecting to provide over one million emergency food parcels.</p>
              <button type="button">Your Button</button>
            </div>
            <div className="col">
              <img src={imgSrc} alt="Food" />
            </div>
          </div>
          </div>
        );
      };
  
    return (
      <div>
        {content}
        <button
          type="button"
          className="btn btn-success"
          onClick={() =>
            handleButtonClick()
          }
        >
          Christmas Appeal
        </button>
        
     
      <button
        type="button"
        className="btn btn-success"
        onClick={() =>
          handleButtonClick(
            'Information about Petition food',
            'URL to Petition food image'
          )
        }
      >
        Petition
      </button>
      <button
        type="button"
        className="btn btn-success"
        onClick={() =>
          handleButtonClick('Information about Get help food', 'URL to Get help food image')
        }
      >
        Get help
      </button>
    </div>
  );
};

export default Intro;
