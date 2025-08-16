<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- <form action="4_Math_Function.php" method="post">
        <label for="#">X:</label>
        <input type="text" name="x" id="x" required>
        <label for="#">Y:</label>
        <input type="text" name="y" id="y" required>
        <label for="#">Z:</label>
        <input type="text" name="z" id="z" required>
        <br>
        <input type="submit" value="total">
    </form> -->

    <form action="4_Math_Function.php" method="post">
        <label for="#">Radius:</label>
        <input type="text" name="radius" id="radius">
        <input type="submit" value="calculate">
    </form>
</body>
</html>

<?php
    // $x = $_POST["x"];
    // $y = $_POST["y"];
    // $z = $_POST["z"];
    // $total = null;

    // $total = abs( $x );
    // echo "The absolute value of {$x} is: {$total} <br>";

    // $total = round ( $x);
    // echo "The rounded value of {$x} is: {$total} <br>";

    // $total = floor($x);
    // echo "The floor value of {$x} is: {$total} <br>";

    // $total = ceil($x);
    // echo "The ceil value of {$x} is: {$total} <br>";

    // $total = sqrt($x);
    // echo "The square root of {$x} is: {$total} <br>";

    // $total = pow($x, $y);
    // echo "The value of {$x} raised to the power of {$y} is: {$total} <br>";

    // $total = max($x, $y, $z);
    // echo "The maximum value among {$x}, {$y}, and {$z} is: {$total} <br>";

    // $total = min($x, $y, $z);
    // echo "The minimum value among {$x}, {$y}, and {$z} is: {$total} <br>";

    // $total = pi();
    // echo "The value of pi is: {$total} <br>";

    // $total = rand($x, $y);
    // echo "A random number between {$x} and {$y} is: {$total} <br>";

    if (isset($_POST["radius"])) {
        $radius = $_POST["radius"];
        if (is_numeric($radius) && $radius > 0) {
            $circumference = 2 * pi() * $radius;
            $circumference = round($circumference,2);

            echo "The circumference of a circle with radius {$radius} is: {$circumference} cm <br>";

            $area = pi() * pow($radius, 2);
            $area = round($area,2);

            echo "The area of a circle with radius {$radius} is: {$area} cm² <br>";

            $volume = 4/3 * pi() * pow($radius, 3);
            $volume = round($volume,2);

            echo "The volume of a sphere with radius {$radius} is: {$volume} cm² <br>";
        } else {
            echo "Please enter a valid positive numeric value for the radius.<br>";
        }
    }
?>