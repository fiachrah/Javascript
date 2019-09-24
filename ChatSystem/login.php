<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sign Up</title>

    <!-- Font Icon -->
    <link rel="stylesheet" href="fonts/material-icon/css/material-design-iconic-font.min.css">
    <link rel="stylesheet" href="vendor/jquery-ui/jquery-ui.min.css">

    <!-- Main css -->
    <link rel="stylesheet" href="css/style.css">


<script>

function checkForm () {

    var user = document.getElementById("username").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var pass = document.getElementById("password").value;
    var pass2 = document.getElementById("re_password").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;

    // Username

    if(user == "" || user.length > 15 || user.length < 3){

        window.alert("Error! Invalid Username!");


    }

    // First name

    else if(fname == "" || fname.length > 15 || fname.length < 3){

        window.alert("Error! Invalid First Name!");


    }

    // Last Name

    else if(lname == "" || lname.length > 15 || lname.length < 3){

        window.alert("Error! Invalid Last Name!");


    }

    // Password

    else if(pass== "" || pass.length > 20 || pass.length < 5){

        window.alert("Error! Invalid Password! (Must be between 5 and 20 characters)");


    }

    else if(pass != pass2){

        window.alert("Error! Passwords Do Not Match)");


    }

    // Email

    else if(email == "" ||email.length < 8){

        window.alert("Error! Invalid Email!");


    }

    // Encrypt and Submit

    else {

        document.getElementById("password").value = encrypt(encrypt(pass));
        document.getElementById("form").action = "dbHand.php";
        document.forms["form"].submit();

    }


}

function encrypt (password) {

    var stringPass = "";

    for (var i = 0; i < password.length; i++) {

        stringPass += String.fromCharCode(((((password.charCodeAt(i))*352653879129)%94)+33));

    }

    return stringPass;

}

</script>


</head>
<body>

    <div class="main">

        <section class="signup">
            <!-- <img src="images/signup-bg.jpg" alt=""> -->
            <div class="container">
                <div class="signup-content">
                    <form method="POST" id="form" class="signup-form">
                   
                        <div class="form-group">
                            <label for="phone_number">Username</label>
                            <input type="text" class="form-input" name="username" id="username" />
                        </div>
                                                <div class="form-group">
                            <label for="phone_number">Password</label>
                            <input type="password" class="form-input" name="email" id="email" />
                        </div>
            
                        
                        <div class="form-group">
                            <button onclick ="checkForm();" class="form-submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    </div>

    <!-- JS -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/jquery-ui/jquery-ui.min.js"></script>
    <script src="vendor/jquery-validation/dist/jquery.validate.min.js"></script>
    <script src="vendor/jquery-validation/dist/additional-methods.min.js"></script>
    <script src="js/main.js"></script>
</body><!-- This templates was made by Colorlib (https://colorlib.com) -->
</html>