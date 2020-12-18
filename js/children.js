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
const images=["child\ bg2.jpg","child\ bg3.jpg","child\ bg4.jpg","child\ bg5.jpg","child\ bg2.jpg"];
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
let colors=document.querySelectorAll(".option-box li");

colors.forEach(function(event){
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
 



  //js for product detailsva
var productImg=document.getElementById("productImg");
var smallImg=document.getElementsByClassName ("small-img");
smallImg[0].onclick=function(){
    productImg.src=smallImg[0].src;
}
smallImg[1].onclick=function(){
    productImg.src=smallImg[1].src;
}
smallImg[2].onclick=function(){
    productImg.src=smallImg[2].src;
}
smallImg[3].onclick=function(){
    productImg.src=smallImg[3].src;
}

/*

     //*****sale product***** //
     $(document).ready(function() {
      $('#autoWidth').lightSlider({
          autoWidth:true,
          loop:true,
          onSliderLoad: function() {
              $('#autoWidth').removeClass('cS-hidden');
          } 
      });  
    });
    */










