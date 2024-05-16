/**
 * Home view object.
 * @class
 */
let homeView = {
    /**
     * Displays the home view.
     * @memberof homeView
     */
    show: function() {
        /**
         * Selects the title element and sets its HTML content.
         * @memberof homeView.show
         * @param {string} title - The content to be displayed in the title.
         */
        $('.title').html('Do you like to play Wordle? Lets go');

        /**
         * Clears the content element.
         * @memberof homeView.show
         */
        $('#content').empty();

        /**
         * Appends the HTML content to the content element.
         * @memberof homeView.show
         * @param {string} html - The HTML content to be appended.
         */
        $('#content').html(
            "<form id='form'>" +
            "<label>Name</label>" +
            "<input type='text' class='normal' name='name'>" +
            /* "<label>Language</label>" + */
            /* "<select id='language' name='language'>" +
            "<option>english</option>" +
            "<option>portugues</option>" +
            "</select>" + */
            "</form><h2>" +
            "This game is extremely difficult<br>" +
            "I will give you some advices: <br>" +
            "You will have 5 tries to guess the word<br> " +
            "This word have just 5 letters ( no more no less ) <br>" +
            "When you choose your word, will apear with 3 different colors<br>" +
            "If the letter is red means that doesnt exist in correct word<br>" +
            "If the letter is yellow means that exist but is not in correct position<br>" +
            "If the letter is green means that exist and in correct position </h2>");

        /**
         * Defines a function to be called when the form is submitted.
         * @memberof homeView.show
         */
        function send() {
            $("#form").submit();
        }

        /**
         * Sets the HTML content of the start button.
         * @memberof homeView.show
         * @param {string} text - The content to be displayed on the start button.
         */
        $('#start').html('Start Game');

        /**
         * Adds a click event listener to the start button.
         * @memberof homeView.show
         */
        $("#start").on("click", () => {
            window.location.hash = "game";
        });

        /**
         * Adds an event listener to the document for the 'keyup' event.
         * @memberof homeView.show
         */
        $(document).keyup(event => {
            if (event.key == "Enter") {
                window.location.hash = "game";
            }
        });
    }
};

export default homeView;