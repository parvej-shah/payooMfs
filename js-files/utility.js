function getValueById(elementId){
    const value =  document.getElementById(elementId).value;
    return value;
}
function showAndHideElementById(elementId1,elementId2){
document.getElementById(elementId1).classList.remove('hidden');
document.getElementById(elementId2).classList.add('hidden');
}

function getInnerTextById(elementId){
    const innerText = document.getElementById(elementId).innerText;
    return Number(innerText);
}
function setInnerTextById(elementId,value){
    document.getElementById(elementId).innerText = value;
}
function userValidation(elementId){
    const currentPin = "1234";
    const userPin = getValueById(elementId);
    if(currentPin === userPin){
        return true;
    }
    else{
        
        return false;
    }
}