// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
function ShowCasePhoto({ src, src1,src2, h3, p, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="photo-container">
        <img className="hover" src={src} alt={h3} style={{ marginRight: 20 }}/>
        <img className="hover" src={src1} alt={h3} style={{ marginRight: 20 }}/>
        <img className="hover" src={src2} alt={h3} style={{ marginRight: 20 }}/>
      </div>
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ShowCasePhoto;
