<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>For Loops in PHP</h1>
    <p>For loops are used to execute a block of code a specified number of times.</p>
    <p>They are useful when you know in advance how many times you want to execute a statement or a block of statements.</p>

    <form action="8_ForLoop.php" method="post">
        <label for="#">Enter a number to count to:</label>
        <input type="text" name="counter" id="counter">
        <input type="submit" value="start">
    </form>
</body>

</html>

<?php
    /** For Loops in PHP
     * For loops are used to execute a block of code a specified number of times.
     * They are useful when you know in advance how many times you want to execute a statement or a block of statements.
     */

    // for ($i = 0; $i < 5; $i++) {
    //     echo "This is iteration number " . ($i + 1) . ".<br>";
    // }

    // $fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

    // echo "Here are some fruits:<br>";

    // for ($i = 0; $i < count($fruits); $i++) {
    //     echo $fruits[$i] . "<br>";
    // }

    $counter = 0;
    if (isset($_POST["counter"]) && is_numeric($_POST["counter"])) {
        $counter = (int)$_POST["counter"];
        for ($i = $counter; $i > 0; $i--) {
            echo "Counting down: " . $i . "<br>";
        }
    } elseif (isset($_POST["counter"])) {
        echo "Please enter a valid numeric value.";
    }


?>