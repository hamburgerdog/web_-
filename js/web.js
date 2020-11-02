$(document).ready(function () {
    $("#card1").mouseenter(function () { 
        $(this).addClass("card_select");
        $("#card1 .msg_name").css({
            'color':'#94969a',
        });
        $("#card1 .msg_info").css({
            'color':'#3c3c3c',
        });
    });
    $("#card1").mouseleave(function () { 
        $(this).removeClass("card_select");
        $("#card1 .msg_name").css({
            'color':'#b2b4b6',
        });
        $("#card1 .msg_info").css({
            'color':'#94969a',
        });
    });
    $("#card2").mouseenter(function () { 
        $(this).addClass("card_select");
        $("#card2 .msg_name").css({
            'color':'#94969a',
        });
        $("#card2 .msg_info").css({
            'color':'#3c3c3c',
        });
    });
    $("#card2").mouseleave(function () { 
        $(this).removeClass("card_select");
        $("#card2 .msg_name").css({
            'color':'#b2b4b6',
        });
        $("#card2 .msg_info").css({
            'color':'#94969a',
        });
    });
    $("#card3").mouseenter(function () { 
        $(this).addClass("card_select");
        $("#card3 .msg_name").css({
            'color':'#94969a',
        });
        $("#card3 .msg_info").css({
            'color':'#3c3c3c',
        });
    });
    $("#card3").mouseleave(function () { 
        $(this).removeClass("card_select");
        $("#card3 .msg_name").css({
            'color':'#b2b4b6',
        });
        $("#card3 .msg_info").css({
            'color':'#94969a',
        });
    });
});