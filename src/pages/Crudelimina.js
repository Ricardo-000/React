import React from "react";

import { Link } from "react-router-dom";

class Cruedelimina extends React.Component{

    state={
        empleados:{}
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/buscaeid/'+this.props.location.state.id)
        .then(response=>response.json())
        .then(empleadosJson => this.setState({empleados:empleadosJson}))

        fetch('http://127.0.0.1:8000/api/eliminae/'+this.props.location.state.id, 
        {method:'delete'})
    }


    render(){
        const {empleados}=this.state
        return(<div>
            <div>Elimina Empleado</div>
            <br></br>
            <div className="alert alert-success">
                <strong>Hecho</strong>El empleado <br></br>
                {empleados.nombre} {empleados.apellidos}
                <br/>
                Con clave de empleado {empleados.id} ha sido
                <br></br>
                Eliminado Correctamente
            </div>

            <div>
                <Link to ="/crudEmpleados">
                    <buton type="button" className="btn btn-secondary">Volver</buton>
                </Link>
            </div>
            </div>
        )
    }


}

export default Cruedelimina