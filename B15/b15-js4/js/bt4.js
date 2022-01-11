


 

$(document).ready(function () {
    
    
    $("select#inputstudy").change(function(e){
        e.preventDefault();
        let input = $(this).children("option:selected").val();
        console.log(input);
    });
    
   
});