import React, { Component } from "react";

import "./stilos/Valida.css"


const coRex =RegExp(/^[0-9]{6}$/);
const cuRex =RegExp(/^[A-Z]{4}[0-9]{6}[A-Z]{7}[0-9]$/);
const ceRex =RegExp(/^[A-Z]{6}[0-9]{7}[A-Z][0-9]{3}$/);
const tipRex =RegExp(/^[A,B,O][+,-]$/);

const claRex =RegExp(/^[C][O][N][A][F][0-9]{3}$/);
const llaRex =RegExp(/^[a-z]{2}[0-9]{2}[.][@]$/);
const cifRex =RegExp(/^[0-9][A-Z]{2}[-][0-9]{2}[A-Z]$/);
const seRex =RegExp(/^[/][0-9]{2}[A-Za-z]{5}["][0-9]{3}[A-Z]["][#]$/);

const vali =({errores,...rest}) => {
    let valid = true;
    Object.values(errores).forEach(val=>{val.length>0 && (valid=false);
    })
    Object.values(rest).forEach(val=>{val==null &&(valid=false)});
    return valid;
}


class Validacion2 extends Component{

    state={
        area:null,
        an:null,
        codigo:null,
        curp:null,
        ce:null,
        ts:null,
        paquete:null,
        duracion:null,
        genero:null,
        tramite:null,
        tarea:null,
        clave:null,
        llave:null,
        cifra:null,
        secreto:null,   
        formcheck:null,
        errores:{
            area:"",
            an:"",
            codigo:"",
            curp:"",
            ce:"",
            ts:"",
            paquete:"",
            duracion:"",
            genero:"",
            tramite:"",
            tarea:"",
            clave:"",
            llave:"",
            cifra:"",
            secreto:""
           
        }
    }

    handleChange = e =>{
        const{name,value} = e.target
        let errores ={...this.state.errores};

        switch (name) {
            case "area":
                    errores.area = value.length <3 && value.length >0 ? "Se requieren almenos tres caracteres" :"";
                    
                break;      
            case "an":
                    errores.an = value.length <4 && value.length >0 ? "Se requieren cuatro numeros" :"";
                    
                break;  
                
            case "codigo":
                   errores.codigo = coRex.test(value) ? "" :"Se requiere 6 digitos";
                    
                break;    

            case "curp":
                    errores.curp = cuRex.test(value) ? "" :"Se requiere el formato de curp";
                     
                 break;   

            case "ce":
                    errores.ce = ceRex.test(value) ? "" :"Se requiere el formato del ine";
                     
                 break;   

            case "ts":
                    errores.ts = tipRex.test(value) ? "" :"No existe el tipo de sangre";
                     
                 break;       
            
            case "paquete":
                    errores.paquete = value==="" ? "Seleccionar un paquete" :"";
                    
                 break; 

            case "duracion":
                    errores.duracion = value==="" ? "Seleccionar un tiempo" :"";
                    
                 break;    
              
            case "genero":
                    errores.genero = value==="" ? "Seleccionar un genero" :"";
                    
                 break;

            case "tramite":
                    errores.tramite = value==="" ? "Seleccionar el tramite" :"";
                    
                 break;
                         
            case "tarea":
                   errores.tarea = value.length <3 && value.length >0 ? "Se requieren almenos tres caracteres" :"";
                    
                 break;
                 
            case "clave":
                    errores.clave = claRex.test(value) ? "" :"Se requiere la estructura de la empresa";
                     
                 break; 
                      
            case "llave":
                    errores.llave = llaRex.test(value) ? "" :"Se requiere llave de area";
                     
                 break;
                      
            case "cifra":
                    errores.cifra = cifRex.test(value) ? "" :"se require cifrado especifico";
                     
                 break;     

            case "secreto":
                    errores.secreto = seRex.test(value) ? "" :"secreto";
                     
                 break;      
        
            default:
                break;
        }

        this.setState({errores,[name]:value})
    }

    handleSubmit = e =>{
        e.preventDefault();
        if (vali(this.state)) {
            this.setState({formcheck:"Todo listo"});
        }else{
            this.setState({formcheck:"Falta algo"});
        }
    }

    


    render(){
        const{errores}=this.state
        return(
            <div className="fv">
                <h1>Registro de Ejido</h1>
                <div className="s">  
                    <form onSubmit={this.handleSubmit}>

                    <div>
                    Area:
                        <input type="text" name="area" onKeyUp={this.handleChange} className={errores.area.length>0 ? "error":null}/>
                        {errores.area.length >0 &&(
                            <span className="errorMessage">{errores.area}</span>
                        )}
                    </div>
                      
                    <br></br>

                    <div>
                    Año:
                        <input type="text" name="an" onKeyUp={this.handleChange} className={errores.an.length>0 ? "error":null}/>
                        {errores.an.length >0 &&(
                            <span className="errorMessage">{errores.an}</span>
                        )}
                    </div>   

                    <br></br>

                    <div>
                    Codigo:
                        <input type="text" name="codigo" onKeyUp={this.handleChange} className={errores.codigo.length>0 ? "error":null}/>
                        {errores.codigo.length >0 &&(
                            <span className="errorMessage">{errores.codigo}</span>
                        )}
                    </div>     

                    <br></br>   

                    <div>
                    CURP:
                        <input type="text" name="curp" onKeyUp={this.handleChange} className={errores.curp.length>0 ? "error":null}/>
                        {errores.curp.length >0 &&(
                            <span className="errorMessage">{errores.curp}</span>
                        )}
                    </div>   

                    <br></br>

                    <div>
                    C Elector:
                        <input type="text" name="ce" onKeyUp={this.handleChange} className={errores.ce.length>0 ? "error":null}/>
                        {errores.ce.length >0 &&(
                            <span className="errorMessage">{errores.ce}</span>
                        )}
                    </div>

                    <br></br>

                    <div>
                    Tipo sangre:
                        <input type="text" name="ts" onKeyUp={this.handleChange} className={errores.ts.length>0 ? "error":null}/>
                        {errores.ts.length >0 &&(
                            <span className="errorMessage">{errores.ts}</span>
                        )}
                    </div>     

                    <br></br>

                    <div>
                    Paquete:
                        <select name="paquete" onClick={this.handleChange}>
                            <option value="">Selecciona un Paquete</option>
                            <option value="1">Normal</option>
                            <option value="2">VIP</option>
                            <option value="3">S</option>
                        </select>
                        {errores.paquete.length >0 &&(
                            <span className="errorMessage">{errores.paquete}</span>
                        )}
                    </div>

                    <br></br>

                    <div>
                    Tiempo:
                        <select name="duracion" onClick={this.handleChange}>
                            <option value="">Selecciona una Duracion</option>
                            <option value="1">1 año</option>
                            <option value="2">5 años</option>
                            <option value="3">10 años</option>
                        </select>
                        {errores.duracion.length >0 &&(
                            <span className="errorMessage">{errores.duracion}</span>
                        )}
                    </div>

                    <br></br>



                     <div>
                    Clave:
                        <input type="text" name="clave" onKeyUp={this.handleChange} className={errores.clave.length>0 ? "error":null}/>
                        {errores.clave.length >0 &&(
                            <span className="errorMessage">{errores.clave}</span>
                        )}
                    </div> 

                    <br></br>

                    <div>
                    Llave:
                        <input type="text" name="llave" onKeyUp={this.handleChange} className={errores.llave.length>0 ? "error":null}/>
                        {errores.llave.length >0 &&(
                            <span className="errorMessage">{errores.llave}</span>
                        )}
                    </div> 

                    <br></br>

                    <div>
                    Cifra:
                        <input type="text" name="cifra" onKeyUp={this.handleChange} className={errores.cifra.length>0 ? "error":null}/>
                        {errores.cifra.length >0 &&(
                            <span className="errorMessage">{errores.cifra}</span>
                        )}
                    </div> 

                    <br></br>

                    <div>
                    Secreto:
                        <input type="text" name="secreto" onKeyUp={this.handleChange} className={errores.secreto.length>0 ? "error":null}/>
                        {errores.secreto.length >0 &&(
                            <span className="errorMessage">{errores.secreto}</span>
                        )}
                    </div> 

                    <br></br>

                    <div>
                    Genero:
                    <input type="radio" name="genero" value=""  onClick={this.handleChange} className={errores.genero.length>0 ? "error":null} /> 

                     {errores.genero.length >0 &&(
                            <span className="errorMessage">{errores.genero}</span>
                        )} <br></br>
                   

                        <input type="radio" name="genero" value="1" onClick={this.handleChange} className={errores.genero.length>0 ? "error":null}/> Hombre <br></br>
                       
                        <input type="radio" name="genero" value="2" onClick={this.handleChange} className={errores.genero.length>0 ? "error":null}/> Mujer <br></br>
                        
                    </div>

                    <br></br>

                    <div>
                    Tramite:
                    <input type="radio" name="tramite" value=""  onClick={this.handleChange} className={errores.tramite.length>0 ? "error":null} /> 

                     {errores.tramite.length >0 &&(
                            <span className="errorMessage">{errores.tramite}</span>
                        )} <br></br>
                   

                        <input type="radio" name="tramite" value="1" onClick={this.handleChange} className={errores.tramite.length>0 ? "error":null}/> En linea <br></br>
                       
                        <input type="radio" name="tramite" value="2" onClick={this.handleChange} className={errores.tramite.length>0 ? "error":null}/> Fisico <br></br>
                        
                    </div>

                    <br></br>

                    <div>
                    Escribe un comentario:
                    <br></br>
                        <textarea type="text" name="tarea" onKeyUp={this.handleChange} className={errores.tarea.length>0 ? "error":null}/>
                        {errores.tarea.length >0 &&(
                            <span className="errorMessage">{errores.tarea}</span>
                        )}
                    </div>  

                    <br></br>

                    <div>
                        <button type="submit" className="btn btn-primary">Crear</button>
                    </div>

                    <br></br>

                    <div>
                        <p>{this.state.formcheck}</p>
                    </div>
                                        
                    </form> 
                </div>
            </div>
        )
    }








}




export default Validacion2