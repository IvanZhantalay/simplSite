<?php
$route = $_GET['route'];
require 'templates/header.php';

switch ($route){
    case '':
        // require 'templates/header.php';
        require 'templates/main.php';
        // require 'templates/footer.php';
        break;
    case 'cart':
        // require 'templates/header_cart.php';
        require 'templates/cart.php';
        // require 'templates/footer_cart.php';
        break;
}

require 'templates/footer.php';