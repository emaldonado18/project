var snOpen = document.getElementById("sn-open"),
snClose = document.getElementById("sn-close"),
sn = document.getElementById("sn");

snOpen.addEventListener("click", snAnimOpen);
snClose.addEventListener("click", snAnimClose);


function snAnimOpen(){
    sn.classList.add("open");
}
function snAnimClose(){
    sn.classList.remove("open");
}
