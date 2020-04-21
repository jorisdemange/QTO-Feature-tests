function open-left-menu() {
    document.getElementById("left-menu").classList.add("open")
}
function close-left-menu() {
    document.getElementById("#left-menu").classList.remove("open");
}

window.addEventListener('mouseup', function(event) {
    var left-menu = document.getElementById('#left-menu');
    if(event.target != leftMenu && event.target.parentNode != leftMenu) {
        
    }
})