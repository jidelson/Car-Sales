import React, { useReducer, useState } from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { initialState, reducer } from './reducers';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { addFeature, removeFeature } from './actions/actions';

export const store = createStore(reducer);
console.log(store.getState())

const App = () => {
 
  const [state, dispatch] = useReducer(reducer, initialState);

  

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    additionalPriceOnProps: state.additionalPrice,
    carOnProps: state.car,
    additionalFeaturesOnProps: state.additionalFeatures
  }
}

export default connect(
  mapStateToProps,
  {addFeature, removeFeature}
  )(App);
