<?php

	// Server Information

	$dbServerName = "localhost";
	$dbUserName = "root";
	$dbPassword = "";
	$dbDatabase = "chat";

	// Form Data

	$Username = strtolower($_POST['username']);
	$FirstName = $_POST['fname'];
	$LastName = $_POST['lname'];
	$Password = encrypt($_POST['password']);
	$Email = strtolower($_POST['email']);
	$DOB = $_POST['dob'];
	$Level = 2;

	// Add Email and Username to Respective Arrays

	$myfile = fopen("users.js", "a") or die("Error");
	$txt = "\n".",\"".$Username."\"";
	fwrite($myfile, $txt);
	fclose($myfile);


	// Establish Connection

	$conn= mysqli_connect($dbServerName, $dbUserName, $dbPassword, $dbDatabase);

	// Check Connection

	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 

	// Insert Data into Database

	$sql = "INSERT INTO user (`Username`,`First Name`,`Last Name`,`Password`,`Email`,`DOB`,`Level`)
	VALUES ('$Username','$FirstName','$LastName','$Password','$Email','$DOB','$Level')";

	// Check if Insertion was Successful

	if ($conn->query($sql) === TRUE) {
	    $last_id = $conn->insert_id;
	    header('Location: '.'login.php');
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}

	$conn->close();

	// Encrypt Password

function encrypt ($password) {

    $stringPass = '';

    for ($i = 0; $i < strlen($password); $i++) {

        $stringPass[$i] = chr((abs(((ord($password[$i]))*352653879129)%86))+40);



    }

    return $stringPass;

}

?>
