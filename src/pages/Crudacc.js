import React from "react";

import { Link } from "react-router-dom";

class Crudacc extends React.Component{
    state={
        clientes:{
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
            foto:''
        },
        isFetch:true,
        paquetes:[],
        tiempos:[],
        resultado:'',
    }

    handleChange= async e=>{
        e.persist();
        await this.setState({
            clientes:{
                ...this.state.clientes,
                [e.target.name]:e.target.value
            }
        });
        
    }


    async componentDidMount(){
        fetch('http://127.0.0.1:8000/api/buscacid/'+this.props.location.state.id)
        .then(response=>response.json())
        .then(clientesJson => this.setState({clientes:clientesJson, isFetch: false}))

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
        fetch('http://127.0.0.1:8000/api/modificac',{
            method:'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json',
            },
            mode: 'cors', 
            body:JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => this.setState({resultado:"Modificacion de cliente Exitoso"}))
    }


    render(){
        const{ isFetch,clientes,paquetes,tiempos} =this.state
        if(isFetch){
            return ("no se pudo conectar la api")
        }
        return(
            <center><h1>Modifica Cliente</h1>
            
            <form onSubmit={this.subForm} >
            id <input type='text' name='id' value={clientes.id} onChange={this.handleChange} disabled/>
            <br/>
            area <input type='text' name='area' value={clientes.area} onChange={this.handleChange} />
            <br/>
            año <input type='text' name='año' value={clientes.año} onChange={this.handleChange} />
            <br/>
            codigo <input type='text' name='codigo' value={clientes.codigo} onChange={this.handleChange} />
            <br/>
            curp <input type='text' name='curp' value={clientes.curp} onChange={this.handleChange} />
            <br/>
            claveele <input type='text' name='claveele' value={clientes.claveele} onChange={this.handleChange} />
            <br/>
            tiposangre <input type='text' name='tiposangre' value={clientes.tiposangre} onChange={this.handleChange} />
            <br/>
            Seleccione un paquete
            <select name='id_paquete' onChange={this.handleChange} >
                <option value={clientes.id_paquete}>{clientes.areatrabajo}</option>
                {paquetes.map((paquetes,i)=> 
                <option value={paquetes.id_paquete} key={i}>{paquetes.nombre}</option>
                )}
        
            </select>
            <br/>

            Seleccione el tiempo
            <select name='id_tiempo' onChange={this.handleChange} >
                <option value={clientes.id_tiempo}>{clientes.areatrabajo}</option>
                {tiempos.map((tiempos,i)=> 
                <option value={tiempos.id_tiempo} key={i}>{tiempos.nombre}</option>
                )}
        
            </select>
            <br/>

            clave <input type='text' name='clave' value={clientes.clave} onChange={this.handleChange} />
            <br/>
            llave <input type='text' name='llave' value={clientes.llave} onChange={this.handleChange} />
            <br/>
            cifra <input type='text' name='cifra' value={clientes.cifra} onChange={this.handleChange} />
            <br/>
            secreto <input type='text' name='secreto' value={clientes.secreto} onChange={this.handleChange} />
            <br/>
            genero <input type='radio' name='genero' value='F' defaultChecked={clientes.genero==='F' 
            ?'checked':''} onClick={this.handleChange}/> Femenino
                 <input type='radio' name='genero' value='M'  defaultChecked={clientes.genero==='M' 
            ?'checked':''} onClick={this.handleChange}/> Masculino
            <br/>
            tramite <input type='radio' name='tramite' value='F' defaultChecked={clientes.tramite==='F' 
            ?'checked':''} onClick={this.handleChange}/> Fisico
                 <input type='radio' name='tramite' value='E'  defaultChecked={clientes.tramite==='E' 
            ?'checked':''} onClick={this.handleChange}/> en Linea
            <br/>
            comentario <input type='text' name='comentario' value={clientes.comentario} onChange={this.handleChange} />
            <br/>

            <img src={clientes.foto} height={100} width={100}/>
            <br/>
            Foto <input type='text' name='foto' value={this.state.clientes.foto} onChange={this.handleChange}/>
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
      
            </center>
        )
    }
}
export default Crudacc