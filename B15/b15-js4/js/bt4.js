


 

$(document).ready(function () {
    
    
    $("select#inputstudy").change(function(){
        var input = $(this).children("option:selected").val();
        console.log(input);
    });
    
   
});