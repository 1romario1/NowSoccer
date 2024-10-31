function saludo(){
    alert("Hola");
}

function gesto(){
    for(var i=0; i<10; i++){
        document.getElementsByTagName("img")[i].onclick=saludo;
    }
}

window.onload=gesto;