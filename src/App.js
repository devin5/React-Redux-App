import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getChuck} from './actions'

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h1>axios</h1>
      {props.chuck && (<div>
        <p>{props.chuck.value}</p>
        
      </div>)}
      <div></div>
      <button onClick={props.getChuck}>tell a chuck joke</button>
     
    </div>
  );
}

const mapStateToProps = state => {
  return{
    chuck: state.chuck,
    error: state.error,
    loading: state.loading,

  }
}
export default connect(mapStateToProps, {getChuck}) (App);
