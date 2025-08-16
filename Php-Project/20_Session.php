<?php
    /** Session
     * SGB used to store information on a user to be used across multiple pages.
     * A user is assigned a session-id when they first visit the site.
     * This session-id is stored in a cookie on the user's browser.
     * Example: User logs in, session is created, and user data is stored in the session.
     */

    session_start(); // Start the session
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="20_Session.php" method="post">
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username"><br>

        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password"><br>

        <input type="submit" name="login" value="Login"><br>
    </form>
</body>
</html>

<?php
    // Example of setting a session variable
    // $_SESSION["username"] = "JohnySilverhand";
    // $_SESSION["password"] = "Samurai123";

    if(isset($_POST["login"])) {

        if(!empty($_POST["username"]) && !empty($_POST["password"])) {
            $_SESSION["username"] = $_POST["username"];
            $_SESSION["password"] = $_POST["password"];

            header("Location: 20_Session1.php");
        }
        else {
            echo "Please enter both username and password.<br>";
        }
    }
?>