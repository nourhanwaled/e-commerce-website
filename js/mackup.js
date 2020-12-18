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
const images=["mackeup-back1.jpg","mackeup-back2.jpg","mackeup-back3.jpg","mackeup-back4.jpg","mackeup-back5.jpg"];
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
//toggle menu/

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
 /*start of form*/
 $("document").ready(function(){
    $(".person").on("click",function(){
      $(".overlayform").toggle();
      }) 
      $(".ser").on("click",function(){
        $(".myinput").toggle();
        })  
  /*end of form*/
  /*start of input search*/
  $(".myinput").focus(function(){
    $(".mysearch").show();
  });
  $(".myinput").blur(function(){
    $(".mysearch").hide();
  });
  $(".myinput").on("keyup",function(){
  var inputvalue=$(this).val().toLowerCase();
  $(".mysearch li").filter(function(){
  var livalue=$(this).text().toLowerCase();
  $(this).toggle(livalue.indexOf(inputvalue)>-1)
  });
  });
  });
  /*end of input search*/

//set database
const product=[
  {
   id:1,
   name:"Lip Stick",
   price:"$25",
   img:"images/mackeup-top1.jpg"
   ,txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ea omnis commodi aspernatur nostrum ullam tenetur fugit ad aliquam neque?"
  },
  {
  id:2,
  name:"Eyeshadow",
  price:"$50",
  img:"images/mackeup-top2.jpg"
  ,txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. "
  },
     {
  id:3,
  name:"Mascara",
  price:"$30",
  img:"images/mackeup-top3.jpg"
  ,txt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,"
 },
 {
  id:4,
  name:"Foundation",
  price:"$100",
  img:"images/mackeup-top4.jpg"
  ,txt:"Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,"
  }
]
//select data
$(".btns .btn").css("click","backgroundColor,hotpink")
const img =document.getElementById("p-img");
const kind =document.getElementById("kind");
const price =document.getElementById("price");
const info =document.getElementById("info");
//select btns
const firstBtn = document.querySelector(".first-btn");
const secondBtn = document.querySelector(".second-btn");
const thiredBtn = document.querySelector(".thired-btn");
const lastBtn = document.querySelector(".last-btn");
//to get
let currentItem=0;
function showPerson(){
    const item =product[currentItem];
    img.src=item.img;
    kind.textContent=item.name;
    price.textContent=item.price;
    info.textContent=item.txt;
}
//show next
firstBtn.addEventListener('click',function() {
    currentItem=0;
    showPerson();
});
secondBtn.addEventListener('click',function() {
    currentItem=1;
    showPerson();
});
thiredBtn.addEventListener('click',function() {
    currentItem=2;
    showPerson();
});
lastBtn.addEventListener('click',function() {
    currentItem=3;
    showPerson();
});
