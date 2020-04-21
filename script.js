function openLeftMenu() {
    document.getElementById("left-menu").classList.add("open")
}
function closeLeftMenu() {
    document.getElementById("#left-menu").classList.remove("open");
}

window.addEventListener('mouseup', function(event) {
    var leftMenu = document.getElementById('#left-menu');
    if(event.target != leftMenu && event.target.parentNode != leftMenu) {
        
    }
})