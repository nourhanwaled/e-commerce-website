//color option
let maincolor=localStorage.getItem("color_option");
//check if color option is empty
if(maincolor!==null){
  //  localStorage.setItem("color_option",maincolor);
console.log(localStorage.getItem("color_option"));
document.documentElement.style.setProperty('--main-color',localStorage.getItem("color_option"));
}
let backgroundIntrval;
//cheak if backgroundoption is empty
let backgroundoption=true;
let cheakbackground=localStorage.getItem("background_option");
  if(cheakbackground!==null){
  if(cheakbackground==='true'){
  backgroundoption=true;
  randomizeImages();
  }
  else{
    backgroundoption=false;
  }
  console.log(cheakbackground);
}

//select js landing
let landing=document.querySelector(".landing");
const images=["about1.jpeg","about2.jpeg","about3.jpeg","about4.jpeg","about5.jpeg"];
//let backgroundIntrval;
function randomizeImages(){
  if(backgroundoption===true){
    backgroundIntrval=setInterval(function(){
      let random=Math.floor(Math.random()*images.length);
      landing.style.backgroundImage='url("images/' +images[random] +'")';
  },3000);
  }
}
//seeting box
let toggle=document.querySelector(".toggle i");
let settingbox=document.querySelector(".setting-box");
toggle.addEventListener("click",function(){
   this.classList.toggle("fa-spin");
   settingbox.classList.toggle("open");
})

// swith colors
let colorss=document.querySelectorAll(".option-box li");

colorss.forEach(function(event){
   event.addEventListener("click",function(e){
   let color=e.target.dataset.color;
   //console.log(color);
   /*set color in root*/
  document.documentElement.style.setProperty('--main-color',color);


  //set color in local storage
  localStorage.setItem("color_option",e.target.dataset.color);
  let active=document.querySelectorAll(".active");
  active.forEach(function(act){
      act.classList.remove("active");
  })
  e.target.classList.add("active");
})

});
//swith background
let randombackgroung=document.querySelectorAll(".random-background span");
randombackgroung.forEach(function(event){
  event.addEventListener("click",function(e){
    let active=e.target.parentElement.querySelectorAll(".active");
    active.forEach(function(element){
      element.classList.remove("active");
    })
    e.target.classList.add("active");

    if(e.target.dataset.background==='yes'){
      backgroundoption=true;
      randomizeImages();
      localStorage.setItem("background_option", true);
    }
    else{
      backgroundoption=false;
      clearInterval(backgroundIntrval);
      localStorage.setItem("background_option", false);
    }
  })
})
/*...........*/
//toggle menu
let togglebtn=document.querySelector(".toogle-menu");
let tlinks=document.querySelector(".links");
togglebtn.onclick=function(){
  this.classList.toggle("menu-active");
  tlinks.classList.toggle("open");
}
//click anywhare outside menue and toggle button
document.removeEventListener("click",function(e){
  e.stopPropagation();
  if(e.target!==togglebtn && e.target!==tlinks){
  if(tlinks.className==='open'){
   
  togglebtn.classList.toggle("menu-active");
  tlinks.classList.toggle("open");
  }
}
})
//............................................................
  /*end of input search*/
//...............................................
/*start of sale*/
const months=["jan","feb","mar","april","may","june","july","aug","sep","nov","des"];
const weeks=["sun","mon","tue","wen","thus","fri","sat"];
let time=document.querySelectorAll(".deadline h4");
let deadline=document.querySelector(".deadline");
//set future time
let futuredate=new Date(2020,10,25,10,20,20);
//acces
let year=futuredate.getFullYear();
let month=futuredate.getMonth();
month=months[month];
let day=futuredate.getDate();
let hours=futuredate.getHours();
let minutes=futuredate.getMinutes();
let second=futuredate.getUTCSeconds();
let weekday=futuredate.getDay();
weekday=weeks[weekday];
console.log(weekday);
 //future time im ms
 let futuretime=futuredate.getTime();
 //function to count different time betwen today and the future
 function getremin(){
     let todaytime=new Date().getTime();
     let diff=futuretime-todaytime;
     let oneday=24*60*60*1000;
     let onehour=60*60*1000;
     let onemin=60*1000;
     let onesecond=1000;
     //dif in day and hour and sec
     let d=diff/oneday;
     d=Math.floor(d);
     let h=(diff%oneday)/onehour;
     h=Math.floor(h);
     let min=(diff%onehour)/onemin;
     min=Math.floor(min);
     let sec=(diff%onemin)/onesecond;
     sec=Math.floor(sec);
     const values=[d,h,min,sec];
     //function to put zero before number
     function format(index){
      if(index<10){
          return index=`0${index}`;
      }
      return index;
     }
     time.forEach(function(tim,index){
      tim.innerHTML=format(values[index]);
     });

     if(diff<0){
         clearInterval(getremin);
         deadline.innerHTML=`<h2>Sorry Item Has ended</h2>`;
     }
 }
let cutdown=setInterval(getremin,1000);

/*end of sale*/
/*start of random products*/
const btns=document.querySelectorAll(".random .btns .btn");
const btndiv=document.querySelector(".random .btns");
const contents=document.querySelectorAll(".content");


/*end of random products*/
/*........................................*/
/*start of vedios*/
/*................................*/
var i = 0;
var txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quaerat sapiente culpa velit distinctio omnis amet odio, vel nisi nostrum assumenda harum illo quasi sed quod dolorem doloribus optio aliquid.';
function typeWriter() {
  if (i < txt.length) {
    document.querySelector('.myytext1').innerHTML += txt.charAt(i);
    i=i+1;
    setTimeout(typeWriter, 100);
  }
}