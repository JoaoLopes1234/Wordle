let gameView = {
    show: () => {
        console.log("gameshow");
        $('.title').html('Wordle but better');

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
            "</div>");
        start();
        
        console.log($(".normal").val());

        $('#start').on('click', () => {
            if(win){
                console.log("wiun");
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
var str1 = "chose";
var strArr = str1.split("");
function start() {
    $(document).keyup(event => {
        for (index = 0; index < 5; index++) {
            if ($("#input" + index).is(":focus") && event.key == "Enter" && $("#input" + index).val().length===5) {
                analise($("#input" + index).val());
                $('#input' + index).attr("readonly", true);
                $("#input" + (index + 1)).focus();
                break;
            }
        }

    })
}

function analise(input) {

    var str = '';
    console.log(index);

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
    if ($("#input" + index).val() === str1) {
        win = true;
        $("#start").html("Ganhaste")
        $("input").remove();
    }
    tentativas++;
    $(".text" + index).html(str);
    $(".text" + index).css("height", "140px");
    $(".text" + index).css("width", "500px");
    if(tentativas>4) {

        $("#start").html("Perdeste")
    }


}

export default gameView;