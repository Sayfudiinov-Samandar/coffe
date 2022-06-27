var elModalOpenBuuton=document.querySelector(".good-link");

var elmodal=document.querySelector(".modal");

elModalOpenBuuton.addEventListener("click",function(){
    elmodal.classList.add("modal-show")
})


var elModalCloseBuuton=document.querySelector(".modal-button");

elModalCloseBuuton.addEventListener("click",function(){
    elmodal.classList.remove("modal-show")

} )