function inicio(){
    alert("No me toques");
}

function interaccion(){
    document.getElementsByTagName("h1")[0].onclick=inicio;
}

window.onload=interaccion;
