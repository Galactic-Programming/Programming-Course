<?php
    /** Functions in PHP
     * Functions are reusable blocks of code that perform a specific task.
     * They help to organize code, reduce redundancy, and improve readability.
     * Functions can take parameters and return values.
     */

    function greet($name) {
        return "Hello, " . $name . "!";
    }

    echo greet("Johny Silverhand") . "<br>";

    function countDown($start) {
        while ($start > 0) {
            echo $start . "<br>";
            $start--;
        }
    }

    countDown(10);

    function hypotenuse($a, $b) {
        return sqrt($a * $a + $b * $b);
    }

    echo hypotenuse(3, 4);
?>