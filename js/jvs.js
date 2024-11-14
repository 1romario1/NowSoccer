// function id(){
//     document.getElementById("Id").onclick=wi;
// }
function inicio(){
    alert("No me toques");
}

function interaccion(){
    document.getElementsByTagName("h1")[0].onclick=inicio;
}

window.onload=interaccion;

function videos(imgID,videoId,videoGeneral){
    const imagen=document.getElementById(imgID);
    const video=document.getElementById(videoId);
    const videoPrinicipal=document.getElementById(videoGeneral);

    imagen.addEventListener("click", function(){
        
        imagen.style.display="none";
        video.style.display="block";
    
        setTimeout(function(){
            video.style.opacity="1";
        },10);

        videoPrinicipal.play();
    });    
}

window.addEventListener("DOMContentLoaded", function(){
    videos("imagen","video1","video10");
    videos("imagen2","video2","video20");
    videos("imagen3","video3","video30");
});









