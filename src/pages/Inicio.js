import React from "react";

class Inicio extends React.Component{
    render(){
        return(
            <div className="centrado3">
            <a href='/yo' className="btn btn-primary">¿quien soy?</a><br/>
            <a href='/reportea' className="btn btn-secondary">tarea 3</a><br/>
            <a href='/altaa' className="btn btn-success">mi formulario</a><br/>
            <a href='/formu2' className="btn btn-dark">validacion</a>
            </div>
        )
    }
}

export default Inicio