function inicio(){
    alert("No me toques");
}

function interaccion(){
    document.getElementsByName["p"][0].onclick=inicio;
}

window.onload=inicio;