$(document).ready(function () {
    
    let data = getLocal(CONTACT);
    showData(data);

    btnSendContact.click(function(e) {
        e.preventDefault();
        var objContact = {
            fullname  : fullname.val(),
            email     : email.val(),
            phone     : phone.val(),
            job       : job.val(),
            message   : message.val(),
        }

        console.log(objContact);
        saveLocal(CONTACT, objContact);
    });

    btnDeleteStorage.click(function(e) {
        e.preventDefault();
        resetData();
        removeLocal(CONTACT);
        
    });
});



