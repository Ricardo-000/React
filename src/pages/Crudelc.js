import React from "react";

import { Link } from "react-router-dom";

class Crudelc extends React.Component{

    state={
        clientes:{}
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/buscacid/'+this.props.location.state.id)
        .then(response=>response.json())
        .then(empleadosJson => this.setState({clientes:empleadosJson}))

        fetch('http://127.0.0.1:8000/api/eliminac/'+this.props.location.state.id, 
        {method:'delete'})
    }


    render(){
        const {clientes}=this.state
        return(
        <center>
        <div>
            <h1>Elimina Cliente</h1>
            <br></br>
            <div className="alert alert-success">
                <strong>Hecho</strong><br></br>El cliente con curp<br></br>
                {clientes.curp} 
                <br/>
                Y clave con clave de la empresa {clientes.clave} 
                <br/>
                Con año de registro {clientes.año} ha sido
                <br></br>
                Eliminado Correctamente
            </div>

            <div>
                <Link to ="/crudclientes">
                    <buton type="button" className="btn btn-secondary">Volver</buton>
                </Link>
            </div>
            </div>
            </center>
        )
    }


}

export default Crudelc