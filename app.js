let num = document.querySelectorAll(".num");
var result = "";
let res = document.getElementById("result");
console.log(res);
console.log(num[0].innerText);
for (let a = 0; a < num.length; a++) {
    num[a].addEventListener("click", function (event) {
        //    result += num[a].innerText;
        result += event.target.innerText;

        res.innerText = result;
        // console.log(result)
    });
    
}
let finalresult = document.querySelector(".oper");
// console.log(finalresult)
finalresult.addEventListener("click",function(event){
    if(eval(result))
    res.innerText = eval(result);
    result = "";
})

let del = document.querySelector(".del");
del.addEventListener("click",function(event){
    result = result.substring(0,result.length-1);
    res.innerText = result;
})

// let btn = document.querySelectorAll("button");
// console.log(btn)
// btn.addEventListener("click",(event)=>{
//     console.log(result);
// })
