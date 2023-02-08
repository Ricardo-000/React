import React from "react";
import {Link} from 'react-router-dom'

class Cruddetalle extends React.Component{

    state={
        empleado:{}
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/buscaeid/'+this.props.location.state.id)
        .then(response=>response.json())
        .then(empleadosJson => this.setState({empleado:empleadosJson}))
    }

    render(){
        const {empleado}=this.state
        return(
            <div>
            <div>Detalle de Empleados</div>
            <img src={empleado.foto} className="img-thumbail"/>
            <br></br>
            Nombre: {empleado.nombre} {empleado.apellidos}
            <br></br>
            Genero: {empleado.sexo==='F'?'Femenino':'Masculino'}
            <br></br>
            Salario: {empleado.salario} {empleado.apellidos}
            <br></br>
            {/* Area Trabajo: {empleado.areatrabajo} 
            <br></br> */}
            <div>
                <Link to ="/crudEmpleados">
                    <buton type="button" className="btn btn-success">Volver</buton>
                </Link>
            </div>

            </div>
            
        )

    }
}



export default Cruddetalle