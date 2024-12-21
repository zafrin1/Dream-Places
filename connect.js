
 document.getElementById("registerFormA")
 .addEventListener("submit",function(event){
  event.preventDefault();
  const name =document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const comments =document.getElementById("comments").value;
 const user = {
  name : name,
  email:email,
  comments:comments,
 };
 localStorage.setItem(email,JSON.stringify(user));
 alert("Thank You.")
 window.location.href ="index1.html";
 });
