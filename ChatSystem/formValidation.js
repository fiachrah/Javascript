function checkFname () {

    var error = 0;

    var fname = document.getElementById("fname").value;


    if (fname == ""){

        error = 1;

    }

    else if (fname.length < 2 || fname.length > 15){

        error = 2;

    }
    else {

        var i  =0;

        for (i = 0; i < fname.length; i++){

            if ((fname.charCodeAt(i) < 65 || fname.charCodeAt(i) > 90) && (fname.charCodeAt(i) < 96 || fname.charCodeAt(i) > 123)){

                error = 3;
            }

        }

        var j = 0;
        var lowerValue = fname.toLowerCase();

        for (j = 0; j < bannedWords.length; j++){

            if (lowerValue.includes(bannedWords[j])){

                error = 4;

            }
        }



    }
    


    if (error == 0){

        document.getElementById("spanFname").innerHTML = "";
        document.getElementById("fname").style.color = "black";
        document.getElementById("fname").style.border = "1px solid black";


        return 1;

    }
    else if (error == 1) {

        document.getElementById("spanFname").innerHTML = "This field cannot be left empty";
        document.getElementById("fname").style.color = "red";
        document.getElementById("fname").style.border = "1px solid red";


        return 0;

    }
    else if (error == 2) {

        document.getElementById("spanFname").innerHTML = "Must be 2 - 15 characters in length";
        document.getElementById("fname").style.color = "red";
        document.getElementById("fname").style.border = "1px solid red";


        return 0;

    }
    else if (error == 3){

        document.getElementById("spanFname").innerHTML = "Must contain letters only";
        document.getElementById("fname").style.color = "red";
        document.getElementById("fname").style.border = "1px solid red";


        return 0;
    }
    else if (error == 4){

        document.getElementById("spanFname").innerHTML = "That name is not allowed";
        document.getElementById("fname").style.color = "red";
        document.getElementById("fname").style.border = "1px solid red";


        return 0;
    }





}


function checkLname () {

    var error = 0;

    var lname = document.getElementById("lname").value;


    if (lname == ""){

        error = 1;

    }

    else if (lname.length < 2 || lname.length > 15){

        error = 2;

    }
    else {

        var i  =0;

        for (i = 0; i < lname.length; i++){

            if ((lname.charCodeAt(i) < 65 || lname.charCodeAt(i) > 90) && (lname.charCodeAt(i) < 96 || lname.charCodeAt(i) > 123)){

                error = 3;
            }

        }

        var j = 0;
        var lowerValue = lname.toLowerCase();

        for (j = 0; j < bannedWords.length; j++){

            if (lowerValue.includes(bannedWords[j])){

                error = 4;

            }
        }



    }
    


    if (error == 0){

        document.getElementById("spanLname").innerHTML = "";
        document.getElementById("lname").style.color = "black";
        document.getElementById("lname").style.border = "1px solid black";


        return 1;

    }
    else if (error == 1) {

        document.getElementById("spanLname").innerHTML = "This field cannot be left empty";
        document.getElementById("lname").style.color = "red";
        document.getElementById("lname").style.border = "1px solid red";


        return 0;

    }
    else if (error == 2) {

        document.getElementById("spanLname").innerHTML = "Must be 2 - 15 characters in length";
        document.getElementById("lname").style.color = "red";
        document.getElementById("lname").style.border = "1px solid red";


        return 0;

    }
    else if (error == 3){

        document.getElementById("spanLname").innerHTML = "Must contain letters only";
        document.getElementById("lname").style.color = "red";
        document.getElementById("lname").style.border = "1px solid red";


        return 0;
    }
    else if (error == 4){

        document.getElementById("spanLname").innerHTML = "That name is not allowed";
        document.getElementById("lname").style.color = "red";
        document.getElementById("lname").style.border = "1px solid red";


        return 0;
    }





}

function checkDob () {

    var error = 0;

    var dob = document.getElementById("dob").value;


    if (dob == ""){

        error = 1;

    }
    


    if (error == 0){

        document.getElementById("spanDob").innerHTML = "";
        document.getElementById("dob").style.color = "black";
        document.getElementById("dob").style.border = "1px solid black";


        return 1;

    }
    else if (error == 1) {

        document.getElementById("spanDob").innerHTML = "This field cannot be left empty";
        document.getElementById("dob").style.color = "red";
        document.getElementById("dob").style.border = "1px solid red";

        return 0;

    }





}

function checkUname () {

    var error = 0;

    var uname = document.getElementById("uname").value;


    if (uname == ""){

        error = 1;

    }

    else if (uname.length < 5 || uname.length > 20){

        error = 2;

    }
    else {

        var i  =0;

        for (i = 0; i < uname.length; i++){

            if ((uname.charCodeAt(i) < 65 || uname.charCodeAt(i) > 90) && (uname.charCodeAt(i) < 97 || uname.charCodeAt(i) > 123) && (uname.charCodeAt(i) < 48 || uname.charCodeAt(i) > 57) && (uname.charCodeAt(i) != 95) && (uname.charCodeAt(i) != 45)){

                error = 3;
            }

        }

        var j = 0;
        var lowerValue = uname.toLowerCase();

        for (j = 0; j < bannedWords.length; j++){

            if (lowerValue.includes(bannedWords[j])){

                error = 4;

            }
        }



    }
    


    if (error == 0){

        document.getElementById("spanUname").innerHTML = "";
        document.getElementById("uname").style.color = "black";
        document.getElementById("uname").style.border = "1px solid black";


        return 1;

    }
    else if (error == 1) {

        document.getElementById("spanUname").innerHTML = "This field cannot be left empty";
        document.getElementById("uname").style.color = "red";
        document.getElementById("uname").style.border = "1px solid red";


        return 0;

    }
    else if (error == 2) {

        document.getElementById("spanUname").innerHTML = "Must be 5 - 20 characters in length";
        document.getElementById("uname").style.color = "red";
        document.getElementById("uname").style.border = "1px solid red";


        return 0;

    }
    else if (error == 3){

        document.getElementById("spanUname").innerHTML = "Can only contain letters, numbers, underscores and dashes";
        document.getElementById("uname").style.color = "red";
        document.getElementById("uname").style.border = "1px solid red";


        return 0;
    }
    else if (error == 4){

        document.getElementById("spanUname").innerHTML = "That username is not allowed";
        document.getElementById("uname").style.color = "red";
        document.getElementById("uname").style.border = "1px solid red";


        return 0;
    }
    else if (error == 5){

        document.getElementById("spanUname").innerHTML = "That username is already taken";
        document.getElementById("uname").style.color = "red";
        document.getElementById("uname").style.border = "1px solid red";


        return 0;
    }





}

function checkEmail () {

    var error = 0;

    var email = document.getElementById("email").value;


    if (email == ""){

        error = 1;

    }

    else {

        var i  =0;

        for (i = 0; i < email.length; i++){

            if (email.indexOf("@") == -1 || email.indexOf(".") == -1){

                error = 2;
            }

        }

        var j = 0;
        var lowerValue = email.toLowerCase();

        for (j = 0; j < bannedWords.length; j++){

            if (lowerValue.includes(bannedWords[j])){

                error = 3;

            }
        }



    }
    


    if (error == 0){

        document.getElementById("spanEmail").innerHTML = "";
        document.getElementById("email").style.color = "black";
        document.getElementById("email").style.border = "1px solid black";


        return 1;

    }
    else if (error == 1) {

        document.getElementById("spanEmail").innerHTML = "This field cannot be left empty";
        document.getElementById("email").style.color = "red";
        document.getElementById("email").style.border = "1px solid red";


        return 0;

    }

    else if (error == 2){

        document.getElementById("spanEmail").innerHTML = "Invalid email address";
        document.getElementById("email").style.color = "red";
        document.getElementById("email").style.border = "1px solid red";


        return 0;
    }
    else if (error == 3){

        document.getElementById("spanEmail").innerHTML = "That email address is not allowed";
        document.getElementById("email").style.color = "red";
        document.getElementById("email").style.border = "1px solid red";


        return 0;
    }
    else if (error == 4){

        document.getElementById("spanEmail").innerHTML = "That email address is already in use";
        document.getElementById("email").style.color = "red";
        document.getElementById("email").style.border = "1px solid red";


        return 0;
    }





}

function checkPword () {

    var error = 0;

    var pword = document.getElementById("pword").value;


    if (pword == ""){

        error = 1;

    }
    else if (pword.length < 6){

        error = 2;

    }


    


    if (error == 0){

        document.getElementById("spanPword").innerHTML = "";
        document.getElementById("pword").style.color = "black";
        document.getElementById("pword").style.border = "1px solid black";


        return 1;

    }
    else if (error == 1) {

        document.getElementById("spanPword").innerHTML = "This field cannot be left empty";
        document.getElementById("pword").style.color = "red";
        document.getElementById("pword").style.border = "1px solid red";


        return 0;

    }

    else if (error == 2){

        document.getElementById("spanPword").innerHTML = "Must be 6+ characters in length";
        document.getElementById("pword").style.color = "red";
        document.getElementById("pword").style.border = "1px solid red";


        return 0;
    }





}

function checkRePword () {

    var error = 0;

    var repword = document.getElementById("repword").value;
    var pword = document.getElementById("pword").value;


    if (repword == ""){

        error = 1;

    }
    else if (repword != pword){

        error = 2;

    }

    


    if (error == 0){

        document.getElementById("spanRePword").innerHTML = "";
        document.getElementById("repword").style.color = "black";
        document.getElementById("repword").style.border = "1px solid black";


        return 1;

    }
    else if (error == 1) {

        document.getElementById("spanRePword").innerHTML = "This field cannot be left empty";
        document.getElementById("repword").style.color = "red";
        document.getElementById("repword").style.border = "1px solid red";


        return 0;

    }

    else if (error == 2){

        document.getElementById("spanRePword").innerHTML = "Passwords don't match";
        document.getElementById("repword").style.color = "red";
        document.getElementById("repword").style.border = "1px solid red";


        return 0;
    }





}

function checkForm () {


    var a = checkFname();
    var b = checkLname();
    var c = checkDob();
    var d = checkUname();
    var e = checkEmail();
    var f = checkPword();
    var g = checkRePword();



    if(a == 1 && b == 1 && c == 1 && d == 1 && e == 1 && f == 1) {
        
        document.forms["form"].submit();

    }


}