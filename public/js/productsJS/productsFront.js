window.addEventListener("load", function(){
    let select =  document.querySelector("select.precio")
   
    select.addEventListener ("click", function(){ 
     
        let precioInd = document.querySelector("option.individual");
        let valor = document.querySelector("option.individual value")
        if (precioInd.value == valor) {
            alert("pachu")
        }


    })
})