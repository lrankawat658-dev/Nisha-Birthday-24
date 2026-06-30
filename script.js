// ===============================
// Happy Birthday Nisha ❤️
// Developed for Lalit ❤️
// ===============================

// Button
const btn = document.getElementById("openBtn");

// Music
const music = document.getElementById("music");

// Gallery Images
const gallery = document.querySelectorAll(".gallery img");

let current = 0;

// --------------------
// Open Button
// --------------------

btn.addEventListener("click", () => {

    music.play();

    btn.innerHTML = "❤️ I Love You ❤️";

    document.body.style.scrollBehavior = "smooth";

    document.querySelector(".gallery").scrollIntoView({

        behavior:"smooth"

    });

});

// --------------------
// Slideshow
// --------------------

function slideshow(){

gallery.forEach((img)=>{

img.style.opacity=".3";

img.style.transform="scale(.9)";

});

gallery[current].style.opacity="1";

gallery[current].style.transform="scale(1.05)";

current++;

if(current>=gallery.length){

current=0;

}

}

setInterval(slideshow,2500);

// --------------------
// Floating Hearts
// --------------------

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-30px";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animation="fall 6s linear";

heart.style.zIndex="9999";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(createHeart,350);

// --------------------
// Heart Animation
// --------------------

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

0%{

transform:translateY(-10vh);

opacity:1;

}

100%{

transform:translateY(110vh);

opacity:0;

}

}

`;

document.head.appendChild(style);

// --------------------
// Surprise Popup
// --------------------

setTimeout(()=>{

alert(

`🎂 Happy Birthday My Queen ❤️

Nisha,

Thank You For Being The Most Beautiful Part Of My Life.

I Love You Forever ❤️

- Lalit`

);

},15000);