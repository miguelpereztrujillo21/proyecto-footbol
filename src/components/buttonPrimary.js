import React ,{Component} from 'react'
import { Button } from 'antd';


export class ButtonPrimary extends Component
{
render(){
    return(
    <div>
        <Button  margin = '10px'
                type="primary"
                paddind = '10px'
            
                >Boton Primario
        </Button>
    </div>
    )
}

}