function printMessage(){
    var alpha=document.getElementById('alpha')
    var beta=document.getElementById('beta')

    var alphaElement=document.createElement('span')
    var betaElement=document.createElement('p')

    alphaElement.appendChild(document.createTextNode(inputName))
    betaElement.appendChild(document.createTextNode(friendsName[inputName]))

    alpha.appendChild(alphaElement)
    beta.appendChild(betaElement)
}