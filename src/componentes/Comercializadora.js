import React from "react";
// import { Route, Switch } from "react-router-dom";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Altaalumno from "../pages/Miform";
import Reportealumnos from "../pages/Reportealumnos";
import Inicio from "../pages/Inicio";
import Noexiste from "../pages/Noexiste";
import Yo from "../pages/Yo";
import Formulario from "../pages/Formulario"
import Fv from "../pages/Fv";
import CrudEmpleados from "../pages/CrudEmpleados";
import Cruddetalle from "../pages/Cruddetalle";
import Cruedelimina from "../pages/Crudelimina";
import Crudalta from "../pages/Crudalta";
import Crudactualiza from "../pages/Crudactualiza";
import CrudClientes from "../pages/Crudclientes";
import Cruddec from "../pages/Cruddec";
import Crudelc from "../pages/Crudelc";
import Crudalc from "../pages/Crudalc";
import Crudacc from "../pages/Crudacc";
function Comercializadora(){
    return(
        
        <BrowserRouter>
        <Switch>
        <Route exact path="/inicio" component={Inicio}/>
        <Route exact path="/yo" component={Yo}/>
        <Route exact path="/reportea" component={Reportealumnos}/>
        <Route exact path="/altaa" component={Altaalumno}/>   
        <Route exact path="/formulario" component={Formulario}/>
        <Route exact path="/formu2"  component={Fv}/>

        <Route exact path="/crudempleados"  component={CrudEmpleados}/>
        <Route exact path="/cruddetalle"  component={Cruddetalle}/>
        <Route exact path="/crudelimina"  component={Cruedelimina}/>
        <Route exact path="/crudalta"  component={Crudalta}/>
        <Route exact path="/crudactualiza"  component={Crudactualiza}/>

        <Route exact path="/crudclientes"  component={CrudClientes}/>
        <Route exact path="/cruddec"  component={Cruddec}/>
        <Route exact path="/crudelc"  component={Crudelc}/>
        <Route exact path="/crudalc"  component={Crudalc}/>
        <Route exact path="/crudacc"  component={Crudacc}/>
        

        <Route path="*" component={Noexiste}/>
        </Switch>
        </BrowserRouter>
        
    )
}

export default Comercializadora