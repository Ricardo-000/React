import React, { Component } from "react";

import "./stilos/Valida.css"

const cpRex =RegExp(/^[0-9]{5}$/);
const apRex =RegExp(/^[A-Za-z ]+$/);
const eRex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const vali =({errores,...rest}) => {
    let valid = true;
    Object.values(errores).forEach(val=>{val.length>0 && (valid=false);
    })
    Object.values(rest).forEach(val=>{val==null &&(valid=false)});
    return valid;
}

class Validacion extends Component{

    state={
        nombre:null,
        apellido:null,
        ciudad:null,
        cp:null,
        correo:null,
        formcheck:null,
        errores:{
            nombre:"",
            apellido:"",
            ciudad:"",
            cp:"",
            correo:""
        }
    }


    handleChange = e =>{
        const{name,value} = e.target
        let errores ={...this.state.errores};

        switch (name) {
            case "nombre":
                errores.nombre = value.length <3 && value.length >0 ? "Se requieren almenos tres caracteres" :"";
                
                break;
            
            case "apellido":
                    errores.apellido = apRex.test(value) ? "" :"Se requieren letras y espacios";
                    
                break;    

            case "ciudad":
                    errores.ciudad = value==="" ? "Se requieren seleccionar un valor" :"";
                    
                    break;    

            case "cp":
                        errores.cp = cpRex.test(value) ? "" :"Se requiere 5 digitos";
                        
                        break;    
                        
            case "correo":
                            errores.correo = eRex.test(value) ? "" :"Se requiere un correo valido";
                            
                            break;             
        
            default:
                break;
        }

        this.setState({errores,[name]:value})
    }

    handleSubmit = e =>{
        e.preventDefault();
        if (vali(this.state)) {
            console.log(`listo nombre: ${this.state.nombre}`);
            this.setState({formcheck:"FormularioCorrecto"});
        }else{
            this.setState({formcheck:"FormularioIncorrecto"});
        }
    }

    render(){
        const{errores}=this.state
        return(
            <div>
                <h1>Alta</h1>
                <div>
                    <form onSubmit={this.handleSubmit}>
                    <div>
                    Teclea tu nombre:
                        <input type="text" name="nombre" onKeyUp={this.handleChange} className={errores.nombre.length>0 ? "error":null}/>
                        {errores.nombre.length >0 &&(
                            <span className="errorMessage">{errores.nombre}</span>
                        )}
                    </div>

                    <div>
                    Teclea tu apellido:
                        <input type="text" name="apellido" onKeyUp={this.handleChange} className={errores.apellido.length>0 ? "error":null}/>
                        {errores.apellido.length >0 &&(
                            <span className="errorMessage">{errores.apellido}</span>
                        )}
                    </div>

                    <div>
                    Ciudad:
                        <select name="ciudad" onClick={this.handleChange}>
                            <option value="">Selecciona una ciudad</option>
                            <option value="1">Ciudad de Mexico</option>
                            <option value="2">Toluca</option>
                        </select>
                        {errores.ciudad.length >0 &&(
                            <span className="errorMessage">{errores.ciudad}</span>
                        )}
                    </div>

                    <div>
                    CP:
                        <input type="text" name="cp" onKeyUp={this.handleChange} className={errores.cp.length>0 ? "error":null}/>
                        {errores.cp.length >0 &&(
                            <span className="errorMessage">{errores.cp}</span>
                        )}
                    </div>

                    <div>
                    Correo:
                        <input type="text" name="correo" onKeyUp={this.handleChange} className={errores.correo.length>0 ? "error":null}/>
                        {errores.correo.length >0 &&(
                            <span className="errorMessage">{errores.correo}</span>
                        )}
                    </div>


                    <div>
                        <button type="submit" className="btn btn-primary">Crear</button>
                    </div>

                    <div>
                        <p>{this.state.formcheck}</p>
                    </div>



                    </form>
                </div>
                
                
                
            </div>
        )
    }
}

export default Validacion