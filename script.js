function generateTitle(){

let box=document.getElementById("titleResult");
let topic=document.getElementById("titleInput").value || "AI";

box.innerHTML="AI is thinking...";
box.className="result loading";

setTimeout(()=>{

box.innerHTML=
"10 Amazing "+topic+" Ideas You Must Try in 2026";

box.className="result";

},1000);

}



function generateScript(){

let box=document.getElementById("scriptResult");
let idea=document.getElementById("scriptInput").value || "AI Technology";

box.innerHTML="Creating script...";
box.className="result loading";

setTimeout(()=>{

box.innerHTML=
"Hook:<br>Did you know "+idea+" can change your life?<br><br>"+
"Main:<br>Explain the topic with simple examples.<br><br>"+
"Ending:<br>Follow for more amazing content.";

box.className="result";

},1000);

}



function generateTags(){

let box=document.getElementById("tagResult");
let niche=document.getElementById("tagInput").value || "AI";

box.innerHTML="Finding hashtags...";
box.className="result loading";

setTimeout(()=>{

box.innerHTML=
"#"+niche+" #AI #Technology #Creator #YouTube #Viral";

box.className="result";

},1000);

}
function generateThumbnail(){

let box=document.getElementById("thumbResult");

let topic=document.getElementById("thumbInput").value || "AI";

box.innerHTML="Creating thumbnail idea...";
box.className="result loading";


setTimeout(()=>{

box.innerHTML=
"Thumbnail Idea:<br><br>"+
"🔥 Big reaction face + bold text<br>"+
"🎨 High contrast colors<br>"+
"⚡ Topic: "+topic+"<br>"+
"📌 Add curiosity element";

box.className="result";


},1000);

}
function generateThumbnail(){

let box=document.getElementById("thumbResult");

let topic=document.getElementById("thumbInput").value || "AI";

box.innerHTML="Creating thumbnail idea...";
box.className="result loading";


setTimeout(()=>{

box.innerHTML=
"1Thumbnail Concept:<br><br>"+
"2Topic: "+topic+"<br>"+
"3• Big eye-catching subject<br>"+
"4• High contrast background<br>"+
"5• Bold readable text<br>"+
"6• Curiosity element for high CTR";

box.className="result";

},1000);

}
function generateHook(){

let box=document.getElementById("hookResult");

let topic=document.getElementById("hookInput").value || "AI";

box.innerHTML="Creating viral hook...";
box.className="result loading";


setTimeout(()=>{

box.innerHTML=
"Hook 1: You won't believe what happens next about "+topic+"<br><br>"+
"Hook 2: The secret nobody tells you about "+topic+"<br><br>"+
"Hook 3: Stop scrolling! Learn this about "+topic;

box.className="result";

},1000);

}

