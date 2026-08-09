function generateTitle(){
let topic = document.getElementById("titleInput").value;

if(topic.trim()==""){
alert("Please enter a video topic!");
return;
}

document.getElementById("titleResult").innerHTML =
"🔥 10 Amazing " + topic + " Ideas You Must Try in 2026";
}


function generateScript(){
let idea = document.getElementById("scriptInput").value;

if(idea.trim()==""){
alert("Please enter a video idea!");
return;
}

document.getElementById("scriptResult").innerHTML =
"Hook: Did you know " + idea + "?<br><br>" +
"Main: Explain the topic with examples and useful tips.<br><br>" +
"Ending: Subscribe for more amazing content.";
}


function generateTags(){
let niche = document.getElementById("tagInput").value;

if(niche.trim()==""){
alert("Please enter a niche!");
return;
}

document.getElementById("tagResult").innerHTML =
"#" + niche + " #AI #YouTube #Creator #Viral #Trending";
}


function generateThumbnail(){
let topic = document.getElementById("thumbInput").value;

if(topic.trim()==""){
alert("Please enter thumbnail topic!");
return;
}

document.getElementById("thumbResult").innerHTML =
"Thumbnail Concept:<br><br>" +
"Topic: " + topic +
"<br>🔥 Big eye-catching subject" +
"<br>🎨 High contrast background" +
"<br>⚡ Bold readable text" +
"<br>👀 Curiosity element for high CTR";
}


function generateHook(){
let topic = document.getElementById("hookInput").value;

if(topic.trim()==""){
alert("Please enter video topic!");
return;
}

document.getElementById("hookResult").innerHTML =
"Hook 1: You won't believe what happens next about " + topic +
"<br><br>Hook 2: The secret nobody tells you about " + topic +
"<br><br>Hook 3: Stop scrolling! Learn this about " + topic;
}
