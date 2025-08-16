<?php
    /** Hashing
     * Transforming sensitive data (passwords, etc.) into letters, numbers, and/or symbols via a mathematical function.
     * This is a one-way process, meaning you cannot retrieve the original data from the hash.
     * Hide the original data from 3rd parties.
     */

    $password = "JohnyBoy";

    // Hashing the password using the password_hash function
    $hashedPassword = password_hash("JohnyBoy", PASSWORD_DEFAULT);

    echo "Hashed Password: " . $hashedPassword . "<br>";

    if (password_verify($password, $hashedPassword)) {
        echo "Password is valid.";
    } else {
        echo "Invalid password.";
    }
?>