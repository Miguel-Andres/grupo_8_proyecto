window.addEventListener("load", function(){
    let form = document.querySelector("#form");
    let formElements = Array.from(form.elements);
    formElements.pop();
    
    for (let oneInput of formElements) {
        oneInput.addEventListener("blur", function() {
          let inputValue = this.value;
          if (validator.isEmpty(inputValue)) {

              this.classList.add("is-invalid");
              this.nextElementSibling.innerHTML = `El campo <b>${this.name}</b> es obligatorio`
          } else {
           
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");


          }
        })
    }
  })
  