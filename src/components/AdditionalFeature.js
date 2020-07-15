import React from 'react';
import { addFeature } from '../actions/actions';

const AdditionalFeature = props => {
  const {state, dispatch} = props
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => (props.addFeature)}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
