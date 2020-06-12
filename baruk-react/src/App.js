import React from 'react'; 
import Prueba from "./components/Prueba.js"

import './App.css';

//import NavBar from "./components/NavBar.js"
import CategoriDB from "./components/CategoriDB.js"
import Footer from "./components/Footer"
import Menu from "./components/Menu"
import Dash from "./components/Dash.js"
import NavBar from './components/NavBar.js';
import DbOption from './components/DbOption.js';



function App() {
  return (
    <div id="wrapper">


    <Menu/>





    <div id="content-wrapper" class="d-flex flex-column">


      <div id="content">

      
        <NavBar/>
       





        <div className="container-fluid">

          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
          </div>

          <div className="row">

            <Dash/>
                
            
            




          </div>


          <div class="row">

            <div class="col-lg-6 mb-4">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                </div>
               <CategoriDB/>
              </div>
            </div>


            <div class="col-lg-6 mb-4">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>
                <div class="card-body">
                  <div class="row">
                   
                  <DbOption/>
                  <DbOption/>
                  <DbOption/>
                  <DbOption/>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>




      <Footer />

    </div>

  </div>
      
    
  );
}

export default App;
