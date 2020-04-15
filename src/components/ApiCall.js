import React,{Component} from 'react';
import 'antd/dist/antd.css';


const API_KEY = 'd2db0f761f994b6991f8646818a83f10'



export class ApiCall extends Component{

    state = {areas:[]}


 
componentDidMount (){    

    const cadena = ''
    this.setState({search:this.props.search})

    fetch(`https://api.football-data.org/v2/${this.props.search}`, {
            headers: new Headers({
                "X-Auth-Token": API_KEY
        })
    })
  .then(res => res.json())
  .then(data => {
            const{areas} = (data.areas)
            this.setState({ areas: this.state.areas })
            console.log(areas)
           console.log('apiCall')
         
           
  })

}



render() {

    return(
        <div>
       
        <p>{this.props.search}</p>
      
       </div>
    )
}



}