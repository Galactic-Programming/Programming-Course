<?php
    // * If  Statement in PHP
    // If some condition is true, then execute the code block inside the if statement.
    // If the condition is false, then the code block will not be executed.

    $age = 21;

    if ($age >= 18) {
        echo "You are an adult. <br>";
    }
    else if ($age == 0) {
        echo "You are a newborn. <br>";
    }
    else {
        echo "You are a minor. <br>";
    }

    $adult = true;

    if ($adult == true) {
        echo "You may enter this club. <br>";
    }
    else {
        echo "You may not enter this club. <br>";
    }

    $hours = 40;
    $rate = 15.50;
    $weekly_pay = null;

    if ($hours <= 0) {
        $weekly_pay = 0;
    }
    else if ($hours <= 40) {
        $weekly_pay = $hours * $rate;
    }
    else {
        $weekly_pay = (40 * $rate) + (($hours - 40) * $rate * 1.5);
    }

    echo "Your weekly pay is: $" . number_format($weekly_pay, 2) . "<br>";
?>