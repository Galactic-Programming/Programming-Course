<?php
    $username = "Johny Silverhand";

    // $username = strtolower($username); // Convert the username to lowercase
    // echo $username . "<br>";

    // $username = strtoupper($username); // Convert the username to uppercase
    // echo $username . "<br>";

    // $username = trim($username); // Remove whitespace from the beginning and end
    // echo $username . "<br>";

    $phone_numbers = "123-456-7890";

    // $phone_numbers = str_pad($phone_numbers, 15, "0", STR_PAD_LEFT); // Pad the phone number with zeros on the left
    // echo $phone_numbers . "<br>";

    // $phone_numbers = str_pad($phone_numbers, 15, "0", STR_PAD_RIGHT); // Pad the phone number with zeros on the right
    // echo $phone_numbers . "<br>";

    // $phone_numbers = str_replace("-", "", $phone_numbers); // Remove dashes from the phone number
    // echo $phone_numbers . "<br>";

    // $phone_numbers = strrev($phone_numbers); // Reverse the phone number
    // echo $phone_numbers . "<br>";

    // $phone_numbers = str_shuffle($phone_numbers); // Shuffle the phone number
    // echo $phone_numbers . "<br>";

    // $equals = strcmp($username, $phone_numbers); // Compare the username and phone number
    // echo $equals . "<br>";

    // $count = strlen($username); // Get the length of the username
    // echo $count . "<br>";

    // $index = strpos($phone_numbers, "-"); // Find the position of the first dash in the phone number
    // echo $index . "<br>";

    $first_name = substr($username, 0, 5); // Get the first 5 characters of the username
    echo $first_name . "<br>";

    $last_name = substr($username, 6); // Get the last part of the username
    echo $last_name . "<br>";

    $full_name = explode(" ", $username); // Split the username into an array by spaces

    foreach ($full_name as $name) {
        echo $name . "<br>"; // Print each part of the full name
    }

    $username = array("Johny", "The", "Silverhand"); // Create an array with the first and last name
    $username = implode("-", $username); // Join the array back into a string
    echo $username . "<br>";

?>