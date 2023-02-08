import React from 'react'


class miform extends React.Component{
    constructor(){
        super();
        this.state={
            fruta:'',
            precio:'',
            cantidad:'1',
            marca:'',
            tipo:'Importada',
            Dulce:false,
            Acida:false,
            color:''

        }

    this.valores=this.valores.bind(this);
    this.calculo=this.calculo.bind(this);
    this.descuento=this.descuento.bind(this);
    this.comprar=this.comprar.bind(this);

    }

    valores=({name,value,checked,type})=>{
        this.setState(()=>{
            return{[name]:type==="checkbox" ? checked:value};
        });
    };

    calculo(e){
        this.setState({total:parseInt(this.state.precio) * parseInt(this.state.cantidad)})

        switch(this.state.marca){
            case 'frubis':
            return this.setState({status:'Este fruta tiene 50% de descuento'})
            break;
            default:
            return this.setState({status:'Este fruta no tiene descuento'})
            break;
        }
        }
    

    descuento(e){
        if(this.state.marca==="frubis"){
            this.setState({descuento:parseInt(this.state.total) / 2 })
        }else{
            this.setState({descuento:parseInt(this.state.total)})
        }
    }

    comprar(e){
        if(this.state.Dulce===true && this.state.Acida===true){
            this.setState({comprado:'Se han comprado kg' + this.state.cantidad + ' ' + this.state.fruta + ' de color ' + this.state.color + ' con un precio de ' + this.state.descuento + ' la cual es de tipo Dulce y Acida.'})
        }else if(this.state.Acida===true){
            this.setState({comprado:'Se han comprado kg' + this.state.cantidad + ' ' + this.state.fruta + ' de color ' + this.state.color + ' con un precio de ' + this.state.descuento + ' la cual es de tipo Acida.'})
        }else if(this.state.Dulce===true){
            this.setState({comprado:'Se han comprado kg' + this.state.cantidad + ' ' + this.state.fruta + ' de color ' + this.state.color + ' con un precio de ' + this.state.descuento + ' la cual es de tipo Dulce.'})
        }else
         this.setState({comprado:'Se han comprado kg ' + this.state.cantidad + ' ' + this.state.fruta + ' de color ' + this.state.color + ' con un precio de ' + this.state.descuento + '.'})

    }

    render(){
        return(
            <div className='miform'>
                {/* <pre>{JSON.stringify(this.state,null,2)}</pre> */}
                 <h1>Compra de Fruta</h1>
                <div>
                
                         Nombre de la fruta
                        <input type="text" name="fruta" onKeyUp={event=>this.valores(event.target)}/><br></br>

                        Tipo de fruta:
                        
                        <select name="tipo" onClick={event=>this.valores(event.target)}>
                            <option value="Importada">Importada</option>
                            <option value="local">Local</option>
                        </select><br></br>

                        Marca
                        <input type="text" name="marca" onKeyUp={event=>this.valores(event.target)}/><br></br>
                    
                    
                        Precio
                        <input type="text" name="precio" onKeyUp={event=>this.valores(event.target)}/><br></br>
                
                    
                        Cantidad
                        
                            <select name="cantidad" onClick={event=>this.valores(event.target)}>
                                <option value="1">1 KG</option>
                                <option value="2">2 Kg</option>
                                <option value="3">3 KG</option>
                            </select><br></br>
                                           
                        Color
                        
                        <input type="radio" name="color" value={"rojo"} onChange={event=>this.valores(event.target)}/> rojo<br/>
                        <input type="radio" name="color" value={"verde"} onChange={event=>this.valores(event.target)}/> verde<br/>
                        <input type="radio" name="color" value={"amarilla"} onChange={event=>this.valores(event.target)}/> amarilla<br/>
                        <input type="radio" name="color" value={"combinado"} onChange={event=>this.valores(event.target)}/> combinado<br/>
                   
                        Es de tipo:
                        
                        <input type="checkbox" name="Dulce" value="si" onChange={event=>this.valores(event.target)}/> Dulce
                        <input type="checkbox" name="Acida" value="si" onChange={event=>this.valores(event.target)}/> Acida<br/>
                                       
                        <input type="button" value="Total" className="btn btn-success" onClick={this.calculo}/>
                    
                        Total a pagar:
                        <label name="total">{this.state.total}</label><br></br>            
                    
                        Descuento:
                        <label>{this.state.status}</label><br></br>   
                   
                        <input type="submit" value="Total con Desuento" className="btn btn-light" onClick={this.descuento}/><br></br>   
                        <label>{this.state.descuento}</label><br></br>   
                    
                        <input type="submit" value="comprar" className="btn btn-danger" onClick={this.comprar}/><br></br>   
                        <label>{this.state.comprado}</label><br></br>   
                    
                </div>
            </div>
        )
    }
}

export default miform