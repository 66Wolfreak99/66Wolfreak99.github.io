link = document.getElementById("randomCharLink");
image = document.getElementById("randomCharImg");

console.log(character_list)
function randomChar(){

    const random_character_list = character_list.character.filter(function (char) {return char.bioPage === true});
    console.log(random_character_list)


    const random = Math.floor(Math.random() * random_character_list.length);

        link.href = random_character_list[random].page;
        image.src = random_character_list[random].image;
        image.style.backgroundImage = "url(" +  random_character_list[random].image +")";
        
        
    
}



