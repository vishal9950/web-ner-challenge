import React from 'react';
import Badge from 'react-bootstrap/Badge';
import PropTypes from 'prop-types';
import './index.css';

function Badges({ data }) {
  return (
    <div className="Badges-container">
      <Badge bg="secondary">{data}</Badge>
    </div>
  );
}

Badges.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Badges;
