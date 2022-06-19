const display=document.querySelector('.display')
const buttonoperation= document.querySelectorAll('.operation')
const buttonnumber= document.querySelectorAll('.number')
const buttonfunction= document.querySelectorAll('.function')
const buttonpoint=document.querySelector('.point')
const buttonequals=document.querySelector('.equals')
buttonfunction.forEach(button=> button.addEventListener('click',clickfun))
buttonnumber.forEach(button=> button.addEventListener('click',clicknum))
buttonoperation.forEach(button=> button.addEventListener('click',clickOp))
buttonpoint.addEventListener('click',clickPoint)
buttonequals.addEventListener('click',clickEquals)
//buttons.forEach(button=>buttonarrr.push(button))
//buttonarr.forEach(button=> button.addEventListener('click',clicked))
//console.log(button)
let longstring=""
let currentstring=""
let firstOperandString=""
let secondOperandString=""
let result=""
let operator=""
let isZero=true
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
    if(operatorPut)
    {
        console.log("entersecond")
        secondOperandString+=e.target.textContent;
    }
    else
    {
        console.log("enterfirst")
        firstOperandString+=e.target.textContent;
    }
    currentstring=currentstring+e.target.textContent;
    display.textContent=currentstring;
}
function clickOp(e)
{
    operator=e.target.textContent
    operatorPut=true
    currentstring=currentstring+e.target.textContent;
    display.textContent=currentstring;
}
function clickPoint(e)
{
    if(operatorPut)
    {
        if(!(secondOperandString.includes('.')))
        {
            secondOperandString+='.'
            currentstring=currentstring+e.target.textContent;
            display.textContent=currentstring;
            decimalPut=true
        }
    }
    else
    {
        if(!(firstOperandString.includes('.')))
        {
            firstOperandString+='.'
            currentstring=currentstring+e.target.textContent;
            display.textContent=currentstring;
            decimalPut=true
        }
    }
}
function clickEquals(e)
{
    currentstring+='='
    display.textContent=currentstring
    if(firstOperandString!="" && secondOperandString!="")
    {
        evaluate(firstOperandString,secondOperandString,operator)
    }
}

function evaluate(first,second, operator)
{
    console.log("evaluate")
    if(operator=="+")
    result=''+add(parseFloat(first),parseFloat(second))
    if(operator=="-")
    result=''+minus(parseFloat(first),parseFloat(second))
    if(operator=="X")
    result=''+mult(parseFloat(first),parseFloat(second))
    if(operator=="/")
    result=''+div(parseFloat(first),parseFloat(second))
    if(operator=="%")
    result=''+mod(parseFloat(first),parseFloat(second))
    if(operator=="^")
    result=''+exp(parseFloat(first),parseFloat(second))

    currentstring+=result
    display.textContent=currentstring
    let isZero=true
    let operatorPut=false
    let decimalPut=false
}

let add= (a,b)=>(a+b)
let sub= (a,b)=>(a-b)
let mult= (a,b)=>(a*b)
let div= (a,b)=>(a/b)
let mod=(a,b)=>(a%b)
let exp=(a,b)=>(a**b)