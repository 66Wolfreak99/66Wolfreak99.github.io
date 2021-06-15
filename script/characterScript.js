var link = document.getElementById("randomCharLink");
var image = document.getElementById("randomCharImg");

var characterContainer = document.getElementById("charContainer")

console.log(character_list)

/** Loads all characters from the array and displays them in the character screen */
function loadCharList(el){

    el.innerHTML = ""

    character_list.character.forEach( function(c) {
        let a = document.createElement("A");
        a.classList.add("character-element");
        if(c.page !== ""){
            a.href = c.page;
        }else {
            a.href = "404.html"
        }

        let img = document.createElement("img");
        if(c.image !== ""){
            img.src = c.image
        }else{
            img.src = "img/placeholder.png"
        }

        if(c.notWip){
            img.classList.add("not-wip")
        }else{
            img.classList.add("wip")
        }

        a.appendChild(img);
        a.innerHTML += ("<br>" + c.name.first);
        a.title = (c.name.first + " " + c.name.last)

        
        el.appendChild(a);
        

    })
}

/** Selects a random character in the characters list to display in the home page */
function randomChar(){

    const random_character_list = character_list.character.filter(function (char) {return char.page && char.image !== ""});
    console.log(random_character_list)


    const random = Math.floor(Math.random() * random_character_list.length);
        console.log(random_character_list[random].name)

        link.href = random_character_list[random].page;
        image.src = random_character_list[random].image;
        image.style.backgroundImage = "url(" +  random_character_list[random].image +")";
        
        
    
}



