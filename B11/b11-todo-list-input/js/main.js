

getLocalStorage(LOCAL);  

btn_submit.click( (e) => { 
    e.preventDefault();
    let data = getLocalStorage(LOCAL);
    if(input_id.val() == "")
    {
        if(input_name.val() == "")
        {
            alert('please dont leave task field empty :<');
            
        } else{
            let obj = {
                id: createRandomID(),
                name : input_name.val(),
                level : input_level.val()
            }
            data.push(obj);
            setLocalStorage(LOCAL, data);
            getList(data); 
        } 
    }else {
        id = input_id.val();
        console.log(id);
        let index = data.map(object => object.id).indexOf(id);
        data[index].name = input_name.val();
        data[index].level = input_level.val();
        setLocalStorage(LOCAL, data);
        getList(data); 
    }
    
    resetForm();
});

btn_cancel.click( (e) => { 
    e.preventDefault();
    let element = $('#area-form');
    if(!element.hasClass('d-none')){
        element.addClass("d-none");
        btn_add.removeClass("btn-info");
        btn_add.addClass("btn-danger");
        btn_add.html("add task");
    }
    resetForm();
});


btn_add.click( (e) => { 
    e.preventDefault();
    let element = $('#area-form');
    // jquery.hasClass('d-none')    
    
    if(element.hasClass('d-none')){
        element.removeClass("d-none");
        btn_add.removeClass("btn-danger");
        btn_add.addClass("btn-info");
        btn_add.html("close");
    }else{
        element.addClass("d-none");
        btn_add.removeClass("btn-info");
        btn_add.addClass("btn-danger");
        btn_add.html("add task");
    }
    resetForm();
});

btn_search.click((e) => {
    let value = input_search.val()
    let data = getLocalStorage(LOCAL);
    
    if (value && value.trim().length > 0){
        value = value.trim().toLowerCase()

        let result = data.filter(element => {
            return element.name.toLowerCase().includes(value)
        })
        console.log("result", result);
         getList(result)
    } else {
        getList(data);  
    }
});

$(document).ready(function () {
    let data = getLocalStorage(LOCAL);
    getList(data);  
    
});