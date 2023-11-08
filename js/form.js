const boton = document.querySelector(".button");

document.getElementById("alertCard").style.display = 'none';


boton.addEventListener("click", function(e) {
    e.preventDefault();
    
    const formulario = document.querySelector("form");
    let valorSeguro = "";
    let seguro = formulario.radioDefault.value;

    if(seguro === "Básico"){
        valorSeguro = "500";
    }
    else if(seguro === "Intermedio"){
        valorSeguro = "1000";
    }
    else{
        valorSeguro = "1500";
    }
    
    document.querySelector(".montoSeguro").innerHTML = "El seguro solicitado es de $" + valorSeguro;
    
    document.getElementById("alertCard").style.display = '';

    formulario.reset();
});


