var containerHeader = document.getElementById("header");
var containerFooter = document.getElementById("footer");

//----header and footer UI-------
function GenerateHeader() {
  containerHeader.innerHTML = ` <nav  id="nav-bar"> 
  <a href="index.html"> <img src="assests/images/logo.png" id="logo-image" alt="logo" height="200px" width="150px"></a>
    <div class="bs-example">
     <button class="btn btn-sm btn-light" data-toggle="modal" data-target="#myModal" id="loginContainer" >LOGIN</button>
     <button class="btn btn-sm btn-light" id="logoutContainer" style="display: none;" onclick="logOut()">LOGOUT</button>
 </div>
</nav>`;
}

function GenerateFooter() {
  containerFooter.innerHTML = `<div id="contact">   
<button type="button" class="btn btn-sm btn-info" data-toggle="modal" data-target="#exampleModal">
Contact Us
</button>
</div>  

<div id="copy-right">  
    &copy; 2020 ROOM SEARCH PVT. LTD.
</div>  

<div id="socail-media">   
    <a href="https://www.facebook.com" target="_blank"><img id="socail-media-images" src="assests/images/facebook.png" height="20px" width="22px"></a>
    <a href="https://www.instagram.com" target="_blank"><img id="socail-media-images" src="assests/images/instagram.png" height="20px" width="22px"></a>
    <a href="https://www.twitter.com" target="_blank"><img id="socail-media-images" src="assests/images/twitter.png" height="20px" width="22px"></a>
</div>`;
}
//----header and footer UI-------

//------login and contact UI-------
var containerlogin = document.getElementById("loginModel");
var containerContact = document.getElementById("contactModel");

function GenerateLoginModel() {
  containerlogin.innerHTML = ` <div class="modal-header">
  <h5 class="modal-title">Please Login</h5>
  <button type="button" class="close" data-dismiss="modal">&times;</button>
</div>

<div class="modal-body">

  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">UserName</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" placeholder="Enter username" id="user-name" name="username" required>
    </div>
 </div>
  
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="Pass-word" name="password" placeholder="Password" required>
    </div>
  </div>
</div>

<div class="modal-footer">    
<div class="col-md-12 text-center">                 
<button class="btn btn-primary" onclick="afterLogin()">Login</button>
</div>      
</div>`;
}

function GenerateContactModel() {
  containerContact.innerHTML = `<div class="modal-header">
  <h5 class="modal-title" id="exampleModalLabel">Get in touch</h5>
  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

<div class="modal-body">
  <div>
    Thank you for reaching out!!!
    <br>
    please enter your email and we will get back to you
  </div>
  <br>
  
    <div class="form-group row">
      <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="email" class="form-control" placeholder="Enter your email id" id="email" name="email" required>
      </div>
   </div>      
</div>

<div class="modal-footer">    
  <div class="col-md-12  text-right">                 
  <button class="btn btn-primary">Submit</button>
</div>      
</div> `;
}
//------login and contact UI-------

GenerateHeader();
GenerateFooter();
GenerateLoginModel();
GenerateContactModel();

//------login and logout function----

function popup() {
  return alert("Sucessfully loggedin");
}
var loginContainer = document.getElementById("loginContainer");
var LogoutContainer = document.getElementById("logoutContainer");
if (
  sessionStorage.isLoggedIn != undefined &&
  sessionStorage.isLoggedIn != false
) {
  DoThisWhenuserIsLoggedIn();
  document.getElementById("payNow-Button").disabled = false;
} else {
  loginContainer.style.display = "block";
  LogoutContainer.style.display = "none";
}

function DoThisWhenuserIsLoggedIn() {
  loginContainer.style.display = "none";
  LogoutContainer.style.display = "block";
  loginContainer.style.display = "none";
  document.getElementById("payNow-Button").disabled = false;
}

function afterLogin() {
  popup();
  var uname = document.getElementById("user-name").value;
  var password = document.getElementById("Pass-word").value;

  if (uname == "admin" && password == "admin") {
    sessionStorage.setItem("isLoggedIn", true);
    sessionStorage.setItem("user", uname);

    var loginContainer = document.getElementById("loginContainer");
    loginContainer.style.display = "none";
    DoThisWhenuserIsLoggedIn();
    document.getElementById("payNow-Button").disabled = false;
  }
}

function logOut() {
  sessionStorage.removeItem("isLoggedIn");
  sessionStorage.removeItem("user");
  loginContainer.style.display = "block";
  LogoutContainer.style.display = "none";
  document.getElementById("payNow-Button").disabled = true;
}

//------login and logout function----
