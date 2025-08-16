<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <input type="submit" value="Submit">
    </form>
</body>
</html>

<?php
    /** Server
     * SGB that contains headers, paths, and script locations.
     * The entries in this array are created by the web server.
     * Show nearly everything you need to know about the current web page environment.
     */

    // foreach ($_SERVER as $key => $value) {
    //     echo "$key: $value<br>";
    // }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = htmlspecialchars($_POST['name']);
        echo "Hello, $name!";
    } else {
        echo "Please submit your name.";
    }
?>