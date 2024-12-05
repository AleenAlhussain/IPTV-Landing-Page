const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

window.addEventListener("load",()=>{
    document.querySelector(".js-page-loader").classList.add("fade-out");
    setTimeout(()=>{
        document.querySelector(".js-page-loader").style.display="none";
    },600);
});

 $(document).ready(function () {


//     // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });


      // click to scroll top
      $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});

$(function() {
    $(".en").click(function(){
      $(".langauge-selected").text("English");
      $(".langauge-selected").removeClass("change-ar");
      $(".langauge-selected").addClass("change-en");
  
    });
  });
  
  $(function() {
    $(".ar").click(function(){
      $(".langauge-selected").text("Arabic");
      $(".langauge-selected").removeClass("change-en");
      $(".langauge-selected").addClass("change-ar");
      
    });
  });


function testimonialSlider(){
    const carouselOne = document.getElementById('carouselOne');
    if(carouselOne)
    {
        carouselOne.addEventListener('slide.bs.carousel', function () {
            const activeItem=this.querySelector(".active");
            console.log(activeItem);
            document.querySelector(".js-testimonial-img").src=
            activeItem.getAttribute("data-js-testimonial-img");
          })
    }
}
testimonialSlider();


function headerMenu(){
    const menu=document.querySelector(".js-header-menu"),
   backdrop=document.querySelector(".js-header-backdrop");

   function toggleMenu(){
menu.classList.toggle("open");
backdrop.classList.toggle("active");
document.body.classList.toggle("overflow-hidden")
   }
   

   document.querySelectorAll(".js-menu-toggler").forEach((item)=>{
item.addEventListener("click",toggleMenu);
   });

backdrop.addEventListener("click",toggleMenu);


function  collapse(){
    menu.querySelector(".active").removeAttribute("style");
    menu.querySelector(".active").classList.remove("active")

}
   menuCollapseBreakpoint=991;
   menu.addEventListener("click",(event)=>{
const {target}=event;
    if(target.parentElement.classList.contains("active")){
        collapse();
        return;
    }
    if(menu.querySelector(".active"))
    {
        collapse();
    }

    target.parentElement.classList.add("active");
    target.nextElementSibling.style.maxHeight=target.nextElementSibling.style.scrollHeight + "px";

   });

window.addEventListener("resize",function(){
if(this.innerWidth > menuCollapseBreakpoint && menu.classList.contains("open"))
{
    toggleMenu();
}

if(this.innerWidth > menuCollapseBreakpoint && menu.querySelector(".active"))
{
    collapse();
}
});
}
headerMenu();


function styleSwitcherToggler(){
const styleSwitcher=document.querySelector(".js-style-switcher"),
styleSwitcherToggler=document.querySelector(".js-style-switcher-toggler");
styleSwitcherToggler.addEventListener("click",function(){
    styleSwitcher.classList.toggle("open");
    this.querySelector("i").classList.toggle("fa-times");
    this.querySelector("i").classList.toggle("fa-cog");
});
}
styleSwitcherToggler();



// function themeColors(){
//     const colorStyle=document.querySelector(".js-color-style"),
//    themeColorsContainer=document.querySelector(".js-theme-colors");
//    themeColorsContainer.addEventListener("click",({target})=>{
     
//     if(target.classList.contains("js-theme-color-item")){
        
//     localStorage.setItem("color",target.getAttribute("data-js-theme-color"));
//     setColor();
// }
//    });

   
// function setColor(){
//     let path=colorStyle.getAttribute("href").split("/");
//      path=path.slice(0,path.length-1);
//      colorStyle.setAttribute("href",path.join("/")+"/"+localStorage.getItem("color")+".css");
//      if(document.querySelector(".js-theme-color-item.active")){
//         document.querySelector(".js-theme-color-item.active").classList.remove("active");
//      }
//      document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active");

// }

// if(localStorage.getItem("color")!==null){
//     setColor();
// }
// else{
//     const defaultColor=colorStyle.getAttribute("href").split("/").pop().split(".").shift();
//     document.querySelector("[data-js-theme-color=" + defaultColor + "]").classList.add("active");
//     console.log(defaultColor);

// }
// }

// themeColors();


function themeLightDark(){
const darkModeCheckbox=document.querySelector(".js-dark-mode");
darkModeCheckbox.addEventListener("click",function(){
if(this.checked){
    localStorage.setItem("theme-dark","true");
}
else{
    localStorage.setItem("theme-dark","false")

}
themeMode();
});
function themeMode(){
    if(localStorage.getItem("theme-dark")=="false"){
        document.body.classList.remove("t-dark");
    }
    else{
        document.body.classList.add("t-dark");
    }
}

if(localStorage.getItem("theme-dark")!==null){
    themeMode();
}
if(document.body.classList.contains("t-dark")){
    darkModeCheckbox.checked=true;
}

}

themeLightDark();

function themeGlassEffect(){
    const glassEffectCheckbox=document.querySelector(".js-glass-effect"),
    glassStyle=document.querySelector(".js-glass-style");

    glassEffectCheckbox.addEventListener("click",function(){
        if(this.checked){
            localStorage.setItem("glass-effect" , "true");
        }
        else{
            localStorage.setItem("glass-effect","false");
        }
        glass();
});
function glass(){
    if(localStorage.getItem("glass-effect")==="true"){
        glassStyle.removeAttribute("disabled");
    }
    else{
        glassStyle.disabled=true;
    }
}

if(localStorage.getItem("glass-effect")!==null){
    glass();
}
if(!glassStyle.hasAttribute("disabled")){
    glassEffectCheckbox.checked=true;
}

}

themeGlassEffect();

const slides=document.querySelector(".slider").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const indecator=document.querySelector(".indecator");
let index=0;
prev.addEventListener("click",function()
{
prevSlide();
updatecCircleindicator();
resetTimer();
});
next.addEventListener("click",function()
{
nextSlide();
updatecCircleindicator();
resetTimer();
});

function changeSlide(){
    for(let i=0;i<slides.length;i++)
    {
        slides[i].classList.remove("active");
    }
slides[index].classList.add("active");
}
function nextSlide(){
    if(index==slides.length-1){
        index=0;
    }
    else{
        index++;
    }
    changeSlide();
    
}

function prevSlide(){
    if(index==0){
        index=slides.length-1
    }
    else{
        index--;
    }
    changeSlide();
    
}


function circleleIndecator(){
    for(let i=0;i<slides.length;i++)
    {
        const div=document.createElement("div");
        div.innerHTML=i+1;
        div.setAttribute("onclick","indicateSlide(this)")
        div.id=i;
        if(i==0)
        {div.className="active";}

        indecator.appendChild(div);
    }
}

circleleIndecator();

function updatecCircleindicator(){
    for(let i=0;i<indecator.children.length;i++)
    {
        indecator.children[i].classList.remove("active");
    }
    indecator.children[index].classList.add("active");
}

function indicateSlide(element){
index=element.id;
changeSlide();
updatecCircleindicator();
resetTimer();
}
function resetTimer(){
    clearInterval(timer);
    timer=setInterval(autoPlay,4000);
}
function autoPlay(){
    nextSlide();
    updatecCircleindicator();
}
let timer=setInterval(autoPlay,4000);

