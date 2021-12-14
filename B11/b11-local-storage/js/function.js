
saveLocal = (key, value) => {
    localStorage.setItem(key ,JSON.stringify(value));
}

getLocal = (key) => {
    let data = localStorage.getItem(key);
    console.log(data);
    //kiểm tra local có rỗng ko để get nó về
    if(data){
        console.log("true");
        return JSON.parse(data);
    } else{
        console.log("false");
        return data;
    }
    // return data ? JSON.parse(data) : data;
}

removeLocal = (key) => {
    localStorage.removeItem(key);
}

showData = (data) => {
    // data = getLocal(CONTACT);
    if (data){
        fullname.val(data.fullname);
        email.val(data.email);
        phone.val(data.phone);
        job.val(data.job);
        message.val(data.message); 
    }
}

resetData = ()=> {
    fullname.val('');
    email.val('');
    phone.val('');
    job.val('');
    message.val('');
}