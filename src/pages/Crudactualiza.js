import React from "react";

import { Link } from "react-router-dom";

class Crudactualiza extends React.Component{

    state={
        empleados:{
        id:'',
        nombre:'',
        apellidos:'',
        edad:'',
        sexo:'',
        salario:'',
        id_area:'',
        foto:''
        },
        isFetch:true,
        areas:[],
        resultado:'',
    }

    handleChange= async e=>{
        e.persist();
        await this.setState({
            empleados:{
                ...this.state.empleados,
                [e.target.name]:e.target.value
            }
        });
        
    }


    async componentDidMount(){
        fetch('http://127.0.0.1:8000/api/buscaeid/'+this.props.location.state.id)
        .then(response=>response.json())
        .then(empleadosJson => this.setState({empleados:empleadosJson, isFetch: false}))

        fetch('http://127.0.0.1:8000/api/cargaareas')
        .then(response=>response.json())
        .then(areasJson => this.setState({areas:areasJson, isFetch: false}))
       
    }

    subForm=(e) =>{
        e.preventDefault();
        let data ={
            id:this.state.empleados.id,
            nombre:this.state.empleados.nombre,
            apellidos:this.state.empleados.apellidos,
            edad:this.state.empleados.edad,
            sexo:this.state.empleados.sexo,
            salario:this.state.empleados.salario,
            id_area:this.state.empleados.id_area,
            foto:this.state.empleados.foto,
        };
        fetch('http://127.0.0.1:8000/api/modificae',{
            method:'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json',
            },
            mode: 'cors', 
            body:JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => this.setState({resultado:"Empleado modificado Exitosamente"}))
    }


    render(){
        const{ isFetch,empleados,areas} =this.state
        if(isFetch){
            return ("no se pudo conectar la api")
        }
        return(
            <center><h1>Modifica Empleado</h1>
            
            <form onSubmit={this.subForm} >
            Clave <input type='text' name='id' value={empleados.id} onChange={this.handleChange} disabled/>
            <br/>
            Nombre <input type='text' name='nombre' value={empleados.nombre} onChange={this.handleChange} />
            <br/>
            apellidos <input type='text' name='apellidos' value={empleados.apellidos} onChange={this.handleChange} />
            <br/>
            edad <input type='text' name='edad' value={empleados.edad} onChange={this.handleChange} />
            <br/>
            Sexo <input type='radio' name='sexo' value='F' defaultChecked={empleados.sexo==='F' 
            ?'checked':''} onClick={this.handleChange}/> Femenino
                 <input type='radio' name='sexo' value='M'  defaultChecked={empleados.sexo==='M' 
            ?'checked':''} onClick={this.handleChange}/> Masculino
            <br/>
            Salario <input type='text' name='salario' value={empleados.salario} onChange={this.handleChange} />
            <br/>
            
            Seleccione un area 
            <select name='id_area' onChange={this.handleChange} >
                <option value={empleados.id_area}>{empleados.areatrabajo}</option>

                {areas.map((areas,i)=> 
                <option value={areas.id_areas} key={i}>{areas.nombre}</option>
                )}
            </select>
            <br/>

            <img src={empleados.foto}/>
            <br/>
            Foto <input type='text' name='foto' value={this.state.empleados.foto} onChange={this.handleChange}/>
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
            
            
            
            
            </center>
        )
    }
}

export default Crudactualiza