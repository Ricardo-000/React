import React from "react";

import { Link } from "react-router-dom";


class Crudalc extends React.Component{

    state ={
        id:'',
        area:'',
        año:'',
        codigo:'',
        curp:'',
        claveele:'',
        tiposangre:'',
        clave:'',
        id_paquete:'',
        id_tiempo:'',
        llave:'',
        cifra:'',
        secreto:'',
        genero:'',
        tramite:'',
        comentario:'',
        foto:'',
        paquetes:[],
        tiempos:[],
        resultado:'',
    }
    

    campoChange=(e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/cargapaque')
        .then(response => response.json())
        .then(paquetesJson => this.setState({paquetes:paquetesJson}))

        fetch('http://127.0.0.1:8000/api/cargati')
        .then(response => response.json())
        .then(tiemposJson => this.setState({tiempos:tiemposJson}))
    }

    subForm=(e) =>{
        e.preventDefault();
        let data ={
            id:this.state.id,
            area:this.state.area,
            año:this.state.año,
            codigo:this.state.codigo,
            curp:this.state.curp,
            claveele:this.state.claveele,
            tiposangre:this.state.tiposangre,
            id_paquete:this.state.id_paquete,
            id_tiempo:this.state.id_tiempo,
            clave:this.state.clave,
            llave:this.state.llave,
            cifra:this.state.cifra,
            secreto:this.state.secreto,
            genero:this.state.genero,
            tramite:this.state.tramite,
            comentario:this.state.comentario,
            foto:this.state.foto,
            
        };
        fetch('http://127.0.0.1:8000/api/altac',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json',
            },
            mode: 'cors', 
            body:JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => this.setState({resultado:"Alta de Cliente Exitoso"}))
    }
 


   render(){
    const {paquetes,tiempos} =this.state
    return( 
        <center>
        <div><h1>alta clientes</h1>
        <br></br>
        <form onSubmit ={this.subForm}>
            id <input type='text' name='id' onChange={this.campoChange}/>
            <br/>
            area <input type='text' name='area' onChange={this.campoChange}/>
            <br/>
            año <input type='text' name='año' onChange={this.campoChange}/>
            <br/>
            codigo <input type='text' name='codigo' onChange={this.campoChange}/>
            <br/>
            curp <input type='text' name='curp' onChange={this.campoChange}/>
            <br/>
            clave e <input type='text' name='claveele' onChange={this.campoChange}/>
            <br/>
            sangre <input type='text' name='tiposangre' onChange={this.campoChange}/>
            <br/>
            Seleccione un paquete
            <select name='id_paquete' onChange={this.campoChange} >
            {paquetes.map((paquetes,i)=> 
                <option value={paquetes.id_paquete} key={i}>{paquetes.nombre}</option>
                )}

            </select>
            <br/>
            Seleccione el tiempo
            <select name='id_tiempo' onChange={this.campoChange} >
            {tiempos.map((tiempos,i)=> 
                <option value={tiempos.id_tiempo} key={i}>{tiempos.nombre}</option>
                )}

            </select>
            <br/>
           
           
            clave <input type='text' name='clave' onChange={this.campoChange}/>
            <br/>
            llave <input type='text' name='llave' onChange={this.campoChange}/>
            <br/>
            secreto <input type='text' name='cifra' onChange={this.campoChange}/>
            <br/>
            Genero <input type='radio' name='genero' value='F' onClick={this.campoChange} /> Femenino
                 <input type='radio' name='genero' value='M' onClick={this.campoChange} /> Masculino
            <br/>
            Tramite <input type='radio' name='tramite' value='F' onClick={this.campoChange} /> Fisico
                 <input type='radio' name='tramite' value='E' onClick={this.campoChange} /> En Linea
            <br/>
            comentario <input type='text' name='comentario' onChange={this.campoChange}/>
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
                <Link to ="/crudclientes">
                    <button type="button" className="btn btn-secondary">Volver</button>
                </Link>
            </div>

        </div>
        </center>
        )
   }

}

export default Crudalc