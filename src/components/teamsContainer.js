import React,{Component} from 'react'

const API_KEY = 'd2db0f761f994b6991f8646818a83f10'

export  default class TeamsContainer extends Component{

    state = {teams:[], imageUrl:'', competitionID: ''}

    
    

    componentWillReceiveProps (nextProps){
        if(this.props.competitionID !== nextProps.competitionID|| this.props.competitionID !==undefined)
        {
        fetch(`https://api.football-data.org/v2/competitions/${nextProps.competitionID}/teams`, {
                headers: new Headers({
                    "X-Auth-Token": API_KEY
            })
        })
      .then(res => res.json())
      .then(data => {
                const{teams} = (data)
                this.setState({teams})
               console.log(teams)
              
      })
        console.log('1.componentWillReciveProps', nextProps)

        this.setState({competitionID:this.props.competitionID})
    }
    }
    

    _renderCurrencies = () =>{
       
        const {teams} = this.state
        return teams.map
        (team =>{
            return(  
                <img src = ""></img>
                
            )
        }
        )
    }
        
    render(){
        console.log(this.props.competitionID)
        return(
            <div>
              
            </div>
        )
    }

}