import React,{Component} from 'react';
import 'antd/dist/antd.css';
import { Select} from 'antd';
const { Option } = Select;
const API_KEY = 'd2db0f761f994b6991f8646818a83f10'


export default class SelectLegue extends Component{

state = {competitions:[],competitionID : ''}

    componentDidMount(){
        
        
        fetch(`https://api.football-data.org/v2/competitions`, {
                headers: new Headers({
                    "X-Auth-Token": API_KEY
            })
        })
      .then(res => res.json())
      .then(data => {
                const{competitions} = (data)
                this.setState({competitions})
                console.log(this.state.competitions)
                console.log(this.props.countryId)
      })

    }

    _renderCurrencies = () =>{
       
        const {competitions} = this.state
        

        const mapeo = competitions.map
            (competition =>{
            if(competition.area.id === this.props.countryId)
            {
                
            // this.state.competitionID = competition.id 
          
               // this.setState({competitionID:competition.id})    
                    return(
                        <Option key = {competition.id}
                        value= {competition.id}>{
                    competition.name
                     }</Option>
                 
                    )
                    
            }
        })
            

        return mapeo

    }

    handleChange=(value) =>{
 
        const selected = value
        this.setState({selected})
        console.log(`Selected: ${selected}`);
        console.log(this.state.competitionID)
       this.props.onResults(value)
        
    }

    render(){
  
        return(
            <div>
         
            <Select 
                 size='large' 
                 defaultValue="Seleciona una liga" 
                 onChange={this.handleChange} 
                 style={{ width: 200 }}>
                 {this._renderCurrencies()}
             </Select>
             <p>{this.props.countryId}</p>
       
             </div>
        )
    }
}