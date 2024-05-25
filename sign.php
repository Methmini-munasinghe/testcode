
<?php
// Database connection details
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "library_system"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}//else {
  // echo "connected";}

// print_r($_POST);


// Retrieve form data
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
$id = $_POST['id'];
$fname = $_POST['firstname'];
$lname = $_POST['lastname'];
$email = $_POST['email'];
$user = $_POST['user'];
$password = $_POST['password'];
}





// SQL query to insert data into the database
$sql = "INSERT INTO user (user_id ,first_name, last_name, email, username, password) 
        VALUES ('$id','$fname', '$lname', '$email', '$user','$password')";
// print_r($sql);

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>









