$(document).ready(function () {
    // Existing code for form validation
    $("#makeCheck, #modelCheck, #yearCheck, #mileageCheck, #colorCheck, #priceCheck").hide();

    $("#orderForm").submit(function (event) {
        event.preventDefault();
        if (validateForm()) {
            alert("Form submitted successfully!");
            window.location.href = "index.html";
        }
    });

    function validateForm() {
        let make = $("#make").val();
        let model = $("#model").val();
        let year = $("#year").val();
        let mileage = $("#mileage").val();
        let color = $("#color").val();
        let price = $("#price").val();

        if (make === "") {
            $("#makeCheck").show().html("Please enter the make of the vehicle");
            return false;
        } else {
            $("#makeCheck").hide();
        }

        if (model === "") {
            $("#modelCheck").show().html("Please enter the model of the vehicle");
            return false;
        } else {
            $("#modelCheck").hide();
        }

        if (year === "" || year < 1900 || year > 2024) {
            $("#yearCheck").show().html("Please enter a valid year between 1900 and 2024");
            return false;
        } else {
            $("#yearCheck").hide();
        }

        if (mileage === "" || mileage < 0) {
            $("#mileageCheck").show().html("Please enter a valid mileage (non-negative value)");
            return false;
        } else {
            $("#mileageCheck").hide();
        }

        if (color === "") {
            $("#colorCheck").show().html("Please enter the color of the vehicle");
            return false;
        } else {
            $("#colorCheck").hide();
        }

        if (price === "" || price < 0) {
            $("#priceCheck").show().html("Please enter a valid price (non-negative value)");
            return false;
        } else {
            $("#priceCheck").hide();
        }

        return true;
    }

    // New code for showing/hiding alerts
    $(".on").click(function () {
        $('.alert').css({
            'transform': 'translateX(0)',
        });
    });

    $(".close").click(function () {
        $('.alert').css({
            'transform': 'translateX(150%)',
        });
    });

    $(".out").click(function () {
        $('.alert').css({
            'transform': 'translateX(150%)',
        });
    });
});

