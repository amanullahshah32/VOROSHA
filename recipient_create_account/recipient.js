function recipintValidity(){
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return false;
    }else{
        alert("Loging Successfully...");
        window.location.href = "http://127.0.0.1:5501/recipient_create_account/recipientDashboard.html";
    }
}
function registrationSuc(){
    alert("Registration Successfuly...");
    window.location.href = "http://127.0.0.1:5501/recipient_create_account/login.html";
  }