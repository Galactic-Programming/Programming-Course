<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- <form action="3_Get%26_Post.php" method="post"> method="get"
        <label>Username:</label><br>
        <input type="text" name="username" id="username"><br>
        <label>Password:</label><br>
        <input type="password" name="password" id="password"><br>
        <input type="submit" value="Log in"><br>
    </form> -->

    <form action="3_Get%26_Post.php" method="post">
        <label>Quantity: </label><br>
        <input type="text" name="quantity" id="quantity"><br>
        <input type="submit" value="total"><br>
    </form>
</body>
</html>

<?php 
    /**
     * * Get and Post Methods in PHP
     * These are special variables used to collect data from an HTML form, data is sent to the file in the action attribute of the form tag.
     * ? <form action="3_Get%26_Post.php" method="get">
     */ 

    /**
     * $_GET = Data is appended to the url
     * Not secure for sensitive data
     * Character limit of 2048
     * Bookmark is possible w/ values
     * GET requests can be cached
     * Better for search queries
     */

    /**
     * $_POST = Data is packaged inside the body of the HTTP request
     *          More secure for sensitive data
     *          No character limit
     *          Bookmark is not possible w/ values
     *          POST requests are not cached
     *          Better for form submissions
     */

    // echo $_GET["username"] . "<br>";
    // echo $_GET["password"] . "<br>";

    // echo $_POST["username"] . "<br>";
    // echo $_POST["password"] . "<br>";

    $item = "Pizza";
    $price = 10.99;

    if (isset($_POST["quantity"]) && is_numeric($_POST["quantity"]) && $_POST["quantity"] > 0) {
        $quantity = (int)$_POST["quantity"];
        $total = $price * $quantity;
        $total = number_format($total, 2, ".", ",");
        echo "You have ordered {$quantity} {$item}(s) at a price of {$price}$ each. <br>";
        echo "The total price is: {$total}$ <br>";
    } elseif (isset($_POST["quantity"])) {
        echo "Please enter a valid positive number for quantity.<br>";
    }
?>