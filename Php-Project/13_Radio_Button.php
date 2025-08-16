<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Payment Method Selection</h1>
    <p>Please select your preferred payment method:</p>

    <form action="13_Radio_Button.php" method="post">
        <input type="radio" value="Visa" name="payment" id="visa">
        <label for="visa">Visa</label><br>

        <input type="radio" value="MasterCard" name="payment" id="mastercard">
        <label for="mastercard">MasterCard</label><br>

        <input type="radio" value="PayPal" name="payment" id="paypal">
        <label for="paypal">PayPal</label><br>

        <input type="radio" value="Bitcoin" name="payment" id="bitcoin">
        <label for="bitcoin">Bitcoin</label><br>

        <input type="radio" value="Cash" name="payment" id="cash">
        <label for="cash">Cash</label><br>

        <input type="submit" name="confirm" value="Confirm Payment"><br>
    </form>
</body>

</html>

<?php
    if (isset($_POST["confirm"])) {
        
        // Method 1
        // if (isset($_POST["payment"])) {
        //     $paymentMethod = $_POST["payment"];
        //     echo "You have selected: " . htmlspecialchars($paymentMethod);
        // } else {
        //     echo "No payment method selected.";
        // }

        // Method 2: Uses a switch statement for clearer handling of each payment method.
        // This approach is preferred over Method 1 when you want to provide custom messages or logic for each option.
        if (isset($_POST["payment"])) {

            $paymentMethod = $_POST["payment"];

            switch ($paymentMethod) {
                case "Visa":
                    echo "You have selected Visa.";
                    break;
                case "MasterCard":
                    echo "You have selected MasterCard.";
                    break;
                case "PayPal":
                    echo "You have selected PayPal.";
                    break;
                case "Bitcoin":
                    echo "You have selected Bitcoin.";
                    break;
                case "Cash":
                    echo "You have selected Cash.";
                    break;
                default:
                    echo "Invalid payment selection.";
            }
        }
    }
?>