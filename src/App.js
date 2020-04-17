import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import SelectArea from './components/SelectArea'
import SelectLegue from './components/SelectLegue'
import TeamsContainer from './components/teamsContainer'



class App extends Component {
  state = {value:'',team:'',countryId:'',competitionID:''};


  constructor(){
    super()
    this.state = {mostrarTeamsContainer:false}
  }
  

  _handleResults = (value) =>{
    this.setState({value, countryId:value})
    console.log('VALUE')
    console.log(value)
  }

  _handleLegue = (value)=>{
    this.setState({value, competitionID:value,mostrarTeamsContainer:true})
    console.log('VALUE')
    console.log(value)
  }

  useCondicionalRendering(mostrarTeamsContainer){
    if(mostrarTeamsContainer){
      return<TeamsContainer competitionID = {this.state.competitionID}/>
    }
  }

  

  render(){

    console.log('render')
    console.log('COUNTRY ID')
    console.log(this.state.countryId)
    console.log('COMPETITION ID')
    console.log(this.state.competitionID)
    console.log(this.state.mostrarTeamsContainer)
  return (
    <div className="App">
  
      <div className ="Select">
      <SelectArea onResults  = {this._handleResults} />
      <div className ='SelectLegue'>
      <SelectLegue countryId = {this.state.countryId}
                    onResults = {this._handleLegue}/>
      </div>

    
      </div>

      <TeamsContainer competitionID = {this.state.competitionID}/>
 
    </div>
  );
  }



}

export default App;
