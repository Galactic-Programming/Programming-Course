<?php
    /** Logical Operators in PHP
     * Are used to combine conditional statements to create more complex conditions.
     * && (and) - true if both conditions are true
     * || (or) - true if at least one condition is true
     * ! (not) - true if the condition is false
     */

    $temp = 25;
    $cloudy = true;
    $age = 20;
    $citizenship = true;

    if ($temp >= 0 && $temp <= 30) {
        echo "The weather is Good! <br>";
    }
    else if ($temp < 0 || $temp > 30) {
        echo "The weather is Bad! <br>";
    }
    else {
        echo "The weather is Unknown! <br>";
    }

    if (!$cloudy) {
        echo "The weather is Sunny! <br>";
    }
    else {
        echo "The weather is Cloudy! <br>";
    }

    if ($age >= 18 && $citizenship) {
        echo "You are eligible to vote! <br>";
    }
    else if ($age < 18 || !$citizenship) {
        echo "You are not eligible to vote! <br>";
    }
    else {
        echo "Your voting eligibility is unknown! <br>";
    }

    $child = false;
    $senior = false;
    $ticket = null;

    if ($child || $senior) {
        $ticket = 10;
    }
    else {
        $ticket = 20;
    }
?>