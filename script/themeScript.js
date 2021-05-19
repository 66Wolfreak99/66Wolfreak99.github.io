function swapStyleSheet(sheet) {
    document.getElementById("theme").setAttribute("href", sheet);
}
function initate() {
    var defaultTheme = document.getElementById("default");
  //var default3dTheme = document.getElementById("3d");
    var darkTheme = document.getElementById("dark");
    var e621Theme = document.getElementById("e621");
    var springTheme = document.getElementById("spring");
    

    defaultTheme.onclick = function () { swapStyleSheet("","") };
  //default3dTheme.onclick = function () { swapStyleSheet("./css/themes/3d.css"); };
    darkTheme.onclick = function () { swapStyleSheet("./css/themes/dark_theme.css",); };
    e621Theme.onclick = function () { swapStyleSheet("./css/themes/e621.css"); };
    springTheme.onclick = function () { swapStyleSheet("./css/themes/spring.css"); };
    
}
window.onload = initate;