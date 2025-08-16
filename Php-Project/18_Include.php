<?php

    /**
     * Include() in PHP
     * These are copies the content of a file (php, html, text, etc.) into another file.
     * And includes it in your current PHP file.
     * Sections of our website become reusable, it changes only need to be made in one place.
     * This is useful for headers, footers, and other repeated sections. 
     */

    include("18_Include3.html");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    This is home page content.
    <br>
    Stuff about your home page can go here.
</body>
</html>

<?php
    include("18_Include4.html");
?>