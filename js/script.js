let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let tit = document.getElementById("title");
let tit_1 = document.getElementById("title_1");
let tit_2 = document.getElementById("title_2");
let title = document.getElementById("tit_1");
let title_1 = document.getElementById("tit_111");
let title_2 = document.getElementById("tit_21");
let title_3 = document.getElementById("tit_122");
let title_4 = document.getElementById("tit_22");

let join = document.getElementById("tit_2");
let view = document.getElementById("tit_3");
let channel = document.getElementById("tit_4");
let country = document.getElementById("tit_5");
let skilled = document.getElementById("tit_6");
let channelT= document.getElementById("tit_7");
let right= document.getElementById("tit_8");
let sport= document.getElementById("tit_9");
let film= document.getElementById("tit_10");
let animate= document.getElementById("tit_11");
let series= document.getElementById("tit_12");
let whyluka= document.getElementById("tit_13");
// let services = document.getElementById("services");
// let servicesF= document.getElementById("tit_13");
let about = document.getElementById("about");
let aboutText = document.getElementById("about-text");
let contact = document.getElementById("contact");






arabic.onclick = ()=>{
    setLanugage("arabic");
    localStorage.setItem("Lang","arabic");
};

english.onclick = ()=>{
    setLanugage("english");
    localStorage.setItem("Lang","english");
};

onload = ()=>{
    setLanugage(localStorage.getItem("Lang"));
};
function setLanugage(getLanuage){
if(getLanuage === "arabic"){
  tit.innerHTML ="مزود خدمة iptv";
  tit_1.innerHTML ="مزود خدمة iptv";
  tit_2.innerHTML ="مزود خدمة iptv";
  title.innerHTML = "أفضل منصة على الإنترنت لمشاهدة قناتك المفضلة";
  title_1.innerHTML = "أفضل منصة على الإنترنت لمشاهدة قناتك المفضلة";
  title_2.innerHTML = "انضم الآن";
  title_3.innerHTML = "أفضل منصة على الإنترنت لمشاهدة قناتك المفضلة";
  title_4.innerHTML ="انضم الآن";

  join.innerHTML ="انضم الآن";
  view.innerHTML = "مشاهد";
  channel.innerHTML = "قناة";
  country.innerHTML = "بلد";
  skilled.innerHTML = "خبير";
  
  channelT.innerHTML = "قنوات لك";
  right.innerHTML = "ابحث عن القناة المناسبة لك";
  sport.innerHTML = "رياضة";
  film.innerHTML = "افلام";
  animate.innerHTML = "كرتون";
  series.innerHTML = "مسلسلات";
  channelT.innerHTML = "قنوات لك";
  whyluka.innerHTML = "خيارك الافضلLukaلماذا";
//   services.innerHTML = "خدماتنا";
//   servicesF.innerHTML = "نقدم لك أفضل الخدمات";
}
else if(getLanuage ==="english"){
  tit.innerHTML ="service provider iptv";
  tit_1.innerHTML ="service provider iptv";
  tit_2.innerHTML ="service provider iptv";
    title.innerHTML = "best online platform for whatch films";
  join.innerHTML ="join now";
  view.innerHTML = "viewers";
  channel.innerHTML = "channel";
  country.innerHTML = "countries";
  skilled.innerHTML = "skilled";
  whyluka.innerHTML = "why luka iptv?";
  right.innerHTML = "find the right channel for you";
  sport.innerHTML = "sport";
  film.innerHTML = "films";
  animate.innerHTML = "animate";
  series.innerHTML = "series";


}


}