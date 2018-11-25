
$(function () {
    $("#new-burger-input").on("submit", (event) => {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger-name").val().trim()
        };

        // Send the POST request.
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
    });
});