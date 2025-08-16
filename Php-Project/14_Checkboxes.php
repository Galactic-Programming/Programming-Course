<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Checkboxes in PHP</h1>
    <p>Check the items you want to order:</p>
    
    <form action="14_Checkboxes.php" method="post">
        <input type="checkbox" name="pizza" value="Pizza" id="pizza">
        <label for="pizza">Pizza</label><br>

        <input type="checkbox" name="burger" value="Burger" id="burger">
        <label for="burger">Burger</label><br>

        <input type="checkbox" name="pasta" value="Pasta" id="pasta">
        <label for="pasta">Pasta</label><br>

        <input type="checkbox" name="salad" value="Salad" id="salad">
        <label for="salad">Salad</label><br>

        <input type="checkbox" name="dessert" value="Dessert" id="dessert">
        <label for="dessert">Dessert</label><br>

        <input type="submit" name="confirm" value="Confirm Selection">
    </form>
</body>
</html>

<?php

    if (isset($_POST["confirm"])) {

        $selectedFoods = [];

        // Check which checkboxes were selected
        if (isset($_POST["pizza"])) {
            $selectedFoods[] = "Pizza";
        }
        if (isset($_POST["burger"])) {
            $selectedFoods[] = "Burger";
        }
        if (isset($_POST["pasta"])) {
            $selectedFoods[] = "Pasta";
        }
        if (isset($_POST["salad"])) {
            $selectedFoods[] = "Salad";
        }
        if (isset($_POST["dessert"])) {
            $selectedFoods[] = "Dessert";
        }

        if (!empty($selectedFoods)) {
            echo "You have selected: " . implode(", ", $selectedFoods);
        } else {
            echo "No food items selected.";
        }
    }

?>