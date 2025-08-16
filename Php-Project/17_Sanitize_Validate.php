<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="17_Sanitize_Validate.php" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"><br>

        <label for="age">Age:</label>
        <input type="text" id="age" name="age"><br>

        <label for="email">Email:</label>
        <input type="text" id="email" name="email"><br>

        <input type="submit" name="login" value="login"><br>
    </form>
</body>

</html>

<?php
    /** Sanitize and validate user input */

    if (isset($_POST["login"])) {

        $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);

        if (empty($username) || strlen($username) < 3 || strlen($username) > 20) {
            $usernameError = "Username must be between 3 and 20 characters long.<br>";
        }

        $age = filter_input(INPUT_POST,"age", FILTER_SANITIZE_NUMBER_INT);

        if (!is_numeric($age) || $age <= 0 || $age > 120) {
            $ageError = "Please enter a valid age between 1 and 120.<br>";
        }

        $email = filter_input(INPUT_POST,"email", FILTER_SANITIZE_EMAIL);

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailError = "Please enter a valid email address.<br>";
        }

        if (isset($usernameError) || isset($ageError) || isset($emailError)) {
            // Display errors if any validation fails
            
            # 1st way
            echo "Please fix the following errors:<br>";
            echo $usernameError ?? "";
            echo $ageError ?? "";
            echo $emailError ?? "";

            # 2nd way
            // if (isset($usernameError)) echo $usernameError . "<br>";
            // if (isset($ageError)) echo $ageError . "<br>";
            // if (isset($emailError)) echo $emailError . "<br>";
        } else {
            echo "Hello, {$username}!<br>";
            echo "Your age is {$age}.<br>";
            echo "Your email is {$email}.<br>";
        }
    }
?>