let winView = {
    show: () => {
        console.log("homeshow");
        $('.title').html('You win :)');

        $('#content').empty();
        $('#content').html("<img src='resources/sorrir.jpg'>");
           

        $('#start').html('Play Again?');
        $("#start").on("click", () => {
            window.location.hash = "home";
        })
    }
}

export default winView;