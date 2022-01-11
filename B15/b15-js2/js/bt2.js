const content = $('.content')


$(".hide").click(function (e) { 
    e.preventDefault();
    content.css("display", "none");
    
});

$(".show").click(function (e) { 
    e.preventDefault();
    content.css("display", "block");
    
});

