import React from "react"

import './stilos/Fichaalumno.css'



class Titulo extends React.Component{
    render(){
        return(<div className="centrado">
           
           Sucursales de {this.props.sucursal}
            
        </div>
        )
    }
}

export default Titulo