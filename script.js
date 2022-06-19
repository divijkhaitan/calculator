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
        isZero=true
        operatorPut=false
        decimalPut=false
        firstOperandString=""
        secondOperandString=""
        result=""
        operator=""
        return
    }
    if(e.target.textContent=="C")
    {
        if(operatorPut)
        {
            if(secondOperandString="")
            {
                operator=""
                operatorPut=false
                currentstring=currentstring.slice(0,(currentstring.length-1))
            }
            else
            {
                secondOperandString=secondOperandString.slice(0,(secondOperandString.length-1))
                currentstring=currentstring.slice(0,(currentstring.length-1))
            }
        }
        else
        {
            currentstring=currentstring.slice(0,(currentstring.length-1))
            firstOperandString=firstOperandString.slice(0,(firstOperandString.length-1))
        }
        
    }
    display.textContent=currentstring
}
function clicknum(e)
{
    if(e.target.textContent=="0"&&operatorPut&&secondOperandString=="0")
    {
        return;        
    }
        
    if(e.target.textContent=="0"&&!operatorPut&&firstOperandString=="0")
    {
        return;
    }

    if(operatorPut)
    {
        secondOperandString+=e.target.textContent;
    }
    else
    {
        firstOperandString+=e.target.textContent;
    }
    currentstring=currentstring+e.target.textContent;
    display.textContent=currentstring;
}
function clickOp(e)
{
    if(e.target.textContent=="-"&&firstOperandString=="")
    {
        firstOperandString+="-"
    }
    else
    {
        operator=e.target.textContent
        operatorPut=true
    }
    currentstring=currentstring+e.target.textContent;
    display.textContent=currentstring;
}
function clickPoint(e)
{
    console.log('point')
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
    console.log('eqals')
    if(firstOperandString!="" && secondOperandString!="")
    {
        console.log("qualsif")
        evaluate(firstOperandString,secondOperandString,operator)
    }
}

function evaluate(first,second, operator)
{
    console.log("eval")
    if(first.startsWith('.'))
    {
        first=0+first
    }
    if(second.startsWith('.'))
    {
        second=0+second
    }
    console.log("evaluate")
    if(operator=="+")
    result=''+add(parseFloat(first),parseFloat(second))
    if(operator=="-")
    result=''+sub(parseFloat(first),parseFloat(second))
    if(operator=="X")
    result=''+mult(parseFloat(first),parseFloat(second))
    if(operator=="/")
    result=''+div(parseFloat(first),parseFloat(second))
    if(operator=="%")
    result=''+mod(parseFloat(first),parseFloat(second))
    if(operator=="^")
    result=''+exp(parseFloat(first),parseFloat(second))
    console.log(result)
    currentstring+='='
    display.textContent=currentstring
    currentstring+=result
    display.textContent=currentstring
    let isZero=true
    let operatorPut=false
    let decimalPut=false
    firstOperandString=result
    currentstring=result
    secondOperandString=""
    result=""
}

let add=(a,b)=>(a+b)
let sub=(a,b)=>(a-b)
let mult=(a,b)=>(a*b)
let div=(a,b)=>(a/b)
let mod=(a,b)=>(a%b)
let exp=(a,b)=>(a**b)