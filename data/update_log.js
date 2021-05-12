var update = {
    "updates": [

      {
        "date": "May 12 2021",
        "content": [
            "I've added a hit counter on the home page. It counts how many visits it gets!",
            "I've moved the Updates into a Javascript file. it's no longer embedded into the HTML itself.",
            "That means i can do stuff like displaying the 'latest update' date on the homescreen! Pretty cool, huh?",
            "The older updates will still be kept in the html file <i>just in case</i>..."
  
          ]
      },
      
      {
        "date": "May 11 2021",
        "content": [
            "Minor UI change in Updates page",
            "I've released my first album, Rainfall! It's Drum n Bass! It's not perfect, as i'm still inexperienced when it comes to making music, but i'm pretty proud of it nonetheless!",
            "You can download my single for free <a href='./home-banner/TWW-Rainfall/TWW_Rainfall.zip'>here</a>!"
  
          ]
      },
  
      {
        "date": "May 6 2021",
        "content": [
            "Added art for Skript's bio page"
  
          ]
      },
      {
        "date": "May 3 2021",
        "content": [
            "Minor changes in the Art page",
            "Changed some of the images in the Art page to more SFW ones",
            "Reorganized my CSS code a bit"
  
          ]
      },
  
      {
        "date": "May 2 2021",
        "content": [
            "Reinstated the <a href='./art.html'>Art</a> page! Check it out!",
            "Art page made responsive",
            "Made a cool header image for the Art page"
  
          ]
      },
  
      {
        "date": "April 29 2021",
        "content": [
            "Some more tweaksies",
            "Added <a href='./characters/char_skript.html'>Skript</a>'s bio page! No art yet but that's coming soon!",
            "Added Likes/Dislikes on my OC bios",
            "Made the site a tad more 'responsive'"
  
          ]
      },
  
      {
        "date": "April 25 2021",
        "content": [
            "Minor tweakaroonies",
            "About page now has an F.A.Q!"
  
          ]
      },
  
      {
        "date": "April 23 2021",
        "content": [
            "I made the website more mobile-friendly! ;3"
  
          ]
      },
  
      {
        "date": "April 22 2021",
        "content": [
            "More minor tweaks lol",
            "Finished and added <a href='./characters/char_andy.html'>Andromeda</a>'s bio page!"
          ]
      },
  
      {
        "date": "April 20 2021",
        "content": [
            "Hey there! Now the latest update will appear on the homepage! Pretty cool, huh?",
            "Minor tweaks. The latest update is now highlighted"
          ]
      },
  
      {
        "date": "April 19 2021",
        "content": [
            "Moved Home nav buttons on top"
          ]
      },
  
      {
        "date": "April 18 2021",
        "content": [
            "Added a bunch more OCs",
            "Created a placeholder page",
            "Minor tweaks"
          ]
      },
      
      {
        "date": "April 17 2021",
        "content": [
            "Reorganized the Characters pages",
            "Added some thumbnails for the characters",
            "Added some new art",
            "Added Zen Dots font",
            "Minor adjustments"
          ]
      },
  
      {
        "date": "April 15 2021",
        "content": [
            "Completed <a href='./characters/char_zack.html'>Zack</a>'s bio",
            "Various corrections"
          ]
      },
      
      {
        "date": "April 14 2021",
        "content": [
            "My website has been hosted on Github Pages and is now online!"
          ]
      },
  
      {
        "date": "April 13 2021",
        "content": [
            "Layout update",
            "Removed redundant Art page, just use the art links instead",
            "Updated About page"
          ]
      },
  
      {
        "date": "November 2 2020",
        "content": [
            "Page history... page created!",
            "Art, About and Characters pages have been created!"
          ]
      },
  
      {
        "date": "October 19 2020",
        "content": [
            "Project start!"
          ]
      }
  
       
    ] 
  }

update_log_stringify = JSON.stringify(update);
update_log = JSON.parse(update_log_stringify);
dom = document.getElementById("test");
lastUpdated = document.getElementById("last-updated");

if(lastUpdated){
  function loadDateData(el){
    el.innerHTML = "<span style='font-style:italic; font-weight:bold'>Last updated: </span>";
    let u = update_log.updates[0];
    let date = document.createElement("SPAN");
    date.style = "font-style:italic";
    date.innerHTML = u.date;
    el.appendChild(date);

}
loadDateData(lastUpdated)

}

if(dom){
  function loadData(el){
    
    el.innerHTML = "<tr class='current'></tr>";
    
    update_log.updates.forEach(function(u) {  //forEach(u => { 
         // Créer "un update"
         let entry = document.createElement("TR"); 
    
         let td = document.createElement("TD");
         td.id = "cel";
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
  loadData(dom);
}








