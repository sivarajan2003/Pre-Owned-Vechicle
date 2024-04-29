<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") { 
    if (isset($_POST['Name']) && isset($_POST['email']) && isset($_POST['Password'])) {
        $Name = $_POST['Name'];
        $email = $_POST['email'];
        $password = $_POST['Password'];

        $valid_Name = "Dhanush";
        $valid_email = "dhanushts.21msc@kongu.edu";
        $valid_password = "dhanush123";

        if ($Name === $valid_Name && $email === $valid_email && $password === $valid_password) {
            echo "success";
            exit;
        } else {
            echo "failure";
            exit;
        }
    } else {
        echo "invalid";
        exit;
    }
} else {
    header("HTTP/1.1 403 Forbidden");
    echo "Invalid request method";
    exit;
}
?>



