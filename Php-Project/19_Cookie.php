<?php
    /** Cookie
     * Information about a user stored in a user's web-browser that targeted advertisements, browsing preferences, and other non-essential data.
     * Cookies are used to remember information about the user, such as login status, preferences, and other settings.
     */

    setcookie("username","", time() + 3600,"/");
    setcookie("password","", time() + 3600,"/");

    setcookie("fav_food","pizza", time() + (86400 * 2),"/");
    setcookie("fav_drink","cola", time() + (86400 * 3),"/");
    setcookie("fav_dessert","ice-cream", time() + (86400 * 4),"/");

    foreach ($_COOKIE as $key => $value) {
        echo "$key: $value<br>";
    }

    // To delete a cookie, set its expiration time to a past time
    if (isset($_COOKIE['username'])) {
        setcookie("username", "", time() - 3600, "/");
        echo "Cookie 'username' deleted.<br>";
    }
    if (isset($_COOKIE['password'])) {
        setcookie("password", "", time() - 3600, "/");
        echo "Cookie 'password' deleted.<br>";
    }
    if (isset($_COOKIE['fav_food'])) {
        setcookie("fav_food", "", time() - 3600, "/");
        echo "Cookie 'fav_food' deleted.<br>";
    }
    if (isset($_COOKIE['fav_drink'])) {
        setcookie("fav_drink", "", time() - 3600, "/");
        echo "Cookie 'fav_drink' deleted.<br>";
    }
    if (isset($_COOKIE['fav_dessert'])) {
        setcookie("fav_dessert", "", time() - 3600, "/");
        echo "Cookie 'fav_dessert' deleted.<br>";
    }
?>