import React from "react";

import {Link} from 'react-router-dom'

class CrudClientes extends React.Component{

//variable que guarda la informacion de mi api despues del fetch
state={
    clientes:[]
}

//Se ejecuta despues de que se renderiso el componente
componentDidMount(){
    fetch('http://127.0.0.1:8000/api/cargaclientes')
    .then(response => response.json())
    .then(clientesJson => this.setState({clientes:clientesJson}))
}


render(){
const{clientes}=this.state
return(
    
    <div>
        <h1>Gestion de clientes</h1>
        <br></br>
        <Link to= {{pathname:'/crudalc'}}>
            <button type="button" className="btn btn-info">Agregar clientes</button>
            </Link>
        <br></br>
        <table className="table table-striped table-border table-hover">
<thead>
<tr>
    <th scope="col">#</th>
    <th scope="col">Foto</th>
    <th scope="col">CURP</th>
    <th scope="col">Sangre</th>
    <th scope="col">Paquete</th>
    <th scope="col">Tiempo</th>
    <th scope="col">Secreto</th>
    <th scope="col">Acciones</th>
</tr>
  
</thead>
<tbody>
    {clientes.map((clientes,i)=>
    <tr key={i}>
        <th scope="row">{i+1}</th>
        <td><img src={clientes.foto} height={100} width={100} ></img></td>
        <td>{clientes.curp}</td>
        <td>{clientes.tiposangre}</td>
        <td>{clientes.tramite==="F"?'Fisico':'En Linea'}</td>
        <td>{clientes.id_tiempo}</td>
        <td>{clientes.secreto}</td>
        <td>
            <Link to= {{pathname:'/cruddec', state:{id:clientes.id}}}>
            <button type="button" className="btn btn-primary">Detalle</button>
            </Link>
        <br/>
            <Link to= {{pathname:'/crudelc', state:{id:clientes.id}}}>
            <button type="button" className="btn btn-danger">Eliminar</button>
            </Link>
        <br/>
        <Link to= {{pathname:'/crudacc', state:{id:clientes.id}}}>
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
export default CrudClientes