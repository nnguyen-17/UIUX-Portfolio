// Scroll to top button //
const btn = document.getElementById("myBtn");
window.onscroll=function() {
    if (document.documentElement.scrollTop > 100)
    {
        btn.style.display="block";
    } else {
        btn.style.display="none";
    }
};

function topFunction(){
document.documentElement.scrollTop=0;
}

//Navbar Color Change//
const nav= document.querySelector(".nav");
window.onscroll= function() {
    const top= window.scrollY;
    if (top >= 100){
        nav.classList.add("active")
    }else{
        nav.classList.remove("active");
    }
}

//Landing page typeout//
const text=document.querySelector(".sec-text")
const textLoad= () => {
    setTimeout(() => {
        text.textContent="UI/UX Designer.";
    }, 0);
    setTimeout(() => {
        text.textContent="Creative Explorer.";
    }, 4000);
    setTimeout(() => {
        text.textContent="Design Thinker.";
    }, 8000);
}
textLoad();
setInterval(textLoad, 12000)

