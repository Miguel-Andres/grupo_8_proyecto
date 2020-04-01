window.addEventListener("load", function(){
  let form =  document.querySelector(".delete-button")
   form.addEventListener ("submit", function(e){ 
    let confirmacion  = confirm("Esta seguro que desea eliminar este elemento?")

    if(confirmacion === true) { 
    } else {
      e.preventDefault(e)
    };
  })
})
