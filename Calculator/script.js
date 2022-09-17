let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue="";
let clrValue="";
let trignovalue;
let pi=Math.PI;
let lognum;
console.log(pi);
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('button text is',buttonText);
        if(buttonText=='X') {
            buttonText='*';
            screenValue +=buttonText;
            screen.value=screenValue;
        }

        else if(buttonText=='AC'){
            screenValue="";
            screen.value=screenValue;
        }

        else if(buttonText=='='){
            screen.value=eval(screenValue);
        }

        else if(buttonText=='Sin'){
            trignovalue=screenValue*(pi/180);
            screen.value=Math.sin(trignovalue);
        }

        else if(buttonText=='Cos'){
            trignovalue=screenValue*(pi/180);
            screen.value=Math.cos(trignovalue);
        }

        else if(buttonText=='Tan'){
            trignovalue=screenValue*(pi/180);
            screen.value=Math.tan(trignovalue);
        }

        else if(buttonText=='ln'){
            lognum=Math.LN10(screenValue);
            screen.value=lognum;
        }

        else if(buttonText=='√'){
            lognum=Math.sqrt(screenValue);
            screen.value=lognum;
        }

        else if(buttonText=='x^2'){
            screen.value=screenValue**2;
        }

        else if(buttonText=='10^x'){
            screen.value=10**screenValue;
        }

        else if(buttonText=='1/x'){
            screen.value=1/screenValue;
        }

        else if(buttonText=='DEL'){
            clrValue=screenValue;
            screenValue=clrValue.slice(0,-1);
            screen.value=screenValue;
        }

        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    })
}