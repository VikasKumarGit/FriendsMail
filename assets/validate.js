var inputName='';

function clickME(){
    let correct=false;
    var name=prompt('Enter Your Name to Continue');
    upper=name.toUpperCase();
    
    for(value of Object.getOwnPropertyNames(friendsName)){
        if(value==upper){
            alert('you got it...');
            window.location.href="/message/vikas.html";
            inputName=value;
            console.log(inputName);
            correct=true;
        }
    }
    if(correct==false){
        alert('LOL');
        console.log('lol');
    }   
}