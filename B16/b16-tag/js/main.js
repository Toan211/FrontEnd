
$(document).ready(function () {
        // This demo is using "dragsort" lib (by myself)
    // https://github.com/yairEO/dragsort

    // The DOM element you wish to replace with Tagify
    var input = document.querySelector('input[name=tags]');

    // initialize Tagify on the above input node reference
    
    var tagify = new Tagify(input)
    // bind "DragSort" to Tagify's main element and tell
    // it that all the items with the below "selector" are "draggable"
    var dragsort = new DragSort(tagify.DOM.scope, {
        selector: '.'+tagify.settings.classNames.tag,
        callbacks: {
            dragEnd: onDragEnd
        }
    })

    // must update Tagify's value according to the re-ordered nodes in the DOM
    function onDragEnd(elm){
        tagify.updateValueByDOMTags()
    }

    // listen to tagify "change" event and print updated value
    tagify.on('change', e => console.log(e.detail.value))

    $("#click").on("click", function() {
        let str="";
        tagify.value.forEach(element => {
            
            console.log(element.value); 
            str+=`${element.value},`
        });	
        if (str.length > 0)
        {
            str = str.slice(0, str.length - 1);
            navigator.clipboard.writeText(str);
            alert("Copied the text: " + str);
        }
        
      })
      
      
}); 