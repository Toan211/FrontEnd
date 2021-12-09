var regex = /frontend/gi;

text = document.getElementById("box").textContent;
deal = "Frontend";

//console.log(text);
//text.match(regex);
//console.log(text.match(regex));

replaceText = text.replace(regex,'<mark class="highlight">' + deal +'</mark>')

document.getElementById("changeBox").innerHTML = replaceText;