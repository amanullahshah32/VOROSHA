function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return false;
    }else{
        alert("Loging Successfully");
        window.location.href = "http://127.0.0.1:5501/doner_create_account/donerDashboard.html";
    }
  }
  function registrationSuc(){
    alert("Registration Successfuly...");
    window.location.href = "http://127.0.0.1:5501/doner_create_account/login.html";
  }
  function editProfile() {
    let newWin = window.open("about:blank", "Edit Profile", "width=1000,height=800");

newWin.document.location.href= "http://127.0.0.1:5501/doner_create_account/createaccount.html";
    
  }