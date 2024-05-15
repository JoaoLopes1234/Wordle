var correct;
let strArr;
/**
 * Initializes the game view and starts the game.
 */
let gameView = {
    show: () => {
        correct = chooseWord();
        strArr = correct.split("");
        $('.title').html('Welcome to Wordle');

        $('#content').empty();
        $('#content').html(
            " <div id='centro'>" +
            " <div class='conteudo text0'>" +
            "<input type='text' id='input0' maxlength='5' minlength='5'>" +
            "</div>" +
            "<div class='conteudo text1'>" +
            "<input type='text' id='input1' maxlength='5' minlength='5'>" +
            "</div>" +
            "<div class='conteudo text2'>" +
            "<input type='text' id='input2' maxlength='5' minlength='5'>" +
            "</div>" +
            "<div class='conteudo text3'>" +
            "<input type='text' id='input3' maxlength='5' minlength='5'>" +
            "</div>" +
            "<div class='conteudo text4'>" +
            "<input type='text' id='input4' maxlength='5' minlength='5'>" +
            "</div>" +
            "<div class='conteudo text5'></div>" +
            "<div class='conteudo text6'></div>");

        start();


        $('#start').on('click', () => {
            if (win) {
                window.location.hash = "win";
            }
            else {
                window.location.hash = "lose"
            }
        });
    }
}
let win = false;
let index;
let tentativas = 0;

/**
 * Starts the game by listening for the user's input.
 */
function start() {
    tentativas = 0;
    $(document).keyup(event => {
        for (index = 0; index < 5; index++) {
            if ($("#input" + index).is(":focus") && event.key == "Enter" && $("#input" + index).val().length === 5) {
                analise($("#input" + index).val());
                $('#input' + index).attr("readonly", true);
                $("#input" + (index + 1)).focus();
                break;
            }
        }

    })
}
/**
 * Checks the user's input against the correct word and provides feedback.
 * @param {string} input - The user's input.
 */
function analise(input) {

    var str = '';

    var inputChar = input.split("");
    for (let i = 0; i < strArr.length; i++) {
        if (inputChar[i] === strArr[i]) {
            str += '<span class="green">' + inputChar[i] + '</span>';
        }
        else if (inputChar[i] === strArr[1]) {
            str += '<span class="yellow">' + inputChar[i] + '</span>';
        } else if (inputChar[i] === strArr[2]) {
            str += '<span class="yellow">' + inputChar[i] + '</span>';
        } else if (inputChar[i] === strArr[3]) {
            str += '<span class="yellow">' + inputChar[i] + '</span>';
        } else if (inputChar[i] === strArr[4]) {
            str += '<span class="yellow">' + inputChar[i] + '</span>';
        } else if (inputChar[i] === strArr[0]) {
            str += '<span class="yellow">' + inputChar[i] + '</span>';
        }
        else {
            str += '<span class="red">' + inputChar[i] + '</span>';
        }

    }
    if ($("#input" + index).val() === correct) {
        win = true;
        $("#start").html("Ganhaste")
        $("input").remove();
    }
    tentativas++;
    $(".text" + index).html(str);
    $(".text" + index).css("height", "140px");
    $(".text" + index).css("width", "500px");
    if (tentativas > 4) {
        console.log("cacass");
        win = false
        $("#start").html("Perdeste")
        $(".text" + 5).html("Right word:");
        $(".text" + 5).css("height", "70px");
        $(".text" + 5).css("width", "500px");
        $(".text" + 5).css("font-size", "50px");
        $(".text" + 5).css("text-align", "center");
        $(".text" + 6).html(correct)
        $(".text" + 6).css("height", "140px");
        $(".text" + 6).css("width", "500px");
        $(".text" + 6).css("color", "green");


    }


}

/**
 * Chooses a random word from the array of words.
 * @returns {string} - A randomly chosen word.
 */
function chooseWord() {
    
    var arrstrings = "about alert argue beach above alike arise began abuse alive array begin actor allow aside begun acute alone asset being admit along audio below adopt alter audit bench adult among avoid billy after anger award birth again angle aware black agent angry badly blame agree apart baker blind ahead apple bases block alarm apply basic blood album arena basis board boost buyer china cover booth cable chose craft bound calif civil crash brain carry claim cream brand catch class crime bread cause clean cross break chain clear crowd breed chair click crown brief chart clock curve bring chase close cycle broad cheap coach daily broke check coast dance brown chest could dated build chief count dealt built child court death debut entry forth group delay equal forty grown depth error forum guard doing event found guess doubt every frame guest dozen exact frank guide happy drama extra fresh harry drawn faith front heart dream false fruit heavy dress fault fully hence drill fibre funny night drink field giant horse drive fifth given hotel drove fifty glass house dying fight globe human eager final going ideal early first grace image earth fixed grade index eight flash grand inner elite fleet grant input empty floor grass issue enemy fluid great irony enjoy focus green juice enter force gross joint judge metal media newly known local might noise label logic minor north large loose minus noted laser lower mixed novel later lucky model nurse laugh lunch money occur layer lying month ocean learn magic moral offer lease major motor often least maker mount order leave march mouse other legal music mouth ought level match movie paint light mayor needs paper limit meant never party peace power radio round panel press raise route phase price range royal phone pride rapid rural photo prime ratio scale piece print reach scene pilot prior ready scope pitch prize refer score place proof right sense plain proud rival serve plane prove river seven plant queen quick shall plate sixth stand shape point quiet roman share pound quite rough sharp sheet spare style times shelf speak sugar tired shell speed suite title shift spend super today shirt spent sweet topic shock split table total shoot spoke taken touch short sport taste tough shown staff taxes tower sight stage teach track since stake teeth trade sixty start texas treat sized state thank trend skill steam theft trial sleep steel their tried slide stick theme tries small still there truck smart stock these truly smile stone thick trust smith stood thing truth smoke store think twice solid storm third under solve story those undue sorry strip three union sound stuck threw unity south study throw until space stuff tight upper upset whole waste wound urban whose watch write usage woman water wrong usual train wheel wrote valid world where yield value worry which young video worse while youth virus worst white worth visit would vital voice";
    let words = arrstrings.split(' ')
    return words[Math.floor(Math.random() * words.length)];

}

export default gameView;