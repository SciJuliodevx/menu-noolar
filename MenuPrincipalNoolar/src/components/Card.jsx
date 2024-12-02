import React from 'react';






function Cards({ title, description, imageUrl, bgColor, buttonText }) {
  return (
    <div className="card-container" style={{ backgroundColor: bgColor }}>
      <img src={imageUrl} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{description}</p>
      <button className="card-button">{buttonText}</button>
    </div>
  );
}

export default Cards;