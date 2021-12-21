
removeLocal = (key) => {
    localStorage.removeItem(key);
}

resetData = ()=> {
    fullname.val('');
    email.val('');
    
}



const setLocalStorage = function(toDoList, value){
    localStorage.setItem(toDoList, JSON.stringify(value));
}

const getLocalStorage = function(toDoList){

    const todoStorage = localStorage.getItem(toDoList);
    console.log("get = ", todoStorage);
    if (todoStorage === 'undefined' || todoStorage === null){
        toDoList = [];
    } else {
        toDoList = JSON.parse(todoStorage);
        getList(toDoList);
        console.log("local here", TODOLIST);
    }
}



const getList = function(toDoList){
    itemList.innerHTML = '';
    let str = '';
    toDoList.forEach((element,index) => {
        TODOLIST.push([element[0], element[1]]);
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
    console.log("sad = ", toDoList);
}
