<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="9_WhileLoop.php" method="post">
        <label for="#">Enter a number to count to:</label>
        <input type="text" name="counter" id="counter">
        <input type="submit" value="start"><br>
    </form>
</body>

</html>

<?php
    /** While Loops in PHP
     * While loops are used to execute a block of code as long as a specified condition is true.
     * They are useful when you don't know in advance how many times you want to execute a statement or a block of statements.
     */

    if (isset($_POST["counter"])) {
        $counter = $_POST["counter"];
        // Validate and sanitize input
        if (filter_var($counter, FILTER_VALIDATE_INT) !== false && (int)$counter > 0) {
            $counter = (int)$counter;
            while ($counter > 0) {
                echo $counter . "<br>";
                $counter--;
            }
        } else {
            echo "Please enter a valid positive integer.";
        }
    }
?>