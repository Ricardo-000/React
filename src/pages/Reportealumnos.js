import React from "react"
// que queremos cargar y donde lo vamos a mostrar

import Titulo from '../componentes/Titulo';

import Listaalumnos from "../componentes/Listaalumnos";

class Reportealumnos extends React.Component{
//state
    constructor(props){
        super(props)
        this.state={
            datos:[{   
            "nomalu":"CDMX",
            "foto":"fotos/p4.png",
            "colorf":"yellow",
            "colorf2":"royalblue",
            "tipomensaje":"btn btn-danger"},
            {
            "nomalu":"Jalisco",
            "foto":"fotos/p5.png",
            "colorf":"gay",
            "colorf2":"purple",
            "tipomensaje":"btn btn-warning"
            },
            {
                "nomalu":"Tijuana",
                "foto":"fotos/p3.png",
                "colorf":"orange",
                "colorf2":"pink",
                "tipomensaje":"btn btn-info"
                }]
        }
    }

    render(){
        return(
        <div>
            <div><Titulo
            sucursal="Pepsi"/></div>

            <div><Listaalumnos
            deta={this.state.datos}/></div>

            {/* <div><a href='/altaa' className="btn btn-primary">Reporte</a></div> */}


</div>


    )}
}

//todos los componentes debes ser exportados
export default Reportealumnos