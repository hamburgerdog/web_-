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
    $("#wc_back").mouseenter(function () { 
        $(this).css('border','white 4px solid');
    });
    $("#wc_back").mouseleave(function () { 
        $(this).css('border','#e1e2e3 3px solid');
    });
    $("#wc_title").mouseenter(function () { 
        $(this).css('border','white 8px solid');
    });
    $("#wc_title").mouseleave(function () { 
        $(this).css('border','#e1e2e3 3px solid');
    });
    $("#wc_other").mouseenter(function () { 
        $(this).css('border','white 6px solid');
    });
    $("#wc_other").mouseleave(function () { 
        $(this).css('border','#e1e2e3 3px solid');
    });
    $("#end_input").mouseenter(function () { 
        $(this).css({
            'box-shadow':'8px 8px 15px #e1e2e3',
            'border':'2px solid #94969a'
        });
    });
    $("#end_input").mouseleave(function () { 
        $(this).css({
            'box-shadow':'0px 0px 0px ',
            'border':'0px'
        });
    });
    $(".wechat #wc_msg").mouseenter(function () { 
        $(this).css({
            'box-shadow':'8px 8px 15px #e1e2e3',
            'border':'2px solid white'
        });
    });
    $(".wechat #wc_msg").mouseleave(function () { 
        $(this).css({
            'box-shadow':'0px 0px 0px ',
            'border':'0px'
        });
    });
    $("#answ_1 #wc_msg").mouseenter(function () { 
        $(this).css({
            'box-shadow':'8px 8px 15px #e1e2e3',
            'border':'2px solid white'
        });
    });
    $("#answ_1 #wc_msg").mouseleave(function () { 
        $(this).css({
            'box-shadow':'0px 0px 0px ',
            'border':'0px'
        });
    });
    $("#answ_2 #wc_msg").mouseenter(function () { 
        $(this).css({
            'box-shadow':'8px 8px 15px #e1e2e3',
            'border':'2px solid white'
        });
    });
    $("#answ_2 #wc_msg").mouseleave(function () { 
        $(this).css({
            'box-shadow':'0px 0px 0px ',
            'border':'0px'
        });
    });
    $("#answ_3 #wc_msg").mouseenter(function () { 
        $(this).css({
            'box-shadow':'8px 8px 15px #e1e2e3',
            'border':'2px solid white'
        });
    });
    $("#answ_3 #wc_msg").mouseleave(function () { 
        $(this).css({
            'box-shadow':'0px 0px 0px ',
            'border':'0px'
        });
    });
    $("#answ_4 #wc_msg").mouseenter(function () { 
        $(this).css({
            'box-shadow':'8px 8px 15px #e1e2e3',
            'border':'2px solid white'
        });
    });
    $("#answ_4 #wc_msg").mouseleave(function () { 
        $(this).css({
            'box-shadow':'0px 0px 0px ',
            'border':'0px'
        });
    });
   $(".wechat").mouseenter(function () { 
       $(".wechat_head").css('display','block');
       $(".wechat_head").addClass('animated fadeInDown');
       setTimeout(function () {
           $(".wechat_qust").css('display','block');
           $(".wechat_qust").addClass("animated fadeInLeft");
       },1000)
       setTimeout(function () {
           $("#answ_1").css('display','block');
           $("#answ_1").addClass("animated fadeInRight");
       },2500)
       setTimeout(function () {
           $("#answ_2").css('display','block');
           $("#answ_2").addClass("animated fadeInRight");
       },4500)
       setTimeout(function () {
           $("#answ_3").css('display','block');
           $("#answ_3").addClass("animated fadeInRight");
       },6000)
       setTimeout(function () {
           $("#answ_4").css('display','block');
           $("#answ_4").addClass("animated fadeInRight");
       },10000)
       setTimeout(function () {
           $(".wc_end_input").css('display','block');
           $(".wc_end_input").addClass("animated fadeInUp");
       },12000)
   });
});