var cambiarBg = "bg1";
var cambiarClase= document.getElementById("boton");
var cambiarClase2= document.getElementById("boton2");
var cambiarClase3= document.getElementById("boton3");
var cambiarClase4= document.getElementById("boton4");
var cambiarClase5= document.getElementById("boton5");
var cambiarClase6= document.getElementById("boton6");
var cambiarClase7= document.getElementById("boton7");
var cambiarClase8= document.getElementById("boton8");
var cambiarClase9= document.getElementById("boton9");
var cambiarClase10= document.getElementById("boton10");
var cambiarClase11= document.getElementById("boton11");
var cambiarClase12= document.getElementById("boton12");

function cambiar() {
    if(cambiarBg=="bg1"){
        cambiarBg=cambiarClase;
        cambiarClase.classList.add("bg3");
        cambiarClase2.classList.add("bg3");
        cambiarClase3.classList.add("bg3");
        cambiarClase4.classList.add("bg3");
        cambiarClase5.classList.add("bg3");
        cambiarClase6.classList.add("bg3");
        cambiarClase7.classList.add("bg3");
        cambiarClase8.classList.add("bg3");
        cambiarClase9.classList.add("bg3");
        cambiarClase10.classList.add("bg3");
        cambiarClase11.classList.add("bg3");
        cambiarClase12.classList.add("bg3");
        console.log("hola");
    }else{
        cambiarBg="bg1";
        cambiarClase.classList.remove("bg3");
        cambiarClase2.classList.remove("bg3");
        cambiarClase3.classList.remove("bg3");
        cambiarClase4.classList.remove("bg3");
        cambiarClase5.classList.remove("bg3");
        cambiarClase6.classList.remove("bg3");
        cambiarClase7.classList.remove("bg3");
        cambiarClase8.classList.remove("bg3");
        cambiarClase9.classList.remove("bg3");
        cambiarClase10.classList.remove("bg3");
        cambiarClase11.classList.remove("bg3");
        cambiarClase12.classList.remove("bg3");


        console.log("adios");
    }
    
}