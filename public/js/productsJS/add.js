window.addEventListener("load", function(){
    let form = document.querySelector("#form");
    let formElements = Array.from(form.elements);
    formElements.pop();
    let inputErrors = {};

    for (let oneInput of formElements) {
        oneInput.addEventListener("blur", function() {
          let inputValue = this.value;
          if (validator.isEmpty(inputValue)) {

              this.classList.add("is-invalid");
              this.classList.remove("is-valid");
              this.nextElementSibling.innerHTML = `El campo <b>${this.name}</b> es obligatorio`

              inputErrors[this.name] = true

          } else {
           
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");

            delete inputErrors[this.name];
           

          }
        });
          

          if(oneInput.name === "categoria"){
            oneInput.addEventListener("blur",function(){
             let inputCategoria = this.value;
             if (!validator.isEmpty(inputCategoria) && !validator.isAlpha(inputCategoria)) {

              this.classList.add("is-invalid");
              this.classList.remove("is-valid");
              this.nextElementSibling.innerHTML = "Campo de texto"
              inputErrors[this.name] = true

          } 

            })

          }
          
          if(oneInput.name === "nombre"){
            oneInput.addEventListener("blur",function(){
             let inputNombre = this.value;
             if (!validator.isEmpty(inputNombre) && !validator.isAlpha(inputNombre)) {

              this.classList.add("is-invalid");
              this.classList.remove("is-valid");
              this.nextElementSibling.innerHTML = "Campo de texto"
              inputErrors[this.name] = true

          } 

            })

          }
          if(oneInput.name === "precio_individual"){
            oneInput.addEventListener("blur",function(){
             let inputPrecioInd = this.value;
             if (!validator.isEmpty(inputPrecioInd) && !validator.isNumeric(inputPrecioInd)) {

              this.classList.add("is-invalid");
              this.classList.remove("is-valid");
              this.nextElementSibling.innerHTML = "Campo numérico"
              inputErrors[this.name] = true

           } 

            })

          }
          if(oneInput.name === "precio_mediana"){
            oneInput.addEventListener("blur",function(){
             let inputPrecioMed = this.value;
             if (!validator.isEmpty(inputPrecioMed) && !validator.isNumeric(inputPrecioMed)) {

              this.classList.add("is-invalid");
              this.classList.remove("is-valid");
              this.nextElementSibling.innerHTML = "Campo numérico"
              inputErrors[this.name] = true

           } 

            })

          }

          if(oneInput.name === "precio_grande"){
            oneInput.addEventListener("blur",function(){
             let inputPrecioGran = this.value;
             if (!validator.isEmpty(inputPrecioGran) && !validator.isNumeric(inputPrecioGran)) {

              this.classList.add("is-invalid");
              this.classList.remove("is-valid");
              this.nextElementSibling.innerHTML = "Campo numérico"
              inputErrors[this.name] = true

           } 

            })

          }

          if(oneInput.name === "detalle"){
            oneInput.addEventListener("blur",function(){
             let inputDetalle = this.value;
             if (!validator.isEmpty(inputDetalle) && validator.isNumeric(inputDetalle)) {

              this.classList.add("is-invalid");
              this.classList.remove("is-valid");
              this.nextElementSibling.innerHTML = "Campo de texto"
              inputErrors[this.name] = true
               } 

            })

          }

          if(oneInput.name === "producto"){
            oneInput.addEventListener("blur",function(){
             let inputProducto = this.value;
             if (!validator.isEmpty(inputProducto) && !validator.isAlpha(inputProducto)) {

              this.classList.add("is-invalid");
              this.classList.remove("is-valid");
              this.nextElementSibling.innerHTML = "Campo de texto"
              inputErrors[this.name] = true
               } 

            })

          }

           if( oneInput.name == "avatar"){
               oneInput.addEventListener("change",function() {
                let fileExtension = this.value.split(".").pop();
                let acceptedExtensions = ["jpg", "jpeg", "png", "webm", "svg"];
                 if (!acceptedExtensions.includes(fileExtension)) {
 
                 this.classList.add("is-invalid");
                 this.classList.remove("is-valid");

                this.nextElementSibling.innerHTML = `Formato invalido, los formatos pueden ser: ${acceptedExtensions}`;
                inputErrors[this.name] = true

               } else {
                  this.classList.remove("is-invalid");
                  this.classList.add("is-valid");
                  this.nextElementSibling.innerHTML ="";
                  delete inputErrors[this.name];

                }

              });
            }
      
    }

    form.addEventListener("submit",function(e){  
      formElements.forEach(function(oneInput){
        if(validator.isEmpty(oneInput.value)){
          inputErrors[oneInput.name] = true;
          oneInput.classList.add("is-invalid");
          oneInput.nextElementSibling.innerHTML = "Campo obligatorio"
        }
      })
      if(Object.keys(inputErrors).length > 0 ) {
        e.preventDefault();
    }
    })
 

  })
  