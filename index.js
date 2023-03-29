var h1=document.querySelector('h1');
var box=document.querySelector('.box');
var stp=document.querySelector('#stp');
var start=document.querySelector('#start');
var cixanReqem=[];
var clickCount=0;
function reqemAt(){
    var reqem=Math.floor(Math.random()*80);
    if(cixanReqem.indexOf(reqem)==-1){
        cixanReqem.push(reqem)
        var newElement=document.createElement('h2');
        $(newElement).css({
            width: '70px',
            height: '70px',
            border: '1px solid black',
            borderRadius:'50%',
            backgroundColor: 'white',
            color: 'red',
            textAlign: 'center',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        })
        newElement.innerText=reqem
        box.prepend(newElement)
    }
    else if(cixanReqem.length==100){
       ResetGame()
    }
}
function ResetGame(){
    h1.style.color='red'
    h1.innerText='Game Over!!!',
    clearInterval()
}
stp.onclick=function(){
    clearInterval(clickCount)
}
start.onclick=function(){
    clickCount++;
    setInterval(reqemAt,1000)
}