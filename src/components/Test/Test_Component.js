import React from 'react';
import './Test_Component.css';
import PropTypes from 'prop-types';

function Test_Component() {
  return (
    <div className="test">
      <div className="inner_div">inner_div</div>
    </div>
  );
}

Test_Component.defaultProp = {};
Test_Component.propTypes = {};
export default Test_Component;
