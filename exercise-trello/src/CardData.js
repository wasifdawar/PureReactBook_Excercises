import React from "react";
import PropTypes from "prop-types";

const CardData = ({ title }) => {
  return (
    <div className="card-value">
      <h2>{title}</h2>
    </div>
  );
};
CardData.propTypes = {
  title: PropTypes.object.isRequired,
};

export default CardData;
