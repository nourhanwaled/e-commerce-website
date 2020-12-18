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
const images=["man-bg-2.jpg","man-bg-3.jpg","man-bg3.jpeg","man-bg4.jpeg","man-bg5.jpeg"];
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

//start of content section

//Get buttons and put in array  
const buttons = document.querySelectorAll(".btns");
//Get the div to make foreach on every single button 
const btnsDiv = document.querySelector(".nav-bar");
//Get every content and put it in array
const contents = document.querySelectorAll(".content");
//add EventListener
  btnsDiv.addEventListener("click",(e)=>{
    //Get the mark by the dataset 
    const mark = e.target.dataset.mark
    //if console find button with data-mark then make this events
    if(mark){
      //call every single button 
        buttons.forEach(function(btns){
      //remove active class on all btns when click on the btn
        btns.classList.remove("active");
        //add active class in current clicked button
        e.target.classList.add("active");
        })
    }
    //remove all content active1
    contents.forEach(function(content){
      content.classList.remove("active1");
      //call content id that equal mark dataset
      const element = document.getElementById(mark);
      //add class active1 on current target
        element.classList.add("active1")
    })
  })
  //End of content section
  //...................................
  //Start of create yours section

  //set database
  const array= [
    // first struct holds data for the first index 
    {
      id: 1, //index 0 , item 1 
      picture:"url('images/man-pic11.jpeg')",
      title: "100 New Designs!",
      txt: "Now there are even more ways to customize your Artwaare",
      notes: "Celebrate your own unique style",
      go: "Create yours today"
    },
    // second struct holds data for the second index
    {
      id: 2, //index 1 , item 2
      picture:"url('images/man-bg-2.jpg')",
      title: "Show Our Offers",
      txt: "More than 10 offers every week",
      notes: "Buy more , pay less",
      go: "Show our offers"
    },
     // third struct holds data for the third index
    {
      id: 3, //index 2 , item 3
      picture:"url('images/man-bg3.jpeg')",
      title: "Hurry up,Order Now",
      txt: "We have the fastest delevery",
      notes: "Stay home and we will get to you",
      go: "Order Now"
    },
  ]

  //get btns (pervious and next)
  const nextBtn = document.querySelector(".next-btn");
  const previousBtn = document.querySelector(".prev-btn");
  
  //get elements to make changes
  const bg = document.getElementById("create");
  const title = document.getElementById("title");
  const text = document.getElementById("text");
  const note = document.getElementById("note");
  const textBtn = document.getElementById("btn");

  //set array at index 0
  var currentItem = 0;

  //make function to add to the window
  function windowItem(){
    //set array elements to HTML content
    const items = array[currentItem];
    bg.style.backgroundImage = items.picture;
    title.textContent = items.title;
    text.textContent = items.txt;
    note.textContent = items.notes;
    textBtn.textContent = items.go;
  }
  //changes on window when reload
  window.addEventListener("DOMContentLoaded",function(){
    windowItem();
  })  

  /*add events on next-button to navagate 
  the backgrounds and content*/
  nextBtn.addEventListener('click',function(){
    //counter increasing
    currentItem++;
    /*if the index was more than the biggest value,then
    return it to zero 
    */
    if(currentItem>=array.length){
      currentItem = 0;
    }  
    windowItem(); //calling the function above
  })
  /*add events on previous-button to navagate 
  the backgrounds and content*/
  previousBtn.addEventListener('click',function(){
    //counter decreasing
    currentItem--;
      /*if the index was less than zero,then
    return it to the biggest value 
    */
    if(currentItem<0){
      currentItem = array.length-1 ;
    }
    windowItem(); //calling the function above
  })
//End of create yours section
//....................................................

//Start of feedback section events 
/* method allows us to execute 
a function when the document is fully loaded */ 
$(document).ready(function(){
  //first review event 
 
  $("#btn-1").click(function(){
    $("#fe-1").toggle() //show(first click),hide(second click)
  })
  //Second review event 
  $("#btn-2").click(function(){
    $("#fe-2").toggle() //show(first click),hide(second click)
  })
  //Third review event 
  $("#btn-3").click(function(){
    $("#fe-3").toggle() //show(first click),hide(second click)
  })
//End of feedback section events
//....................................................

  //Start of featured items section
  //Making rating stars
  // rating stars #1
  $("#rate-1").click (function(){
    $(".fa-star").css("color","black")
    $("#rate-1").css("color","yellow")
 })
  $("#rate-2").click (function(){
    $(".fa-star").css("color","black")
    $("#rate-1,#rate-2").css("color","yellow")
 })
  $("#rate-3").click (function(){
    $(".fa-star").css("color","black")
    $("#rate-1,#rate-2,#rate-3").css("color","yellow")
 })
  $("#rate-4").click (function(){
    $(".fa-star").css("color","black")
    $("#rate-1,#rate-2,#rate-3,#rate-4").css("color","yellow")
 })
 $("#rate-5").click (function(){
  $(".fa-star").css("color","black")
    $("#rate-1,#rate-2,#rate-3,#rate-4,#rate-5").css("color","yellow")
 })
 // rating stars #2
 $("#rate1").click (function(){
  $(".fa-star").css("color","black")
  $("#rate1").css("color","yellow")
})
$("#rate2").click (function(){
  $(".fa-star").css("color","black")
  $("#rate1,#rate2").css("color","yellow")
})
$("#rate3").click (function(){
  $(".fa-star").css("color","black")
  $("#rate1,#rate2,#rate3").css("color","yellow")
})
$("#rate4").click (function(){
  $(".fa-star").css("color","black")
  $("#rate1,#rate2,#rate3,#rate4").css("color","yellow")
})
$("#rate5").click (function(){
$(".fa-star").css("color","black")
  $("#rate1,#rate2,#rate3,#rate4,#rate5").css("color","yellow")
})
// rating stars #3
$("#rate-a").click (function(){
  $(".fa-star").css("color","black")
  $("#rate-a").css("color","yellow")
})
$("#rate-b").click (function(){
  $(".fa-star").css("color","black")
  $("#rate-a,#rate-b").css("color","yellow")
})
$("#rate-c").click (function(){
  $(".fa-star").css("color","black")
  $("#rate-a,#rate-b,#rate-c").css("color","yellow")
})
$("#rate-d").click (function(){
  $(".fa-star").css("color","black")
  $("#rate-a,#rate-b,#rate-c,#rate-d").css("color","yellow")
})
$("#rate-e").click (function(){
$(".fa-star").css("color","black")
  $("#rate-a,#rate-b,#rate-c,#rate-d,#rate-e").css("color","yellow")
})
//End of featured items section

})
//................................................
//Start of our offers section

//Counter idea 
//set months array
 const months = ['jan','feb','mar','april','may','june','july','aug','sep','oct','nov','dec'];
 //set weekDays
 const weekDays=['sun','mon','tue','wen','thus','fri','sat'];

 // get/call elements 
 const endDate = document.querySelector(".end-date");
 const deadline = document.querySelector(".deadline");
 const items = document.querySelectorAll(".deadline h4");
//Set the date that the lottery end on
 let futureDate = new Date(2020,11,10,6,10,10);
 //get the year (first index on above Date function)
 let year = futureDate.getFullYear();
 //get the month (second index on above Date function)
 let month = futureDate.getMonth();
 month = months[month];//get month by names from the array
 //get the days (third index on above Date function)
 //from 0 to 30
 let days = futureDate.getDate();
 //get hours (fourth index on above Date function)
 let hours = futureDate.getHours();
 //get the minutes (fifth index on above Date function)
 let minutes = futureDate.getMinutes();
 //get the week days (from 0 to 6)
 let weekDay = futureDate.getDay();
 weekDay = weekDays[weekDay];//get days by names from the array
 //assign new elements value to the HTML element
 endDate.innerHTML = `Giveawy end on ${weekDay}, ${days}, ${month}, ${year}, ${hours}:${minutes}pm`;
//function to get the time of future date by milliseconds
 let futureTime = futureDate.getTime();

 function getRemain(){
//function to get the time of current date by milliseconds
  let currentTime = new Date();
//get the milliseconds between the two intervals
  let diff = futureTime - currentTime;
  //Start of operations to get days,hours,minutes and seconds
  let oneDay = 24*60*60*1000;
  let oneHour = 60*60*1000;
  let oneMin = 60*1000;
  let oneSec = 1000;

  let days = Math.floor(diff/oneDay);
  let hours = Math.floor((diff%oneDay)/oneHour);
  let minutes = Math.floor((diff%oneHour)/oneMin);
  let seconds = Math.floor((diff%oneMin)/oneSec);
//End of operations to get days,hours,minutes and seconds

//formation function 
  function format(x){
    if(x<10){
      return x = `0${x}`;
    }
    return x;
  }

//set array for the operations results above
  const values = [days,hours,minutes,seconds];
//assign values to elements from the array
  items.forEach(function(item,index){
    item.innerHTML = format(values[index]);
    //index indecates to values array
  })
//Stop the counter when all elements ach 0
  if(diff<0){
    clearInterval(cutdown);
    //sentence appear if the lottery expired
    deadline.innerHTML = '<h2>Sorry,this Offer has ended!!</h2>'
  }

 }
 //set intervals to be refreshed automatically after 1s
 let cutdown = setInterval(getRemain,1000)
 //invoke function
 getRemain();
 //Counter idea
  
//Start of select box options
//years options
for (let index = 1960; index <= 2020; index++) {
  $("<option>",{value: index , text: index}).appendTo("#years");
}
//Days option
for (let index = 1; index <= 31; index++) {
  $("<option>",{value: index , text: index}).appendTo("#days");
}
//End of select box options
//.......................................
 //Start of box modal

 // get button element
 var open = document.querySelector("#join");
 //get overlay box modal
 var boxModal = document.querySelector(".overlay3");
 //get close button (i)

 var close = document.querySelector(".close")
 //Add EventListener to open button
 open.addEventListener("click",function(){
  boxModal.classList.add("dis")
 })
 //Add EventListener to open button
 close.addEventListener("click",function(){
  boxModal.classList.remove("dis")
 })
// textarea disabled
 $("#radio1").click(function(){
   $("#area").attr( "disabled", "disabled" );
 })
//End of box modal
//................................................. 