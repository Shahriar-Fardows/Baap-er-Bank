document.getElementById("login").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
  if (email == "shahriarfardows@gmail.com" && password == "Shahriar") {
    alert("Login successfully");
    window.location.href = "bank.html";
  }
  else {
    alert("Login failed");
  }
})