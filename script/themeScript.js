function swapStyleSheet(sheet) {
    document.getElementById("theme").setAttribute("href", sheet);  
}
function initate() {
    var style1 = document.getElementById("stylesheet1");
    var style2 = document.getElementById("stylesheet2");
    var style3 = document.getElementById("stylesheet3");
    var style4 = document.getElementById("stylesheet4");
    var style5 = document.getElementById("stylesheet5");

    style1.onclick = function () { swapStyleSheet("") };
    style2.onclick = function () { swapStyleSheet("./css/themes/dark_theme.css"); };
    style3.onclick = function () { swapStyleSheet("./css/themes/e621.css"); };
    style4.onclick = function () { swapStyleSheet("./css/themes/spring.css"); };
    style5.onclick = function () { swapStyleSheet("./css/themes/3d.css"); };
}
window.onload = initate;