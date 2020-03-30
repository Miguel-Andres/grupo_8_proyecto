window.addEventListener("load", function(){

  let form = document.querySelector("form.formulario");

  form.addEventListener("submit", function(e) {
      

      let errores =  [];
      let campoCategoria = document.querySelector("input.categoria");
     
      if (campoCategoria.value == "") {
          errores.push("el campo esta vacio");
      }else if ((campoCategoria.value != "") && (campoCategoria.value.length < 3 )) {
          errores.push("El campo debe tener mas de 3 caracteres")
      }/*if (campoCategoria != String) {
        errores.push("Campo de texto")
      }*/

      let campoNombre = document.querySelector("input.nombre");

      if (campoNombre.value == "") {
          errores.push("el campo esta vacio");
      } if ((campoNombre.value != "") && (campoNombre.value.length < 3 )) {
          errores.push("El campo debe tener mas de 3 caracteres")
      }/*if (campoNombre != String) {
        errores.push("Campo de texto")
      }*/

      let campoPrecio_individual = document.querySelector("input.precio_individual")

      if(campoPrecio_individual.value == "" ) {
        errores.push("el campo esta vacio")
      } /*if (campoPrecio_individual != Number) {
        errores.push("Campo numérico")
      }*/

      let campoPrecio_mediana = document.querySelector("input.precio_mediana")

      if(campoPrecio_mediana.value == "" ) {
        errores.push("el campo esta vacio")
      }/*if (campoPrecio_mediana != Number) {
        errores.push("Campo numérico")
      }*/

      let campoPrecio_grande = document.querySelector("input.precio_grande")

      if(campoPrecio_grande.value == "" ) {
        errores.push("el campo esta vacio")
      } /*if (campoPrecio_grande != Number) {
        errores.push("Campo numérico")
      }*/
       
      let campoDetalle = document.querySelector("input.detalle");

      if (campoDetalle.value == "") {
          errores.push("el campo esta vacio");
      } if ((campoDetalle.value != "") && (campoDetalle.value.length < 3 )) {
          errores.push("El campo debe tener mas de 3 caracteres")
      } /*if (campoDetalle != String) {
        errores.push("Campo de texto")
      }*/

      let campoProducto = document.querySelector("input.producto");

      if (campoProducto.value == "") {
          errores.push("el campo esta vacio");
      } if ((campoProducto.value != "") && (campoProducto.value.length < 3 )) {
          errores.push("El campo debe tener mas de 3 caracteres")
      }/*if (campoProducto != String) {
        errores.push("Campo de texto")
      }*/
      
      if(errores.length > 0) {
        e.preventDefault();

        let = ulErrores = document.querySelector("div.errores ul")
        for (let i = 0; i < errores.length; i++) {
          
            ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
        }
    }

       
   });
  })


  /*
     let errores =  [];

     let campoCategoria = document.querySelector("input.categoria")


        if(campoCategoria.value == "" ) {
          errores.push("campo vacio")
      } else if (campoCategoria.length < 3) {
         errores.push("El campo debe tener mas de 3 caracteres")
      }
        
    let campoNombre = document.querySelector("input.nombre")

        if(campoNombre.value == "" ) {
            errores.push("campo vacio")

        } if (campoNombre.length < 3) {
            errores.push("El campo debe tener mas de 3 caracteres")    
        }

    let campoPrecio = document.querySelector("input.precio_individual")
        if(campoPrecio.value == "" ) {
            errores.push("campo vacio")
        } if (campoPrecio !== Number) {
          errores.push("Campo numérico")
  
        }

        if(errores.length > 0) {
            e.preventDefault();

            let = ulErrores = document.querySelector("div.errores ul")
            for (let i = 0; i < errores.length; i++) {
              
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }
*/