import React, { useState } from "react";

const Tour = ({ id, image, name, price, info, removeTour }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="tour">
      <img src={image} alt={name} />
      <div className="tour-info">
        <h3>{name}</h3>
        <h4>${price}</h4>
        <p>
          {showMore ? info : `${info.substring(0, 200)}... `}
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "See less" : "Show more"}
          </button>
        </p>
        <button onClick={() => removeTour(id)}>Remove</button>
      </div>
    </div>
  );
};

export default Tour;
