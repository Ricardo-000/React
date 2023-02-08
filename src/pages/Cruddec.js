import React from "react";
import {Link} from 'react-router-dom'

class Cruddec extends React.Component{

    state={
        cliente:{}
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/buscacid/'+this.props.location.state.id)
        .then(response=>response.json())
        .then(empleadosJson => this.setState({cliente:empleadosJson}))
    }

    render(){
        const {cliente}=this.state
        return(
            <center>
            <div>
            <div>Detalle de Clientes</div>
            <img src={cliente.foto} className="" height={100} width={100}/>
            <br></br>
            Curp: {cliente.curp} 
            <br></br>
            Area: {cliente.area} 
            <br></br>
            Año: {cliente.año} 
            <br></br>
            Codigo: {cliente.codigo} 
            <br></br>
            Clave Elector: {cliente.calveele} 
            <br></br>
            sangre: {cliente.tiposangre} 
            <br></br>
            paquete: {cliente.id_paquete} 
            <br></br>
            tiempo: {cliente.id_tiempo} 
            <br></br>
            clave: {cliente.clave} 
            <br></br>
            llave: {cliente.llave} 
            <br></br>
            cifra: {cliente.cifra} 
            <br></br>
            Genero: {cliente.genero==='F'?'Femenino':'Masculino'}
            <br></br>
            Tramite: {cliente.tramite==="F"?'Fisico':'En Linea'}
            <br></br>
            Comentario: {cliente.comentario}
            <br></br>
           
            <div>
                <Link to ="/crudclientes">
                    <buton type="button" className="btn btn-success">Volver</buton>
                </Link>
            </div>

            </div>
            </center>
        )

    }
}



export default Cruddec