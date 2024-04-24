let homeView = {
    show: () => {
        console.log("homeshow");
        $('.title').html('Do you like to play Wordle? Lets go');

        $('#content').empty();
        $('#content').html(
            "<form>" +
            "<label>Name</label>" +
            "<input type='text' class='normal'>" +
            "<label>Level</label>" +
            "<select>" +
            "<option>Me</option>" +
            "<option>Einstein</option>" +
            "<option>Genius</option>" +
            "<option>Child</option>" +
            "<option>Baby</option>" +
            "</select>" +
            "</form><h2>" +
            "This game is extremely difficult<br>" +
            "I will give you some advices: <br>" +
            "You will have 5 tries to guess the word<br> " +
            "This word have just 5 letters ( no more no less ) <br>" +
            "When you choose your word, will apear with 3 different colors<br>" +
            "If the letter is red means that doesnt exist in correct word<br>" +
            "If the letter is yellow means that exist but is not in correct position<br>" +
            "If the letter is green means that exist and in correct position </h2>");


        $('#start').html('Começar');
        $("#start").on("click", () => {
            window.location.hash = "game";
        })
        $(document).keyup(event => {
            if (event.key == "Enter") {
                window.location.hash = "game";
            }
        })
    }
}

export default homeView;