/* ==========================================
   SHANTI BEDSHEETS
   LUXURY WEBSITE V3
========================================== */

/* Sticky Navbar */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(15,15,15,.75)";
        header.style.backdropFilter = "blur(18px)";
        header.style.padding = "14px 8%";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

    }

    else{

        header.style.background = "rgba(18,18,18,.20)";
        header.style.backdropFilter = "blur(18px)";
        header.style.padding = "18px 8%";
        header.style.boxShadow = "none";

    }

});

/* ==========================================
   FADE UP ANIMATION
========================================== */

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.15

}

);

document.querySelectorAll(

".about,.collection,.contact,.stat-card,.collection-card,.contact-card"

).forEach(el=>{

el.classList.add("fade-up");

observer.observe(el);

});

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top = section.offsetTop-120;

const height = section.offsetHeight;

if(pageYOffset>=top){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});

/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

const buttons = document.querySelectorAll(

".primary-btn,.secondary-btn,.whatsapp-big,.nav-btn"

);

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transition=".35s";

button.style.transform="translateY(-4px) scale(1.02)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});

/* ==========================================
   HERO PARALLAX
========================================== */

window.addEventListener("scroll",()=>{

const hero = document.querySelector(".hero");

let value = window.scrollY;

hero.style.backgroundPositionY = value*0.35+"px";

});

/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(

"Shanti Bedsheets | Luxury Website Loaded Successfully"

);
