
function plus(){        
    let a=document.getElementsByName('num1')[0].value;
    a=+a
    let b=document.getElementsByName('num2')[0].value;
    b=+b;
    let result=a+b;
    document.getElementById('res').innerHTML="Pезультат: "+result;
}

function minus(){        
    let a=document.getElementsByName('num1')[0].value;
    a=+a
    let b=document.getElementsByName('num2')[0].value;
    b=+b;
    let result=a-b;
    document.getElementById('res').innerHTML="Pезультат: "+result;
}
function multiplication(){        
    let a=document.getElementsByName('num1')[0].value;
    a=+a
    let b=document.getElementsByName('num2')[0].value;
    b=+b;
    let result=a*b;
    document.getElementById('res').innerHTML="Pезультат: "+result;
}
