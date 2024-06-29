function elementCreateAndAssign(element = String, {css, attributeName, attribute, content}){

    const newEl = document.createElement(element);
    
    if (css){

        if (typeof css === "object"){
            for (let classEl = 0; classEl < css.length; classEl++ ){
                newEl.classList.add(css[classEl]);
            }
        }
        else if (typeof css === "string"){
            newEl.classList.add(css);
        }
    };

    if (attribute && attributeName){
       

        if (typeof attributeName === "object" && typeof attribute === "object"){
            for (let attEl = 0; attEl < attributeName.length; attEl++ ){
                newEl.setAttribute(attributeName[attEl], attribute[attEl]);
            }
        }
        else if (typeof attributeName === "string" && typeof attribute === "string"){
            newEl.setAttribute(attributeName, attribute);
        }

    };

    if (content){
        newEl.textContent = content;
    }

    return newEl
};


function paragraphinator(text){
    const splitText = text.split("#");
    return splitText
 }

export {elementCreateAndAssign}
export {paragraphinator}