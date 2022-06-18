const display=document.querySelector('.display')
const buttons= document.querySelectorAll('.button')
const buttonarr=[]
buttons.forEach(button=> button.addEventListener('click',clicked))
//buttons.forEach(button=>buttonarrr.push(button))
//buttonarr.forEach(button=> button.addEventListener('click',clicked))
//console.log(button)
let longstring=""
let currentstring=""
function clicked(e)
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
    currentstring=currentstring+e.target.textContent;
    display.textContent=currentstring;
}

let add= (a,b)=>(a+b)
let sub= (a,b)=>(a-b)
let mult= (a,b)=>(a*b)
let div= (a,b)=>(a/b)