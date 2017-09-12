$().ready(function () {

    var rand;
    var gem1;
    var gem2;
    var gem3;
    var gem4;
    var loses = 0;
    var wins = 0;
    var gameActive = true;

    function randGen() {

        random = Math.floor((Math.random() * 79) + 20);
        gem1 = Math.floor((Math.random() * 20) + 1);
        gem2 = Math.floor((Math.random() * 20) + 1);
        gem3 = Math.floor((Math.random() * 20) + 1);
        gem4 = Math.floor((Math.random() * 20) + 1);
        $("#score").text("0");
        $('#startNum').text(random);
        $('#message').text("");
        gameActive = true;

    } //ends randGen

    function gameActiveToggle(valIn) {
        if (gameActive){
            $("#score").text(valIn);
            verify();
        }
    } //ends gameActiveToggle

    $('#gem1').on('click', function () {
        var oldVal = $("#score").text();
        var newVal = gem1 + parseInt(oldVal);
        gameActiveToggle(newVal);
       
    });

    $('#gem2').on('click', function () {
        var oldVal = $("#score").text();
        var newVal = gem2 + parseInt(oldVal);
        gameActiveToggle(newVal);        
    });

    $('#gem3').on('click', function () {
        var oldVal = $("#score").text();
        var newVal = gem3 + parseInt(oldVal);
        gameActiveToggle(newVal);        
    });

    $('#gem4').on('click', function () {
        var oldVal = $("#score").text();
        var newVal = gem3 + parseInt(oldVal);
        gameActiveToggle(newVal);        
    });

    $('#forButton').on('click', '.btn', function () {
        randGen();
        $("#forButton").empty();
    });


    function verify() {
        var curVal = $("#score").text();
        var curValInt = parseInt(curVal);

        if (curValInt > random) {
            loses++;
            $("#lose").text(loses);
            $('#message').css("color", "red");
            $('#message').text("YOU LOSE!!!");
            gameActive = false;
            newButton();
        }
        if (curValInt === random) {
            wins++;
            $("#win").text(wins);
            $('#message').css("color", "blue");
            $('#message').text("YOU Win!!!");
            gameActive = false;
            newButton();
        }

    } //ends verify

    function newButton() {
        $("#forButton").html('<button type="button" class="btn btn-primary">PlayAgain?</button>');
    } //endxs newButton


    randGen();



}); //ends ready