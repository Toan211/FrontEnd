
// let userAgentString = navigator.userAgent;
// if (userAgentString.indexOf("Mozilla") > -1)
// {
//     document.body.style.background = "red";
//     console.log(userAgentString);
//     console.log(userAgentString.indexOf("Ma"));
// } else if(userAgentString.indexOf("Firefox") !== -1){
//     document.body.style.background = "green";
// }



// let ua = detect.parse(navigator.userAgent);

// console.log(ua.browser.name);

// if (ua.browser.name.match =="Chrome"){
//     console.log("in");
// }




// Get the user-agent string
let userAgentString = 
    navigator.userAgent;

console.log(userAgentString);

// Detect Chrome
let chromeAgent = 
    userAgentString.indexOf("Chrome") > -1;

// Detect Internet Explorer
let IExplorerAgent = 
    userAgentString.indexOf("MSIE") > -1 || 
    userAgentString.indexOf("rv:") > -1;

// Detect Firefox
let firefoxAgent = 
    userAgentString.indexOf("Firefox") > -1;

// Detect Safari
let safariAgent = 
    userAgentString.indexOf("Safari") > -1;
        
// Discard Safari since it also matches Chrome
if ((chromeAgent) && (safariAgent)) 
    safariAgent = false;

// Detect Opera
let operaAgent = 
    userAgentString.indexOf("OP") > -1;
        
// Discard Chrome since it also matches Opera     
if ((chromeAgent) && (operaAgent)) 
    chromeAgent = false;

// Detect Edge
let edgeAgent =
    userAgentString.indexOf("Edg") > -1;



if(edgeAgent == true)
{
    document.body.style.background = "red";
} else if(chromeAgent == true)
{
    document.body.style.background = "green";
} else if(operaAgent == true)
{
    document.body.style.background = "yellow";
} else if(firefoxAgent == true)
{
    document.body.style.background = "blue";
} else if(safariAgent == true){
    document.body.style.background = "purple";
} else if(IExplorerAgent == true){
    document.body.style.background = "pink";
}