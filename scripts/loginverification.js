var user = localStorage.getItem('userName');
if (user){
  
}
else {
  window.location.href="redirect.html";
}
document.getElementById("logoutbutton").onclick=redirect
function redirect(){
  localStorage.clear()
  window.location.href="index.html"
}