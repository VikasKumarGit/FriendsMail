function validateKey(){
    var tEXT=document.getElementById('velidateText')
    var msgBox=document.getElementById('unlockMessage')

    var Text=tEXT.value;
    var TEXT=Text.toUpperCase();

    if(validate_key==TEXT){
        alert('Validation Sucess')
        var textElement=document.createElement('p')
        textElement.appendChild(document.createTextNode(msgg.message))
        msgBox.appendChild(textElement)

    }else{
        // console.log('false')
        alert('Validation Failed... Input key is wrong')
    }

}