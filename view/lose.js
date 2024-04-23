let loseView = {
    show: () => {
        console.log("homeshow");
        $('.title').html('You lose :(');

        $('#content').empty();
        $('#content').html("<img src='resources/chorar.jpeg'>");
           

        $('#start').html('Play Again?');
        $("#start").on("click", () => {
            window.location.hash = "home";
        })
    }
}

export default loseView;