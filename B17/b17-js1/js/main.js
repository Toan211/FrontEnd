
const link = "http://apiforlearning.zendvn.com/public/api/get-gold"

const loader = $(".loader")



const gold_api = $("#gold-api")

$(document).ready(function () {

    let xhtml = ""
    //gold_api.html(loader)
    fetch(link).then(function (response) {
       // The API call was successful!
	    return response.json();
    }).then(function (data) {
        // This is the JSON from our response  
        console.log(data);
        data.forEach(element => {
            xhtml +=`<tr>
            <td>${element.type}</td>
            <td>${element.buy}</td>
            <td>$${element.sell}</td>
          </tr>
          `
        });
        loader.hide()
        gold_api.html(xhtml)
    }).catch(function (err) {
        console.warn('Something went wrong.', err);
        
    });
    
    
}); 