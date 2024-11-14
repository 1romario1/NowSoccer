// function saludo(){
//     alert("Bienvenidos");
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
// function ejemplo(){
//     alert("Echa pa alla");
// }
// function ejemplo2(){
//     alert("Colombiano");
// }

// function seleccion(){
//     document.querySelector("section p:last-child").onclick=ejemplo;
// }
// function seleccion(){

//     var h=document.querySelectorAll("section p, span");

//     for(var g=0;g<h.length;g++){
//         h[g].onclick=ejemplo;
//     }
// }

// function conexion(){

//     var h=document.querySelectorAll("p");

//     for(var g=0;g<h.length;g++){
//         h[g].onclick=saludo;
//     }
   
// }

// window.onload=conexion;
// function seleccion(){
//     document.getElementsByTagName("p")[0].onclick=ejemplo;
//     document.getElementsByTagName("p")[1].onclick=ejemplo2;
// }

// function alerta(){
//     alert("Imagen presente");
// }

// function conexion(){

//     var h=document.getElementsByTagName("img");

//     for(var g=0;g<h.length;g++){
//         h[g].onclick=alerta;
//     }
// }

// window.onload=conexion;
// var fun;

const alerta={
    messi:"Anda pa acha",
    diaz:"Soy el mayor enemigo de los defensores",
    Rios:"Vem Quebrando",
    Rodriguez:"A a a amo colombia",
    Mbappe:"Quiero que mas niños tengan esta oportunidad",
    Ronaldo:"Mi clasico Siuuuu",
    Suarez:"No te limites a jugar",
    Gaucho:"Me dicen mago con la pelota",
    Junior:"No te quedes en el suelo",
    Yamal:"Entrena duro"
}

function mostraralert(event){
    const id=event.target.id;
    alert(alerta[id]);
}

window.addEventListener("load", ()=>{
    const imagen=document.querySelectorAll("img");
    imagen.forEach(img => {
        img.addEventListener("click", mostraralert);
    });
});



