import React from 'react';

const AdditionalFeature = props => {
  const {state, dispatch} = props
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick= {() => dispatch({type: "ADD_FEATURE", payload: state })}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
