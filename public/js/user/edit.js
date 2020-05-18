
let form = document.querySelector("#editForm")

// capturamos elementos y convertimos en array
let formElements = Array.from(form.elements)


// sacamos el ultimo elemento que es el botton
formElements.pop()


// recorremos el array de elementos

formElements.forEach(function result(result){
    /**asiganamos el evento blur a cada campo */
   result.addEventListener("blur", function(){
      /**capturamos el valor del campo */
      let inputValue = this.value ;

      /** validamos */
      if(validator.isEmpty(inputValue)){
          console.log(`el campo de ${this.name} no puede estar vacio`)
          //agregamos la clase is-invalid
          this.classList.add("is-invalid")
          this.classList.remove("is-valid")
          //<p></p> se modifica inmediatamente con el texto de error
          this.nextElementSibling.innerHTML = `El campo <b> ${this.name}</b> es obligatorio`

      }else{
          this.classList.remove("is-invalid")
          this.classList.add("is-valid")
      }
   })


  
}) 

//------------------------------Validator pass--------------------------------------------------//


let form2 = document.querySelector("#editPass")

// capturamos elementos y convertimos en array
let formElement = Array.from(form2.elements)


// sacamos el ultimo elemento que es el botton
formElement.pop()
console.log(formElements)

// recorremos el array de elementos

formElement.forEach(function result(result){
    /**asiganamos el evento blur a cada campo */
   result.addEventListener("blur", function(){
      /**capturamos el valor del campo */
      let inputValue = this.value ;

      /** validamos */
      if(validator.isEmpty(inputValue)){
          console.log(`el campo de ${this.name} no puede estar vacio`)
          //agregamos la clase is-invalid
          this.classList.add("is-invalid")
          this.classList.remove("is-valid")
          //<p></p> se modifica inmediatamente con el texto de error
          this.nextElementSibling.innerHTML = `El campo <b> ${this.name}</b> es obligatorio`

      }else{
          this.classList.remove("is-invalid")
          this.classList.add("is-valid")
      }
   })


  
}) 

//-----------------------DELETE---------------------//
     


 let formdelete = document.querySelector("#delete")
 

 

 formdelete.addEventListener("click", function(e){
   

         Swal.fire({
        

            reverseButtons : true ,
            icon: "warning" ,
            showCloseButton : true,
            title :"ELIMINAR",
            html :`Estas Seguro que quieres eliminar Tu Cuenta ` ,
            showCancelButton : true ,
            confirmButtonText :true ,
            confirmButtonText : "Eliminar Cuenta" ,
            cancelButtonText : "Regresar " ,
            confirmButtonColor : "red" ,
            cancelButtonColor : "#34566B" ,
            
                }).then( (result) => {
                    console.log(result.value)

                    if(result.value == true){

                        console.log("me vas a borrar")
                        formdelete.submit()
                        
                        

                    } else {
                         console.log("no me vas a borrar")
                         e.preventDefault()
                        
                    }
                   
                   
                }) 

 })
           




     
 




   
    
 
   





