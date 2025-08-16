<?php
    /** Switches in PHP
     * Switches are used to perform different actions based on different conditions.
     * Replacement to using many if-else statements. It's more efficient and cleaner.
     */

    $grade = "A";

    switch ($grade) {
        case "A":
            echo "Excellent! You scored an A.<br>";
            break;
        case "B":
            echo "Good job! You scored a B.<br>";
            break;
        case "C":
            echo "You passed with a C.<br>";
            break;
        case "D":
            echo "You passed with a D.<br>";
            break;
        case "F":
            echo "You failed.<br>";
            break;
        default:
            echo "Invalid grade provided.<br>";
            break;
    }

    $date = date("l");
    echo "Today is " . $date . ".<br>";

    switch ($date) {
        case "Monday":
            echo "I hate Mondays.<br>";
            break;
        case "Tuesday":
            echo "It is Toca Tuesday.<br>";
            break;
        case "Wednesday":
            echo "The working week is half over.<br>";
            break;
        case "Thursday":
            echo "It's almost the weekend.<br>";
            break;
        case "Friday":
            echo "The weekend is here.<br>";
            break;
        case "Saturday":
            echo "Time to party.<br>";
            break;
        case "Sunday":
            echo "Time to relax.<br>";
            break;
        default:
            echo "Invalid date.<br>";
            break;
    }
?>