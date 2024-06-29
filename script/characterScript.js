import { elementCreateAndAssign } from "./functions.js";
import { paragraphinator } from "./functions.js";

import characters from "../data/character_list.js"

let canSwitch = true
let currentChar = 0




function charList(){
    const charList = document.getElementById("characters");
    charList.innerHTML = "";

    const breadcrumb = document.getElementById("breadcrumbs");
    breadcrumb.innerHTML = "";



    const breadButtons = [
        elementCreateAndAssign("a", {css:"nav", attributeName:"href", attribute:"../index.html", content:"Back to home"}),
        elementCreateAndAssign("span", {css:"navBreadcrumb", content:"Characters"}),
    ]

    // generating breadcrumbs
    breadcrumb.append(breadButtons[0]);
    breadcrumb.append(elementCreateAndAssign("span", {content:" | "}));
    const b = elementCreateAndAssign("b","");
    b.append(breadButtons[1]);
    breadcrumb.append(b);

    for (let i = 0; i < characters.length; i++){
        // creating link element
        const charButton = elementCreateAndAssign("a", {css:"character-element", attributeName:["href", "title"], attribute: ["#", `${characters[i].name.first} ${characters[i].name.last}`]});

        // vreating and insertting image
        const img = elementCreateAndAssign("img", {attributeName: ["src", "alt"], attribute:[characters[i].image, characters[i].name.first]});
        img.style.backgroundColor = characters[i].color;
        if(characters[i].notWip){img.classList.add("not-wip")} else {img.classList.add("wip")};

        // creating and inserting name
        charButton.append(img, elementCreateAndAssign("br",""));
        charButton. append(elementCreateAndAssign("span", {content:characters[i].name.first}));

        charButton.addEventListener("click", (event) =>{
            event.preventDefault();
            if(canSwitch && (currentChar !== (i+1))){
                    
                canSwitch=false;
                currentChar = (i+1);

                const dom = document.getElementById("content");
                const linkElements = document.getElementsByClassName("character-element");
                for(const element of linkElements){
                    element.classList.add("character-element-small");
                }

                content.style.opacity = "0";

                setTimeout(()=>{
                    dom.innerHTML = "";
                    createCharacterPage(characters[i]);
                },200);

                setTimeout(()=>{
                    content.style.opacity = "1";
                },400);

                setTimeout(()=>{
                    canSwitch=true;
                },200);

            };
        });
    
            charList.append(charButton);
    }
    
};





function createCharacterPage(char){
    const charInfo = [
        `${char.name.first} ${char.name.last}`,
        ["Age: ", char.age],
        ["Gender: ", char.gender],
        ["Species: ", char.species],
        ["Occupation: ", char.occupation],
        ["Hobbies: ", char.hobbies]
    ];


    const bc1 =  elementCreateAndAssign("a", {css:"nav", attributeName:"href", attribute:"../index.html", content:"Back to home"});
    const bc2 =  elementCreateAndAssign("a", {css:"nav", attributeName:"href", attribute:"#", content:"Characters"});
    const bc3 =  elementCreateAndAssign("span", {css:"navBreadcrumb", content:charInfo[0], attributeName:"id", attribute:"currentChar"});

    
    bc2.addEventListener("click",() => {
        
        
        canSwitch=false;
        currentChar = 0;

        const dom = document.getElementById("content");

        content.style.opacity = "0";
        const linkElements = document.getElementsByClassName("character-element");
        for(const element of linkElements){
            element.classList.remove("character-element-small");
        };
        
        setTimeout(()=>{
            dom.innerHTML = "";
            charList();
        },200);

        setTimeout(()=>{
            dom.innerHTML = "";
            charList();
        },200);

        setTimeout(()=>{
            content.style.opacity = "1";
        },400);

        setTimeout(()=>{
            canSwitch=true;
        },200);       

    });

    const breadcrumb = document.getElementById("breadcrumbs");
    breadcrumb.innerHTML = "";

    breadcrumb.append(bc1);
    breadcrumb.append(elementCreateAndAssign("span", {content:" | "}));

    breadcrumb.append(bc2);
    breadcrumb.append(elementCreateAndAssign("span", {content:" | "}));

    const b = elementCreateAndAssign("b","");
    b.append(bc3);
    breadcrumb.append(b);

    const bio = char.bio;
    const historyParagraphs = paragraphinator(bio.history);
    const persoParagraphs = paragraphinator(bio.personality);
    
    const content = document.getElementById("content");


    // Info
    const info = elementCreateAndAssign("article", {css:"info"});

    const infoCharacter = elementCreateAndAssign("div", {css: "info__character"})
    const infoDetails = elementCreateAndAssign("div", {css: ["info__details", "cel"]})


    const infoCharacterImg = elementCreateAndAssign("img", {attributeName: ["src", "alt"], attribute: [char.full_image, charInfo[0]]});
    infoCharacter.append(infoCharacterImg)

    for (let i = 0; i < charInfo.length; i++){

        let infoEl;
        if(i === 0){

            infoEl = elementCreateAndAssign("h1", {css: ["titleFont", "info__details--name"], content: charInfo[i]});

        }else {
            infoEl = elementCreateAndAssign("p", {css:""})

            const infoElCont = [
                elementCreateAndAssign("span", {css:["titleFont", "info__details--title"], content: charInfo[i][0]}),

                elementCreateAndAssign("span", {content: charInfo[i][1]})
            ]

            infoEl.append(infoElCont[0]);
            infoEl.append(infoElCont[1]);
        };


        infoDetails.append(infoEl)
    }
    
    infoDetails.append(elementCreateAndAssign("hr",""));

    const infoLikes = elementCreateAndAssign("div", "");
    infoLikes.append(elementCreateAndAssign("p",{css:"titleFont", content:"Likes"}));
    const infoLikesUl = elementCreateAndAssign("ul", "")
    for (const like of char.likes){
        const el = elementCreateAndAssign("li",{content: like});
        infoLikesUl.append(el) 
    };
    infoLikes.append(infoLikesUl);

    const infoDislikes = elementCreateAndAssign("div", "");
    infoDislikes.append(elementCreateAndAssign("p",{css:"titleFont", content:"Disikes"}));
    const infoDislikesUl = elementCreateAndAssign("ul", "")
    for (const dislike of char.dislikes){
        const el = elementCreateAndAssign("li",{content: dislike});
        infoDislikesUl.append(el) 
    };
    infoDislikes.append(infoDislikesUl);

    infoDetails.append(infoLikes, infoDislikes)


    // Bio
    const history = elementCreateAndAssign("article", {css:"bio"});
    const personality = elementCreateAndAssign("article", {css:"bio"});

    const historyTitle = elementCreateAndAssign("h2",{css: "titleFont", content: "History"});
    const historyContent = elementCreateAndAssign("div",{css: "bio__content"});
    for(const paragraph of historyParagraphs){
        const historyP = elementCreateAndAssign("p",{content: paragraph});
        historyContent.append(historyP)
    }

    const persoTitle = elementCreateAndAssign("h2",{css: "titleFont", content: "Personality"});
    const persoContent = elementCreateAndAssign("div",{css: "bio__content"});
    for(const paragraph of persoParagraphs){
        const persoP = elementCreateAndAssign("p",{content: paragraph});
        persoContent.append(persoP)
    }

    // Extras
    const extra = elementCreateAndAssign("article", {css: ["cel", "extra"]})
    const extraTitle = elementCreateAndAssign("h2", {css: "titleFont", content:"Extras"});
    const extraList = elementCreateAndAssign("ul", "")

    for(let extraEl of char.extras){
        const elLi = elementCreateAndAssign("li", "");
        const elLink = elementCreateAndAssign("a", {attributeName:"href", attribute: extraEl[1], content: extraEl[0]})

        elLi.append(elLink)
        extraList.append(elLi)
    }
    

    // Append
    info.append(infoCharacter, infoDetails)

    history.append(historyTitle, historyContent);
    personality.append(persoTitle, persoContent);

    extra.append(extraTitle, extraList)

    content.append(info, history, personality,extra);
   


}

/** Loads all characters from the array and displays them in the character screen */
function loadCharList(){
    const element = document.getElementById("charContainer")
    element.innerHTML = "";

    for(const character of characters){
        let page;
        if(character.page){page = character.page} else {page = "404.html"};

        let imgUrl
        if(character.image){imgUrl = character.image} else {imgUrl = "img/placeholder.png"};

        const a = elementCreateAndAssign("a", {css:"character-element", attributeName:["href", "title"], attribute: [page, `${character.name.first} ${character.name.last}`]});

        const img = elementCreateAndAssign("img", {attributeName: ["src", "alt"], attribute:[imgUrl, character.name.first]});
        img.style.backgroundColor = character.color;
         if(character.notWip){img.classList.add("not-wip")} else {img.classList.add("wip")};
        console.log(img)

        a.append(img, elementCreateAndAssign("br",""));
        a.innerHTML += character.name.first;

        element.append(a)
        
    };

    // character_list.character.forEach( function(c) {
    //     let a = document.createElement("A");
    //     a.classList.add("character-element");
    //     if(c.page !== ""){
    //         a.href = c.page;
    //     }else {
    //         a.href = "404.html"
    //     }

    //     let img = document.createElement("img");
    //     if(c.image !== ""){
    //         img.src = c.image;
    //         img.style.backgroundColor = c.color
    //     }else{
    //         img.src = "img/placeholder.png"
    //     }

    //     if(c.notWip){
    //         img.classList.add("not-wip")
    //     }else{
    //         img.classList.add("wip")
    //     }

    //     a.appendChild(img);
    //     a.innerHTML += ("<br>" + c.name.first);
    //     a.title = (c.name.first + " " + c.name.last)

        
    //     element.appendChild(a);
        

    // })

    
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

    // const random_character_list = character_list.character.filter(function (char) {return char.page && char.image !== ""});
    // console.log(random_character_list)


    const random = Math.floor(Math.random() * characters.length);

    const link = document.getElementById("randomCharLink");
    const image = document.getElementById("randomCharImg");

    link.href = characters[random].page;
    link.title = characters[random].name.first + " " + characters[random].name.last;;
    image.src = characters[random].image;
    image.style.backgroundImage = `url( ${characters[random].image} )`;
    image.style.backgroundColor = characters[random].color;
    
}


// createCharacterPage(characters[0])

if(document.getElementById("dynamicChar")){
    charList()
}

if(document.getElementById("oldCharList")){
    loadCharList()
}

if(document.getElementById("randomCharLink")){
    randomChar()
}

