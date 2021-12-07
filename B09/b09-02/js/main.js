// divElement = document.querySelector(".box");
// elemHeight = divElement.clientHeight;

classbox = document.getElementsByClassName('box');
var a = 0;
for(i=0; i<classbox.length; i++) {
    if(classbox[i].offsetHeight > a){
        a = classbox[i].offsetHeight;
    }
}

for(i=0; i<classbox.length; i++) {
   classbox[i].style.height = a + "px";
   if(i%2 == 0)
   {    
        classbox[i].style.backgroundColor = "red";
   }
   else{
        classbox[i].style.backgroundColor = "yellow";
   }
}