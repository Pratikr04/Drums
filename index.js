var x=document.querySelectorAll("button").length;
for(var i=0;i<x;i++){
document.querySelectorAll("button")[i].addEventListener("click", function(){

    var x=(this.textContent)
     sound(x);
     anime(x);

});
}
document.addEventListener("keydown",function(event){
    sound(event.key);
    anime(event.key);
});



function sound(k){
    switch(k){
        case "w":
             var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    
  
        case "a":
            var audio = new Audio("sounds/tom-2.mp3"); 
    audio.play();
    break;
    
    
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    
   
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");    
    audio.play();
    break;
    
    
        case "k":
          var audio = new Audio("sounds/kick-bass.mp3"); 
    audio.play();
    break;
    
   
        case "l":
           var audio = new Audio("sounds/crash.mp3");
    audio.play();
    break;
      
   
 
};
}
function anime(event){
var current=document.querySelector("."+ event);
current.classList.add("pressed");
setTimeout(function () {
    current.classList.remove("pressed");
},100)
}

