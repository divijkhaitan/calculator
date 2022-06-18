const display=document.querySelector('.display')
const buttonoperation= document.querySelectorAll('.operation')
const buttonnumber= document.querySelectorAll('.number')
const buttonfunction= document.querySelectorAll('.function')
buttonfunction.forEach(button=> button.addEventListener('click',clickfun))
buttonnumber.forEach(button=> button.addEventListener('click',clicknum))
buttonnumber.forEach(button=> button.addEventListener('click',clickOp))
//buttons.forEach(button=>buttonarrr.push(button))
//buttonarr.forEach(button=> button.addEventListener('click',clicked))
//console.log(button)
let longstring=""
let currentstring=""
let firstOperandString=""
let secondOperandString=''
let isZero=false
let operatorPut=false
let decimalPut=false
function clickfun(e)
{
    console.log('entered')
    if(e.target.textContent=="AC")
    {
        display.textContent="0"
        currentstring="";
        return
    }
    if(e.target.textContent=="C")
    {
        display.textContent="0"
        currentstring="";
        return
    }
}
function clicknum(e)
{
    currentstring=currentstring+e.target.textContent;
    display.textContent=currentstring;
}
function clickOp(e)
{
    currentstring=currentstring+e.target.textContent;
    display.textContent=currentstring;
}

let add= (a,b)=>(a+b)
let sub= (a,b)=>(a-b)
let mult= (a,b)=>(a*b)
let div= (a,b)=>(a/b)
let mod=(a,b)=>(a%b)
let exp=(a,b)=>(a**b)