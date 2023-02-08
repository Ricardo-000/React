import React from "react"

import Fichaalumno from "./Fichaalumno"

import './stilos/Fichaalumno.css'


//parametros
function Listaalumnos(props){
    return(
        <div className="centrado2">
            {props.deta.map((reporte)=>{
                return (
            
            <Fichaalumno
nomalu={reporte.nomalu}
foto={reporte.foto}
colorf={reporte.colorf}
colorf2={reporte.colorf2}
tipomensaje={reporte.tipomensaje}/>
  )})}
        </div>
    )
}

export default Listaalumnos