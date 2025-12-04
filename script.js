//Dom Manupulation Is The Art Of Changing The Document Structure Style And Content 
let h1 = document.querySelector("h1");
h1.textContent = "Hello World";
h1.style.color = "yellow";
h1.style.textAlign = "center";

let p = document.querySelector("p");
p.textContent = "This is a simple paragraph changed using DOM manipulation.";
p.style.fontSize = "20px";
p.style.color = "black";

let h3 = document.querySelector("h3");
window.addEventListener("keydown", function(dets){
    console.dir(dets.key);
    h3.textContent = dets.key;
})

//Hello I Am Naitik Kumar , I Am Learning Web Development From The Channel Sheryians Coding School

//I Am Very Happy To Be A Part Of This Channel
//I Want To Become A Full Stack Web Developer




