<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="11_Associative_Arrays.php" method="post">
        <label for="#">Enter a country name:</label>
        <input type="text" name="country" id="country">
        <input type="submit"><br>
    </form>
</body>

</html>

<?php
    /**
     * Associative Arrays in PHP
     * Associative arrays are arrays that use named keys that you assign to them.
     * They are useful when you want to access elements by a specific key rather than by an index.
     */


    $capitals = array(
        "USA" => "Washington, D.C.",
        "Canada" => "Ottawa",
        "UK" => "London",
        "France" => "Paris",
        "Germany" => "Berlin"
    );

    if (isset($_POST["country"]) && array_key_exists($_POST["country"], $capitals)) {
        $capital = $capitals[$_POST["country"]];
        echo "The capital is {$capital}.<br>";
    } elseif (isset($_POST["country"])) {
        echo "Country not found in the list.<br>";
    }

    /*
    $capitals['USA'] = "Las Vegas"; // Changing the capital of USA
    $capitals['Italy'] = "Rome"; // Adding a new country and its capital

    array_pop( $capitals ); // Removing the last element
    array_shift( $capitals ); // Removing the first element

    $keys = array_keys( $capitals ); // Getting the keys of the array
    $values = array_values( $capitals ); // Getting the values of the array

    foreach ($capitals as $key => $value) {
        echo "The capital of {$key} is {$value}.<br>";
    }

    echo "<br>";

    foreach ($keys as $key) {
        echo "Key: {$key}<br>";
    }

    echo "<br>";

    foreach ($values as $value) {
        echo "Value: {$value}<br>";
    }

    echo "<br>";

    $capitals = array_flip( $capitals ); // Flipping keys and values

    foreach ($capitals as $key => $value) {
        echo "The country for capital {$key} is {$value}.<br>";
    }

    echo "<br>";

    $reversed_capitals = array_reverse( $capitals ); // Reversing the array

    foreach ($reversed_capitals as $key => $value) {
        echo "Reversed: The country for capital {$key} is {$value}.<br>";
    }
    */
?>