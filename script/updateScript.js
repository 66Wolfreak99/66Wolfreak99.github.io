dom = document.getElementById("test");
lastUpdated = document.getElementById("last-updated");

/** Fetches the latest update and displays its date */
function loadDateData(el){
    el.innerHTML = "<span style='font-style:italic; font-weight:bold'>Last updated: </span>";
    let u = update_log.updates[0];
    let date = document.createElement("SPAN");
    date.style = "font-style:italic";
    date.innerHTML = u.date;
    el.appendChild(date);

}



/** Fetches all updates from the update logs and displays them in the updates page */
function loadData(el){
    
    el.innerHTML = "<tr class='current'></tr>";
    
    update_log.updates.forEach(function(u) {  //forEach(u => { 
         // Créer "un update"
         let entry = document.createElement("TR"); 
    
         let td = document.createElement("TD");
         td.classList.add("cel");
         td.valign = "top";
         td.align = "left";
         td.innerHTML = u.date /* + '(v: <small>' + u.version + '</small>)'*/;
         //entry.innerHTML += '<td id="cel" valign="top" align="left">' + u.date + '(v: <small>' + u.version + '</small>)';
         
         let sub_entry = document.createElement("UL"); 

         // Print chaque nouveau feature
         u.content.forEach(function(c) {   //forEach(c => { 
             sub_entry.innerHTML += ("<li>"+c+"</li>");
         });

         td.appendChild(sub_entry);
         entry.appendChild(td);

         // Ajout d'un élément
         el.appendChild(entry);
    });

  }
  ;

