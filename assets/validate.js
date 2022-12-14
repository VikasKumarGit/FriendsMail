// import (friendsName);
var inputName;
function clickME(){

    let correct=false;
    var name=prompt('Enter Your Name to Continue');
    upperName=name.toUpperCase();
    
    var homeBody=document.getElementById('namePanel');
    var messageBody=document.getElementById('messagePanel');
    var specialMessageBody=document.getElementById('specialMPannel');

    for(value of Object.getOwnPropertyNames(friendsName)){
        if(value==upperName && value=='SHUBHA'){
            alert('you got a special message form Vikas')
            inputName=value;
            homeBody.className='hideAll';
            messageBody.className='messagePanel';
            specialMessageBody.className='messagePanel';
            correct=true;
            break;
        }
        else if(value==upperName){
            alert('You got a message... press OK to continue');
            inputName=value;
            homeBody.className='hideAll';
            messageBody.className='messagePanel';
            specialMessageBody.className='hideAll';
            correct=true;
        }
    }
    if(correct==false){
        alert('Not Found... try with yourNameRollno. ex: rohit45');
        location.reload()
    }
    printMessage();     
}



// var FN=window.inputName;