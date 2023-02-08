import React from "react";

import { Link } from "react-router-dom";


class Crudalta extends React.Component{

    state ={
        id:'',
        nombre:'',
        apellidos:'',
        edad:'',
        sexo:'',
        salario:'',
        id_area:'',
        foto:'',
        areas:[],
        resultado:'',
    }

    campoChange=(e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/cargaareas')
        .then(response => response.json())
        .then(areasJson => this.setState({areas:areasJson}))
    }

    subForm=(e) =>{
        e.preventDefault();
        let data ={
            id:this.state.id,
            nombre:this.state.nombre,
            apellidos:this.state.apellidos,
            edad:this.state.edad,
            sexo:this.state.sexo,
            salario:this.state.salario,
            id_area:this.state.id_area,
            foto:this.state.foto,
        };
        fetch('http://127.0.0.1:8000/api/altae',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json',
            },
            mode: 'cors', 
            body:JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => this.setState({resultado:"Alta Empleado Exitosa"}))
    }
 


   render(){
    const {areas} =this.state
    return( 
        <div><h1>alta empleados</h1>
        <br></br>
        <form onSubmit ={this.subForm}>
            Clave <input type='text' name='id' onChange={this.campoChange}/>
            <br/>
            Nombre <input type='text' name='nombre' onChange={this.campoChange}/>
            <br/>
            apellidos <input type='text' name='apellidos' onChange={this.campoChange}/>
            <br/>
            edad <input type='text' name='edad' onChange={this.campoChange}/>
            <br/>
            Sexo <input type='radio' name='sexo' value='F' onClick={this.campoChange} /> Femenino
                 <input type='radio' name='sexo' value='M' onClick={this.campoChange} /> Masculino
            <br/>
            Salario <input type='text' name='salario' onChange={this.campoChange}/>
            <br/>
            
            Seleccione un area 
            <select name='id_area' onChange={this.campoChange} >
                {areas.map((areas,i)=> 
                <option value={areas.id_areas} key={i}>{areas.nombre}</option>
                )}

            </select>
            <br/>

            Foto <input type='text' name='foto' onChange={this.campoChange}/>
            <br/>

            <input type='submit' value='Guardar'/>
        </form>    

        <div>
            {this.state.resultado 
            ? <div className="alert alert-success">{this.state.resultado}</div>
            : <div></div>
            }
        </div>

        <div>
                <Link to ="/crudEmpleados">
                    <button type="button" className="btn btn-secondary">Volver</button>
                </Link>
            </div>

        </div>
        )
   }

}

export default Crudalta