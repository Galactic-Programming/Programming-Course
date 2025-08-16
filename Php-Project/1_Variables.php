<?php
    // Variables in PHP = a reuseable container for storing data string, integer, float, boolean, array, object, null
    // Variables are case-sensitive and can start with a letter or underscore, followed by letters, numbers, or underscores.

    $name = "Johny";
    $food = "Pizza";

    $age = 29;
    $unit = "3";

    $price = "$10.99";
    $tax_rate = "0.07";

    $isGood = true;
    $isNeutral = false;

    echo "Hello, my name is {$name} and I am {$age} years old.! <br>";
    echo "I like to eat {$food}. <br>";
    echo "So I've ordered {$unit} {$food}. <br>";
    echo "Each {$food} costs me {$price}$. <br>";
    echo "The sale tax rate is: {$tax_rate}%. <br>";
    echo "Is the food good? " . ($isGood ? "Yes" : "No") . "<br>";
    echo "Is the food neutral? " . ($isNeutral ? "Yes" : "No") . "<br>";
?>