/**
 * @classdesc A view for displaying the game win screen.
 */
let winView = {
    /**
     * Displays the game win screen.
     */
    show: function() {
        /**
         * Logs "homeshow" to the console.
         */
        console.log("homeshow");

        /**
         * Changes the title text to "You win :)"
         */
        $('.title').html('You win :)');

        /**
         * Empties the content div.
         */
        $('#content').empty();

        /**
         * Adds an image to the content div with the source "resources/sorrir.jpg".
         */
        $('#content').html("<img src='resources/sorrir.jpg'>");

        /**
         * Changes the start button text to "Play Again?".
         */
        $('#start').html('Play Again?');

        /**
         * Adds a click event listener to the start button. When clicked, it changes the window's hash to "home".
         */
        $("#start").on("click", () => {
            window.location.hash = "home";
        });
    }
};

export default winView;