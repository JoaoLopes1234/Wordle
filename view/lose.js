/**
 * @classdesc A view that shows the user has lost the game.
 */
let loseView = {
    /**
     * Displays the lose view.
     */
    show: function() {
        /**
         * Logs "homeshow" to the console.
         */
        console.log("homeshow");

        /**
         * Changes the title text to "You lose :(".
         */
        $('.title').html('You lose :(');

        /**
         * Empties the content div.
         */
        $('#content').empty();

        /**
         * Sets the content div's HTML to an image of a sad face.
         */
        $('#content').html("<img src='resources/chorar.jpeg'>");

        /**
         * Changes the start button's text to "Play Again?".
         */
        $('#start').html('Play Again?');

        /**
         * Adds a click event listener to the start button.
         * When clicked, it changes the window's hash to "home".
         */
        $("#start").on("click", () => {
            window.location.hash = "home";
        });
    }
};

export default loseView;