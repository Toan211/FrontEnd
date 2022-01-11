

 const number = $(".number")
 const eachNumber = $(".num") 
 
 

 $(document).on('click','.num',function(){
    console.log($(this).find("h2").data("value"));
});

$(document).ready(function () {
    
    str = ""
    for (let i = 0; i < 10; i++) {
            
          str +=`<div class="num"> <h2 data-value = "${i}"> ${i} </h2></div>`
    }
   number.html(str);

    
   
});