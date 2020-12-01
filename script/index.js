var menu = document.querySelector('#menuMb');
var body = document.querySelector('body');
 function StartMenu(){
    if(menu.style.display === "block"){
        menu.style.display = "none";
        body.style.overflow = "auto";
    }else {
        menu.style.display = "block";
        body.style.overflow = "hidden";
    }
 }


/*-------------Button Card---------------*/

var btnlogin = document.querySelector('#btnlogin');
btnlogin.addEventListener("click",function(){
    
});