import React from "react"

import './stilos/Fichaalumno.css'

class Fichaalumno extends React.Component{
    render(){
        const{nomalu,foto,colorf,tipomensaje} = this.props
        return (<div className="ficha">
          <div className="bordeazul" style={{
            backgroundColor: `${this.props.colorf2}`
          }}>
          <div className="container">
          <div className="row">
          <div className="col">
          <div className="borderojo">
          
          <div className="divfoto2">
              <img src={foto} className="fotito" alt="r"/>
          </div>
          </div>
          </div>
          <div className="col">
          <div className="bordenegro" style={{
            backgroundColor: `${this.props.colorf}`
          }}>
              
              <div className="texto-encima">
                    
                Empresa: Pepsi
              </div>
              
          </div>
          <div className="bordenegro" style={{
            backgroundColor: `${this.props.colorf}`
          }}>
              
              <div className="texto-encima">
                    
                Sucursal: {this.props.nomalu}
              </div>
              
          </div>
         
          <div className="bordemorado">
              <button type="button" className={this.props.tipomensaje}>Ver Detalle </button>     
          </div>
          </div>
          </div>
          </div>
          </div>

          <br/>

          {/* <div className="bordenaranja">
          <div className="container">
          <div className="row">
          <div className="col">
          <div className="borderojo">
          <div className="divfoto">
              <img src={fotoconaf} className="fotito2" alt="r"/>
          </div>
          <div className="divfoto2">
              <img src={fotoalumno2} className="fotito" alt="r"/>
          </div>
          </div>
          </div>
          <div className="col">
          <div className="bordenegro">
              <img src={fondo2} className="fotito4"/>
              <div className="texto-encima">
                  Nombre Empresa: Conaf <br/>
                  Telefono: 7223456783 <br/>
                  Estado: Mexico <br/>
                  Contacto: Ricardo Flores Hernandez <br/>
              </div>
          </div>
          <div>
              <div className="alerta2">warning; empresa pendeiente de pago</div>
          </div>
          <div>
              <button type="boton2" className="btn btn-success">Detalle empresa</button>        
          </div>
          </div>
          </div>
          </div>
          </div> */}
          <br/>
        </div>)
    }
}

export default Fichaalumno