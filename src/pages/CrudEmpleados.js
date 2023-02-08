import React from "react";

import {Link} from 'react-router-dom'




class CrudEmpleados extends React.Component{
//variable que guarda la informacion de mi api despues del fetch
    state={
        empleados:[]
    }

    //Se ejecuta despues de que se renderiso el componente
    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/cargaempleados')
        .then(response => response.json())
        .then(empleadosJson => this.setState({empleados:empleadosJson}))
    }


render(){
    const{empleados}=this.state
    return(
        
        <div>
            <h1>Gestion de Empleados</h1>
            <br></br>
            <Link to= {{pathname:'/crudalta'}}>
                <button type="button" className="btn btn-info">Agregar empleados</button>
                </Link>
            <br></br>
            <table className="table table-striped table-border table-hover">
 <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">Foto</th>
        <th scope="col">Clave</th>
        <th scope="col">Nombre</th>
        <th scope="col">Edad</th>
        <th scope="col">Sexo</th>
        <th scope="col">Area Trabajo</th>
        <th scope="col">Acciones</th>
    </tr>
      
 </thead>
 <tbody>
        {empleados.map((empleado,i)=>
        <tr key={i}>
            <th scope="row">{i+1}</th>
            <td><img src={empleado.foto} height={100} width={100} ></img></td>
            <td>{empleado.id}</td>
            <td>{empleado.nombre} {empleado.apellidos}</td>
            <td>{empleado.edad}</td>
            <td>{empleado.sexo==="F"?'Femenino':'Masculino'}</td>
            <td>{empleado.areatrabajo}</td>
            <td>
                <Link to= {{pathname:'/cruddetalle', state:{id:empleado.id}}}>
                <button type="button" className="btn btn-primary">Detalle</button>
                </Link>
            <br/>
                <Link to= {{pathname:'/crudelimina', state:{id:empleado.id}}}>
                <button type="button" className="btn btn-danger">Eliminar</button>
                </Link>
            <br/>
            <Link to= {{pathname:'/crudactualiza', state:{id:empleado.id}}}>
                <button type="button" className="btn btn-dark">Actualizar</button>
                </Link>
            </td>
        </tr>
        )}
      </tbody>
          </table>
        </div>
    )
}


}








export default CrudEmpleados