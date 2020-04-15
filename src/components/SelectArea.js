import React,{Component} from 'react';
import 'antd/dist/antd.css';
import { Select} from 'antd';
//import { ApiCall } from './ApiCall';
const { Option } = Select;
const API_KEY = 'd2db0f761f994b6991f8646818a83f10'


export default class SelectArea extends Component{
    
    state={areas:[], selected:''}


    componentDidMount (){    
        fetch(`https://api.football-data.org/v2/areas`, {
                headers: new Headers({
                    "X-Auth-Token": API_KEY
            })
        })
      .then(res => res.json())
      .then(data => {
                const{areas} = (data)
                this.setState({areas})
               console.log(areas)
              
      })

    }
    
    _renderCurrencies = () =>{
       
        const {areas} = this.state
        return areas.map
        (country =>{
            return(   
            <Option key = {country.id}
                    value= {country.id}>{
                country.name
            }</Option>
       
                
            )
        }
        )
    }
    

     handleChange=(value) =>{

        const selected = value
        this.setState({selected})
        console.log(`Selected: ${selected}`);
    
        this.props.onResults(value)
    }


    render(){
        
       
       
        return(
            <div>
           <Select 
                size='large' 
                defaultValue="Seleciona un Pais" 
                onChange={this.handleChange} 
                style={{ width: 200 }}>
                {this._renderCurrencies()}
            </Select>
          
            </div>
            
        )
    }
  
 
        
}