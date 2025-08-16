<?php
    /**
     * Arrays in PHP
     * Arrays are used to store multiple values in a single variable.
     * They are useful when you want to store a collection of values in a single variable.
     */

    $foods = array(
        "Pizza",
        "Burger",
        "Pasta",
        "Salad",
        "Sushi"
    );

    $foods[4] = "Tacos"; // Changing the last element
    array_push($foods,"Burrito"); // Adding an element to the end
    array_pop($foods); // Removing the last element
    array_shift($foods); // Removing the first element
    array_unshift($foods, "Ice Cream"); // Adding an element to the beginning

    $reversed_foods = array_reverse($foods); // Reversing the array

    foreach ($foods as $food) {
        echo $food . "<br>";
    }

    foreach ($reversed_foods as $food) {
        echo $food . "<br>";
    }

    echo count($foods); // Counting the number of elements in the array
?>