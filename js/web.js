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
    $(".email_page").mouseenter(function () { 
        $(this).css({
            'background-color':'#cde1f5'
        })
        $(".email_msg").css({
            'background-color':'#ecf2f8',
            'border-color':'white'
        });
    });
    $(".email_page").mouseleave(function () { 
        $(this).css({
            'background-color':'white'
        })
        $(".email_msg").css({
            'background-color':'white',
            'border-color':'#e1e2e3'
        });
    });
    $(".email_msg").click(function (e) { 
        $(this).addClass("animated bounceIn");
        $(this).zclip({
            path:'js/ZeroClipboard.swf',
            copy:function(){
                return $(this).siblings('p').siblings('i').text();
            }
        });
        let tip = $(".email_msg_tip");
        tip.css('display','block');
        tip.addClass("animated fadeInDown");
        setTimeout(function(){
            $(".email_msg").removeClass("animated bounceIn");
            tip.removeClass("animated fadeInDown");
            tip.addClass("animated fadeOutUp");
        },2000)
        setTimeout(function(){
            tip.css('display','none');
            tip.removeClass("animated fadeOutUp ");
        },2500)
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
    $(".foot_page").mouseenter(function () { 
        $(".foot_page_txt").css({
            'left':'+=5px',
            'top':'+=5px'
        });
        $(".foot_page_txt").addClass("animated pulse");
    });
    $(".foot_page").mouseleave(function () { 
        $(".foot_page_txt").css({
            'left':'-=5px',
            'top':'-=5px'
        });
        $(".foot_page_txt").removeClass("animated pulse");
    });
});