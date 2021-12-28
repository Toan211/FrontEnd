
const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}


const getLocalStorage = (key) => {

    let data = localStorage.getItem(key);

    data = data ? JSON.parse(data): []

    return data
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

const getList = (data) => {
    
    let str = '';
    data.forEach((element,index) => {
        
        str += 
        `
        <tr>
            <td>${index+1}</th>
            <td>${element.name}</td>
            <td><span class="badge ${danger(element.level)[0]}">${danger(element.level)[1]}</span></td>
            <td>
                <button class="btn btn-warning" onclick="editItem('${element.id}')" value=${element.id}>Edit</button>
                <button class="btn btn-danger" onclick="deleteItem('${element.id}')"  value=${element.id}>Delete</button>
            </td>
        </tr>
        `
    });
    itemList.html(str);
    console.log("list = ", data);
}

const resetForm = () => {
    input_name.val("");
    input_level.val(0); 
    input_id.val("");
    
}

const createRandomID = (length = 12) => {
    // Declare all characters
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    // Pick characers randomly
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
};

function deleteItem(id) {
    console.log("delete");
    let data = getLocalStorage(LOCAL); 
    
    data = data.filter(data => data.id != id);
    
    setLocalStorage(LOCAL,data);
    getList(data);
};

function editItem(id) {
    console.log("edit");
    let data = getLocalStorage(LOCAL); 
    
    input_id.val(id);
    let index = data.map(object => object.id).indexOf(id);
    
   
   input_name.val(data[index].name) ;
   input_level.val(data[index].level);
   }   