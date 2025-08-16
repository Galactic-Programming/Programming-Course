<?php
    // Arithmetic Operations in PHP
    // + - * / ** %

    $a = 10;
    $b = 5;

    // Addition
    $sum = $a + $b;
    echo "The sum of {$a} and {$b} is: {$sum} <br>";

    // Subtraction
    $difference = $a - $b;
    echo "The difference between {$a} and {$b} is: {$difference} <br>";

    // Multiplication
    $product = $a * $b;
    echo "The product of {$a} and {$b} is: {$product} <br>";

    // Division
    $quotient = $a / $b;
    echo "The quotient of {$a} divided by {$b} is: {$quotient} <br>";

    // Modulus
    $remainder = $a % $b;
    echo "The remainder of {$a} divided by {$b} is: {$remainder} <br>";

    // Increment and Decrement Operators
    // These operators are used to increase or decrease the value of a variable by 1.
    $counter = 0;

    $counter = $counter + 1; // Increment
    // $counter += 1; Another way to increment
    // $counter++; Yet another way to increment
    echo "Counter after increment: {$counter} <br>";

    $counter = $counter - 1; // Decrement
    // $counter -= 1; Another way to decrement
    // $counter--; Yet another way to decrement
    echo "Counter after decrement: {$counter} <br>";

    // Operator Precedence
    // PHP follows a specific order of operations when evaluating expressions.
    // 1. ()
    // 2. ** (exponentiation)
    // 3. * / % (multiplication, division, modulus)
    // 4. + - (addition, subtraction)

    $total = 1 + 2 - 3 * 4 / 5 ** 6;
    echo "The result of the complex expression is: {$total} <br>";
?>