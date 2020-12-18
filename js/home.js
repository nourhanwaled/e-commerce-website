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
const images=["home-bg1.jpeg","home-bg2.jpeg","home-bg3.jpeg","home-bg4.jpeg","home-bg5.jpeg"];
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

 /*....................................*/
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
  /*.................................... */
  $(".search").on("keyup",function(){
    var inputvalue=$(this).val().toLowerCase();
    $(".mysearch2 li").filter(function(){
    var livalue=$(this).text().toLowerCase();
    $(this).toggle(livalue.indexOf(inputvalue)>-1)
    });
    });
  });
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
//add eventlisener
btndiv.addEventListener("click",function(event){
    const mark=event.target.dataset.mark;
    if(mark){
        btns.forEach(function(btn){
            btn.classList.remove("active");
            event.target.classList.add("active");
        })
        contents.forEach(function(content){
            content.classList.remove("active1");
            const element=document.getElementById(mark);
            element.classList.add("active1");
        })
    }
});

/*end of random products*/
/*........................................*/
/*start of vedios*/
//Get over-lay element
let openBtn1=document.querySelector(".banner1");
let openBtn2=document.querySelector(".banner2");
let openBtn3=document.querySelector(".banner3");
let closeBtn1=document.querySelector(".over-lay1 .close-btn1");
let closeBtn2=document.querySelector(".over-lay2 .close-btn2");
let closeBtn3=document.querySelector(".over-lay3 .close-btn3");
let overlay1=document.querySelector(".over-lay1");
let overlay2=document.querySelector(".over-lay2");
let overlay3=document.querySelector(".over-lay3");


//Add eventListener to over-lay element
openBtn1.addEventListener('click',()=>{
   overlay1.classList.add("open-lay");
});
openBtn2.addEventListener('click',()=>{
    overlay2.classList.add("open-lay");
});
openBtn3.addEventListener('click',()=>{
    overlay3.classList.add("open-lay");
});
closeBtn1.addEventListener('click',function(){
  overlay1.classList.remove("open-lay");
});
closeBtn2.addEventListener('click',function(){
  overlay2.classList.remove("open-lay");
});
closeBtn3.addEventListener('click',function(){
    overlay3.classList.remove("open-lay");
});
/*end of vedios*/
