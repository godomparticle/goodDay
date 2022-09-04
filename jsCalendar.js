const monthEl=document.querySelector('.date h1');
const fullDateEl=document.querySelector('.date p');
const daysEl=document.querySelector(".days");
const months=["january","february","march","april",
"may","june","july","august","september","october","november","december",
];
const monthIndex=new Date().getMonth();
monthEl.innerHTML=months[monthIndex];
const fullDate=new Date().toDateString();
fullDateEl.innerHTML=fullDate;
const firstDay=new Date(new Date().getFullYear(),new Date().getMonth(),1).getDay()-1;
const lastDay=new Date(new Date().getFullYear(),monthIndex+1,0).getDate();
let days="";
for(let i=firstDay;i>0;i--){
    days+=`<div class="empty"></div>`;
}
for(let i=1;i<=lastDay;i++){
    if(i===new Date().getDate()){
        days+=`<div class="today" onmouseover="popup()" onmouseleave="popdown()" >${i}</div>`

    }else if (i==13){
        days+=`<div class="special" onmouseover="special()" onmouseleave="normal()">${i}</div>`
    }
   
    else{
        days+=`<div>${i}</div>`;
    }
    

}
daysEl.innerHTML=days;
const dEl=document.querySelector('.date p');
function popup(){
    
    dEl.style.fontSize="2rem";
    dEl.style.fontWeight="900";
    dEl.style.transition=".3s";
}
function popdown(){
    dEl.style.fontSize="1.2rem";
    dEl.style.fontWeight="400";
}
function special(){
    const p=document.querySelector(".date h1");
    p.innerHTML="SPECIAL DAY";
    p.style.transitionDelay="1s";
    const n=document.querySelector('.date p');
    n.innerHTML="26-13=13";
    n.style.transition="1s";



}
function normal(){
    const monthEl=document.querySelector('.date h1');
const fullDateEl=document.querySelector('.date p');
    const monthIndex=new Date().getMonth();
monthEl.innerHTML=months[monthIndex];
const fullDate=new Date().toDateString();
fullDateEl.innerHTML=fullDate;
}

