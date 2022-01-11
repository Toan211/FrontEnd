$(document).ready(function () {
    
    let arr = [1,2,3,4,5,6,7,8,9]

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log("for: ",sum)

    let result = 0;
    arr.forEach(number => {
        result += number;
    })
    console.log("for each: ",sum)

    let ans=0;
    arr.map(ele=>{
        ans+=ele
    })
    console.log("map: ",ans);
});