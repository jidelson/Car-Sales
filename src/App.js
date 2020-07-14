import React, { useReducer, useState } from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { initialState, reducer } from './reducers';
import { createStore } from 'redux';
import { connect } from 'react-redux';


export const store = createStore(reducer);
console.log(store.getState())

const App = (props) => {
 
  const [newFeature, setNewFeature] = useState()
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

export default connect(
  state => {
    console.log(state)
    return {
      additionalPriceOnProps: state.additionalPrice,
      carOnProps: state.car,
      additionalFeaturesOnProps: state.additionalFeatures
    }
  },
  {}
  )(App);
