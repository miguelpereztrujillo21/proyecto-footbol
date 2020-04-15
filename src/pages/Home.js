import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import SelectArea from './components/SelectArea'
import SelectLegue from './components/SelectLegue'


class Home extends Component {
  state = {value:''};

  _handleResults = (value) =>{
    this.setState({value})
    console.log(value)
  }

  render(){

    

  return (
    <div className="App">
  
      <div className ="Select">
      <SelectArea onResults  = {this._handleResults} />
      <div className ='SelectLegue'>
      <SelectLegue countryId = {this.state.value} />
      </div>
      </div>
 
    </div>
  );
  }
}

export default App;