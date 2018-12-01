
$(function () {
    $("#new-burger-input").on("submit", (event) => {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger-name").val().trim()
        };

        // Send the POST request.
        if (newBurger.burger_name) {
            
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    console.log("created new burger called " + newBurger + ".");
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        } else {
            console.log("null input")
        }

    });

    $(".devour-button").on("click", function (event) {

        event.preventDefault();

        var id = $(this).attr("data-id");

        console.log(id);

        var newDevour = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id + "&1", {
            type: "PUT",
            data: newDevour
        }).then(
            function () {
                console.log("Burger " + id + " is devoured");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-button").on("click", function (event) {
        event.preventDefault();

        var id = $(this).attr("data-id");

        console.log(id);

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("Burger " + id + " is deleted.");
                location.reload();
            }
        )
    })
});