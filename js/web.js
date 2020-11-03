$(document).ready(function () {
    $("#card1").mouseenter(function () { 
        $(this).addClass("card_select");
        $(this).css({
            'width':'260px',
            'height':'360px',
            'top':'-=5px',
            'left':'+=5px',
            'margin-left':'-=10px'
        })
        $("#card1 .msg_name").css({
            'color':'#94969a',
        });
        $("#card1 .msg_info").css({
            'color':'#3c3c3c',
        });
        $("#card1 .msg_pic").css({
            'left':'+=5px',
            'top':'+=5px'
        });
        $("#card1 .msg_txt").css({
            'left':'+=5px',
            'top':'+=5px'
        });
    });
    $("#card1").mouseleave(function () { 
        $(this).removeClass("card_select");
        $(this).css({
            'width':'250px',
            'height':'350px',
            'top':'+=5px',
            'left':'-=5px',
            'margin-left':'+=10px'
        })
        $("#card1 .msg_name").css({
            'color':'#b2b4b6',
        });
        $("#card1 .msg_info").css({
            'color':'#94969a',
        });
        $("#card1 .msg_pic").css({
            'left':'-=5px',
            'top':'-=5px'
        });
        $("#card1 .msg_txt").css({
            'left':'-=5px',
            'top':'-=5px'
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
        $(this).css({
            'width':'260px',
            'height':'360px',
            'top':'-=5px',
            'left':'+=5px',
            'margin-left':'-=10px'
        });
        $("#card2 .msg_pic").css({
            'left':'+=5px',
            'top':'+=5px'
        });
        $("#card2 .msg_txt").css({
            'left':'+=5px',
            'top':'+=5px'
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
        $(this).css({
            'width':'250px',
            'height':'350px',
            'top':'+=5px',
            'left':'-=5px',
            'margin-left':'+=10px'
        });
        $("#card2 .msg_pic").css({
            'left':'-=5px',
            'top':'-=5px'
        });
        $("#card2 .msg_txt").css({
            'left':'-=5px',
            'top':'-=5px'
        });
    });
    $("#card3").mouseenter(function () { 
        $(this).addClass("card_select");
        $(this).css({
            'width':'260px',
            'height':'360px',
            'top':'-=5px',
            'left':'+=5px',
            'margin-left':'-=10px'
        })
        $("#card3 .msg_name").css({
            'color':'#94969a',
        });
        $("#card3 .msg_info").css({
            'color':'#3c3c3c',
        });
        $("#card3 .msg_pic").css({
            'left':'+=5px',
            'top':'+=5px'
        });
        $("#card3 .msg_txt").css({
            'left':'+=5px',
            'top':'+=5px'
        });
    });
    $("#card3").mouseleave(function () { 
        $(this).removeClass("card_select");
        $(this).css({
            'width':'250px',
            'height':'350px',
            'top':'+=5px',
            'left':'-=5px',
            'margin-left':'+=10px'
        })
        $("#card3 .msg_name").css({
            'color':'#b2b4b6',
        });
        $("#card3 .msg_info").css({
            'color':'#94969a',
        });
        $("#card3 .msg_pic").css({
            'left':'-=5px',
            'top':'-=5px'
        });
        $("#card3 .msg_txt").css({
            'left':'-=5px',
            'top':'-=5px'
        });
    });
    $("#card1 .msg_pic img").mouseenter(function (e) { 
        $(this).addClass("animated rubberBand");
    });
    $("#card1 .msg_pic img").mouseleave(function (e) { 
        $(this).removeClass("animated rubberBand");
    });
    $("#card2 .msg_pic img").mouseenter(function (e) { 
        $(this).addClass("animated rubberBand");
    });
    $("#card2 .msg_pic img").mouseleave(function (e) { 
        $(this).removeClass("animated rubberBand");
    });
    $("#card3 .msg_pic img").mouseenter(function (e) { 
        $(this).addClass("animated rubberBand");
    });
    $("#card3 .msg_pic img").mouseleave(function (e) { 
        $(this).removeClass("animated rubberBand");
    });
});