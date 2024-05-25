document.getElementById("showpassword").addEventListener("click",function(){
    const passwordinput = document.getElementById("password");
    const type = passwordinput.getAttribute("type")==="password"?"text":"password";
passwordinput.setAttribute("type",type);
let highpass = document.getElementById("hidepassword");



this.classList.toggle("fa-eye-slash");
highpass.style.display="block";

});
document.getElementById("hidepassword").addEventListener("click",function(){
    const passwordinput = document.getElementById("password");
    const type = passwordinput.getAttribute("type")==="password"?"text":"password";
passwordinput.setAttribute("type",type);
let highpass = document.getElementById("showpassword");


this.classList.toggle("fa-eye");
// highpass.style.display="block";

});


document.getElementById("showpassword1").addEventListener("click", function() {
    const passwordInput = document.getElementById("repassword");
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    this.classList.toggle("fa-eye-slash");
    document.getElementById("hidepassword1").style.display = "block";
  });

  document.getElementById("hidepassword1").addEventListener("click", function() {
    const passwordInput = document.getElementById("repassword");
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    this.classList.toggle("fa-eye");
    // document.getElementById("showpassword1").style.display = "none";
  });

// script.js


