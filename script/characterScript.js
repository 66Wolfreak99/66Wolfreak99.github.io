const char = document.getElementsByClassName("char");

/* gets array index from charCode */ 
function loadCharName(el){
    let c = character_list.character[charCode].name
    el[0].innerHTML = c + " - 66Wolfreak99";
    el[1].innerHTML = c;
    el[2].innerHTML = c;
    el[3].innerHTML = c;
}
loadCharName(char)

