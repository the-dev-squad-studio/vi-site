window.onload = Resize;
window.addEventListener('resize', Resize);
let bgImage = document.getElementById("bg"); // "bg" is id of the background image element

function Resize() {
    let windowAspectRatio = window.innerHeight / window.innerWidth;
    let bgAspectRatio = bgImage.clientHeight / bgImage.clientWidth;
    if(windowAspectRatio < bgAspectRatio){
        bgImage.style.height = "auto";
        bgImage.style.width = "100%";
    }else{
        bgImage.style.height = "100%";
        bgImage.style.width = "auto";
    }
}