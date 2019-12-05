var user = localStorage.getItem('userName');
if (user) {

} else {
    window.location.href = "redirect.html";
}
function displayHelpfulMessage(message){
    let messageBox= document.createElement("div");
    messageBox.id = message;
    messageBox.className = "Goals";
    messageBox.innerHTML = message;
    return messageBox
    
}

