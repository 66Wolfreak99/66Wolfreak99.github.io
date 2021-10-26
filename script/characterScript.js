var link = document.getElementById("randomCharLink");
var image = document.getElementById("randomCharImg");

var characterContainer = document.getElementById("charContainer")

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
            img.src = c.image;
            img.style.backgroundColor = c.color
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

function loadMiscCharList(el){
    el.innerHTML = "";

    character_list.miscCharacter.forEach( function(c){
        if(c.image){
            let entry = document.createElement("TR");

            let tdImg = document.createElement('TD');
            tdImg.classList.add("miscCharImg");
            tdImg.valign = "middle";
            tdImg.align = "center";

            let a = document.createElement("A");
            a.href = c.image;

            let img = document.createElement("img")
            img.src = c.image;
            img.alt = c.code;

            a.appendChild(img);
            a.title = (c.name.first + " " + c.name.last);

            tdImg.appendChild(a);

            entry.appendChild(tdImg);

            let tdDesc = document.createElement("TD");
            tdDesc.classList.add("cel");
            tdDesc.classList.add("miscCharDesc")
            tdDesc.style.verticalAlign = "top"
            tdDesc.align = "left";

            let name = document.createElement("H2");
            name.classList.add("titleFont");
            name.innerHTML = c.name.first + " " + c.name.last;
            tdDesc.appendChild(name);
            tdDesc.innerHTML += 
            "<b>Age: </b> <span>" + c.age + "</span> <br><br>" +
            "<b>Gender: </b> <span>" + c.gender + "</span> <br><br>" +
            "<b>Species: </b> <span>" + c.species + "</span> <br><br>" +
            "<b>Occupation: </b> <span>" + c.occupation + "</span> <br><br>";

            entry.appendChild(tdDesc);
            el.appendChild(entry)
        }



        

            
    })
}

/** Selects a random character in the characters list to display in the home page */
function randomChar(){

    const random_character_list = character_list.character.filter(function (char) {return char.page && char.image !== ""});
    console.log(random_character_list)


    const random = Math.floor(Math.random() * random_character_list.length);
        console.log(random_character_list[random].name)

        link.href = random_character_list[random].page;
        link.title = random_character_list[random].name.first + " " + random_character_list[random].name.last;;
        image.src = random_character_list[random].image;
        image.style.backgroundImage = "url(" +  random_character_list[random].image +")";
        image.style.backgroundColor = random_character_list[random].color;
        
        
    
}



