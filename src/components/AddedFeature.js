import React from 'react';
// import { removeFeature } from '../actions/actions';

const AddedFeature = props => {
  const {featureId} = props
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeature(featureId)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
