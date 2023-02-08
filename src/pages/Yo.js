import React from "react";

import yo from "../Fotos/yo.jpg"


class Yo extends React.Component{
    render(){
        return(
            <div className="con">
                <h1 className="centrado">¿quien soy?</h1>
                <div className="container">
          <div className="row">
          <div className="col">
          <div className="ima2">
              <img src={yo} className="ima" alt="r"/>
          </div>

          <div className="col">
          <div className="bo">
            <div className="texto">
                    
                    Nombre completo: Ricardo Flores Hernandez 
                  </div>
                  <div className="texto1">
                    
                    Edad: 22
                  </div>
                  <div className="texto2">
                    
                    Fecha de Nacimiento: 26/05/2000
                  </div>

          </div>

          <div className="bo2">
            <div className="texto3">
                    
                    Gustos: Me gusta correr por las tardes, la sopa de 
                  </div>
                  <div className="texto4">
                    
                    codito con atun y escuchar musica todo el tiempo
                  </div>

          </div>

          <div className="bo3">
            <div className="texto5">
                    
                    ¿que me gusta de la utvt?: mi docencia, la maquina
                  </div>
                  <div className="texto6">
                    
                    expendedora, mis amigos, algunos maestros, el pan
                  </div>
                  <div className="texto7">
                    
                    que venden afuera de la escuela y los chetos
                  </div>

          </div>

          </div>
          


          </div>
          </div>
          </div>

            </div>
        )
    }
}

export default Yo