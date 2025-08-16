<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="12_Isset_Empty.php" method="post">
        <label for="#">Username:</label>
        <input type="text" name="username" id="username">
        <label for="#">Password:</label>
        <input type="password" name="password" id="password">
        <input type="submit" name="login" value="Log in"><br>
    </form>
</body>
</html>

<?php
    /**
     * Isset and Empty in PHP
     * The isset() function checks if a variable is set and is not NULL.
     * The empty() function checks if a variable is empty, meaning it has no value or is not set.
     */

    // $username = null;

    // if (isset($username)) {
    //     echo "Username is set.<br>";
    // } else {
    //     echo "Username is not set.<br>";
    // }

    // if (empty($username)) {
    //     echo "Username is empty.<br>";
    // } else {
    //     echo "Username is not empty.<br>";
    // }

    if (isset($_POST["login"])) {

        $username = $_POST["username"];
        $password = $_POST["password"];

        if (empty($username)) {
            echo "Username is empty.<br>";
        } 
        else if (empty($password)) {
            echo "Password is empty.<br>";
        } 
        else {
            echo "Hello {$username}!<br>";
        }
    }

    foreach ($_POST as $key => $value) {
        if (isset($value)) {
            echo "The value of {$key} is set to {$value}.<br>";
        } else {
            echo "The value of {$key} is not set.<br>";
        }

        if (empty($value)) {
            echo "The value of {$key} is empty.<br>";
        } else {
            echo "The value of {$key} is not empty.<br>";
        }
    }
?>