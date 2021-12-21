

getLocalStorage(LOCAL);

function get_update(){
    TODOLIST.push([input_name.value, input_level.value]);
    update();
}

function danger(ele) { 
    let danger;
    let dangerClass;
    if (ele == 0)
    {
        dangerClass = "bg-dark";
        danger = "Small";
    } else if (ele == 1)
    {
        dangerClass = "bg-info";
        danger = "Medium";
    } else if (ele == 2)
    {
        dangerClass = "bg-danger";
        danger = "High";
    } 
    return [dangerClass,danger]
 }

function update(){
    
    str ='';
    TODOLIST.forEach((element,index) => {
        str = str +
        `
        <tr>
            <td>${index+1}</th>
            <td>${element[0]}</td>
            <td><span class="badge ${danger(element[1])[0]}">${danger(element[1])[1]}</span></td>
            <td>
                <button class="btn btn-warning">Edit</button>
                <button class="btn btn-danger">Delete</button>
            </td>
        </tr>
        `
    });
    itemList.innerHTML = str;
}



btn_submit.addEventListener("click", () => {
    
    if(input_name.value == "")
    {
        alert('please dont leave task field empty :<');
        
    } else{
        get_update(); 
        setLocalStorage(LOCAL, TODOLIST);
    
        input_name.value = "";
        input_level.value = 0;
    }
    
});

btn_cancel.addEventListener("click", () => {
    input_name.value = "";
    input_level.value = 0;
});


btn_add.addEventListener("click", () => {

    let element = document.querySelector('#area-form');
    // jquery.hasClass('d-none')    
    if(element.classList.contains('d-none')){
        element.classList.remove("d-none");
    }else{
        element.classList.add("d-none");
    }
});
