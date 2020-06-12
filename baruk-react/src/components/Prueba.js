import React ,{Component} from "react"
import "../App.css"


import Swal from 'sweetalert2'


class Prueba extends Component{

    constructor(props){
        super(props);
        this.state ={
            total :"" ,
            usuarios : []
        }

    }

    apiCall(url, consecuencia){
        fetch(url)
        .then( response => response.json())
        .then ( data => consecuencia(data))
        .catch(e => console.log(e))
    }

    componentDidMount(){
        console.log("me actualize")
        this.apiCall("http://localhost:3001/api/products",this.mostrarProducts)

    }
    mostrarProducts = data => {

        this.setState({
            total : data.meta.statusText ,
            usuarios : data.datos
           
            }
            
        )
        console.log(this.state.usuarios)
        
    }

    componentDidUpdate(){
        console.log("me monte")

    }

    render() {
        console.log("estoy rendirizando")
    
        let contenido;
        if(this.state.total === ""){
           contenido = <p>Cargandooo....</p>
           Swal.fire({
               title : "cargando"
           })
        }else{
    
        contenido = <div>
            <p>{this.state.total}</p>
            <ul>
                {
                    this.state.usuarios.map(usuario =>

                        <li key={usuario.id}>

                            {usuario.nombre}
                            {usuario.detalle}

                         </li>
                    )
                }
            </ul>
                    
        </div> 

    
        }
        return (
    
            <div className="api">
                
            {contenido}
            </div>
    
        )
    } 
}

    


export default Prueba ;