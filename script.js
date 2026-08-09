function generateTitle(){
let topic = document.getElementById("titleInput").value;

document.getElementById("titleResult").innerHTML =
"🔥 " + topic + " - The Secret You Need To Know!";
}


function generateScript(){
let idea = document.getElementById("scriptInput").value;

document.getElementById("scriptResult").innerHTML =
"Hook: Did you know about " + idea + "?<br><br>" +
"Explain the topic with interesting facts and examples.<br><br>" +
"Ending: Subscribe for more amazing content!";
}


function generateTags(){
let niche = document.getElementById("tagInput").value;

document.getElementById("tagResult").innerHTML =
"#" + niche + " #AI #Creator #YouTube #Viral";
}
