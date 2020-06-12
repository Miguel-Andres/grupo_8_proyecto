import React , {Component} from "react"




class Dash extends Component {

    constructor(props){
        super(props);
        this.state ={
            total :"" ,
            usuarios : [] ,
            icon : "fas fa-clipboard-list fa-2x text-gray-300"
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
                total : data.meta.total,
                usuarios : data.datos
               
                }
                
            )
            
            
        }



    

    render(){
        console.log("me estoy renderizando")
        const {icon,usuarios} = this.state;
        console.log(this.state.total)
        let total ;

        if(this.state.total ===""){
            total = <p>Cargando el total de usuarios</p>
        }else{
            total = <p>
                {this.state.total}

            </p>
        }
        return(
            
        <div className="col-md-4 mb-4">
        <div className= "card border-left-primary shadow h-100 py-2" >
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            usuarios de la db
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">

                           {total}
                        </div>
                    </div>
                    <div className="col-auto">
                        <i className={icon}></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
           
        )
    }



 }



   

   
 
export default Dash ;