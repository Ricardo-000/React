//siempre importamos react
import React from 'react'
// ocupar intruciones de Jsx
import  ReactDOM from 'react-dom'
// llamo a la carpeta y al que voy a usar
import Comercializadora from './componentes/Comercializadora'

import 'bootstrap/dist/css/bootstrap.css';



const elemento =(<div><Comercializadora/></div>)

//se va a un contenedor
const container = document.getElementById('root')
ReactDOM.render(elemento,container)

// const root = createRoot(container);
// root.render(elemento)
