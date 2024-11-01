// function saludo(){
//     alert("Siuu");
// }

// function gesto(){
//     for(var i=0; i<10; i++){
//         document.getElementsByTagName("img")[i].onclick=saludo;
//     }
// }

// window.onload=gesto;
// function niveles(){
//     alert("Nivel alto");
// }

// function conectar(){
//     for(var g=0;g<2;g++){
//         var h=document.getElementsByClassName("Nivel")[g].onclick=niveles;
//     }
    
// }

// window.onload=conectar;
function ejemplo(){
    alert("Echa pa alla");
}
function ejemplo2(){
    alert("Soy colombiano");
}

// function seleccion(){
//     document.querySelector("section p:last-child").onclick=ejemplo;
// }
// function seleccion(){

//     var h=document.querySelectorAll("section p, span");

//     for(var g=0;g<h.length;g++){
//         h[g].onclick=ejemplo;
//     }
// }
function seleccion(){
    document.getElementsByTagName("p")[0].onclick=ejemplo;
    document.getElementsByTagName("p")[1].onclick=ejemplo2;
}


window.onload=seleccion;

