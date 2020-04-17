import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import SelectArea from './components/SelectArea'
import SelectLegue from './components/SelectLegue'
import TeamsContainer from './components/teamsContainer'



class App extends Component {
  state = {value:'',mostrarTeamsContainer:false};



  _handleResults = (value) =>{
    this.setState({value})
    console.log('VALUE')
    console.log(value)
  }

  useCondicionalRendering(mostrarTeamsContainer){
    if(mostrarTeamsContainer)
      return<TeamsContainer competitionID = {this.state.value}/>
    
  }
  

constructor(){
  super()
  this.state = {mostrarTeamsContainer:true}
}

  render(){

    

  return (
    <div className="App">
  
      <div className ="Select">
      <SelectArea onResults  = {this._handleResults} />
      <div className ='SelectLegue'>
      <SelectLegue countryId = {this.state.value}
                    onResults = {this._handleResults}
                    />
      </div>
      {this.useCondicionalRendering(this.state.mostrarTeamsContainer)}
      <img src ="https://cnnespanol2.files.wordpress.com/2019/12/mejores-imagenes-del-ancc83o-noticias-2019-galeria10.jpg?quality=100&strip=info&w=320&h=240&crop=1"/>
      </div>

      

    </div>
  );
  }

}

export default App;
