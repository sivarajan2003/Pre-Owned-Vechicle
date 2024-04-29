<body>
<div class="container">
<?php
echo "<center><h1>Thank You for choosing our Store</h1>";
$vehicle_type = $_POST['vehicle_type'];
echo "<h3>Your Ordered Vehicle Type is: <h1>".$vehicle_type."</h1></h3>";

if ($vehicle_type == "Car" || $vehicle_type == "Bike" || $vehicle_type == "Truck") {
    $quan = $_POST['quantity'];
    echo "<h3>And the Quantity is: <h1>".$quan."</h1></h3><br>";
}

$num = $_POST['number'];
echo "<h3>Your Contact Number is: <h1>".$num."</h1></h3>";

$add = $_POST['address'];
echo "<h3>Your Contact Address is: <h1>".$add."</h1></h3>";
?>
<button><a href="Home.html">Return</a></button>
</div>
</body>
