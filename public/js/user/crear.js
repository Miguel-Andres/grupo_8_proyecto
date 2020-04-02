/** 1ro capturamos el formulario */
let form = document.querySelector("#registerForm")
console.log(form)

/** 2ro capturamos el los elementos y los convertimos en formulario array*/

let formElements = Array.from(form.elements)


/** 3ro sacamos el ultimo elemento que es el boton*/

formElements.pop()
console.log(formElements)

/**4. iteremos sobre el array de campos y utilizamos el elemento blur */

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


    // validamos correo electronico en el misma iteracion 
    if(result.name === "email"){
        
        result.addEventListener("blur",function(){
            let inputEmail = this.value

            // validamos si es un formato de email//
            if(!validator.isEmail(inputEmail) && !validator.isEmpty(inputEmail)){
                //agreamos la clase is-invalid y aagregamos is valid si la tubiera
                this.classList.add("is-invalid")
                this.classList.remove("is-valid")

                this.nextElementSibling.innerHTML = `El campo tiene que ser un email`

            }


        })
    }
 }) 

 // despues de validar todo los campos vamos con el evento submit para que no se envie si los campos no cumplen (solo lo recibe el formulario no un botton)

 form.addEventListener("submit",function(e){
     // evitamos que se dispare el evento
     

 })

    

