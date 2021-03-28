import React from 'react';
import { connect } from 'react-redux';
import { addFeature} from '../actions/index'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick = {()=> addFeature(props.feature.name)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



export default AdditionalFeature;
