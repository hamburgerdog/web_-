$(document).ready(function () {
    $(".fm_pic_1 img").click(function (e) { 
        $(this).addClass("animated pulse");    
    });
    $(".fm_pic_1 img").mouseleave(function (e) { 
        $(this).removeClass("animated pulse");    
    });
    $(".fm_pic_2 img").click(function (e) { 
        $(this).addClass("animated pulse");    
    });
    $(".fm_pic_2 img").mouseleave(function (e) { 
        $(this).removeClass("animated pulse");    
    });
    $(".fm_pic_3 img").click(function (e) { 
        $(this).addClass("animated pulse");    
    });
    $(".fm_pic_3 img").mouseleave(function (e) { 
        $(this).removeClass("animated pulse");    
    });
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
       },8000)
       setTimeout(function () {
           $(".wc_end_input").css('display','block');
           $(".wc_end_input").addClass("animated fadeInUp");
       },10000)
   });
   function min_max_img(a,b)
   {
       let temp = a-b;
       let max = 687;
       let min = -638;
       if(temp >= 687)
       {
            return max;
       }
       else if(temp <= -638)
       {
           return min;
       }
       else
       {
           return temp;
       }
   }
   function min_max_txt(a,b)
   {
       let temp = a-b;
       let max = 736;
       let min = -638;
       if(temp >= 736)
       {
            return max;
       }
       else if(temp <= -638)
       {
           return min;
       }
       else
       {
           return temp;
       }
   }
   function min_max_blur(a,b)
   {
       let temp = Math.abs(a- b) / 120;
       let max = 4;
       let min = 0;
       if(temp >= 4)
       {
            return max;
       }
       else if(temp <= 0)
       {
           return min;
       }
       else
       {
           return temp;
       }
   }
    $('#shi_span').mouseenter(e => {// 给最外层的 .banner 添加鼠标移入事件
        let initX = e.pageX// 获得刚移入时鼠标的初始 x 位置   
        $('#shi_span').mousemove(e => {// 给 .banner 添加鼠标移动事件
            $('.shi_txt').css('filter', 'blur(' +(4 - min_max_blur(e.pageX,initX) ) + 'px)')
            $('.shi_txt').css('transform', 'translateX(' + (min_max_txt(initX,e.pageX) / 90) + 'px)')
            $('.shi_img').css('filter', 'blur(' +  min_max_blur(e.pageX,initX)  + 'px)')
            $('.shi_img').css('transform', 'translateX(' + (min_max_img(e.pageX,initX)/ 90) + 'px)')
            $('.paper_img').css('filter', 'blur(' +  min_max_blur(e.pageX,initX)  + 'px)')
        })// 背景不需要进行移动, 只需要更改 blur() 值
        
    })
        $("#shi_span").mouseleave(function () { 
            $('.shi_txt').css({'filter':'blur(4px)'})
            $(".shi_txt").transition({transform:'translateX(0px)'},190,'linear')
            $('.shi_img').css({'filter':'blur(0px)'})
            $(".shi_img").transition({transform:'translateX(0px)'},190,'linear')
            $('.paper_img').css({'filter':'blur(0px)'})
        }); 
    //轮播图
    let fmPics = [];
    let fmClassName = [];

    //dummy push(tired
    fmPics.push(document.getElementsByClassName("fm_pic_1")[0]);
    fmPics.push(document.getElementsByClassName("fm_pic_2")[0]);
    fmPics.push(document.getElementsByClassName("fm_pic_3")[0]);

    //get class name
    for (let e of fmPics) {
        fmClassName.push(e.getAttribute("class"));
    }
    // var img_stop = document.getElementsByClassName('img_stop')[0];
    // transitions = {
    // // 兼容IE
    // 'transition': 'transitionend',
    // // 兼容Opera
    // 'OTransition': 'oTransitionEnd',
    // // 兼容Firefox
    // 'MozTransition': 'transitionend',
    // // 兼容Google
    // 'WebkitTransition': 'webkitTransitionEnd'
    // };
    //设置图片信号数
    let idx = 2;
    let idx_temp = 1;//设置为1说明前一个动作为右，设置为0时说明前一个动作为左
    let switch_time=2000;
    function next() {
        //小圆点跟随图片移动
        if(idx_temp==0){
            switch(idx){
                case 0:
                    idx=2;
                    break;
                case 1:
                    idx=0;
                    break;
                case 2:
                    idx=1;
                    break;
            }
        }
        $(".circles ol li").eq(idx).addClass("cur").siblings().removeClass("cur");
        idx+=1;
        idx_temp=1;
        //图片到最后一张返回第一张
        if (idx > 2) {
            idx = 0;
        }
        //swap the class
        fmClassName.unshift(fmClassName[fmClassName.length - 1]);
        fmClassName.pop();
        //process swaping
        for (i = 0; i < fmClassName.length; i++) {
            fmPics[i].setAttribute("class", fmClassName[i]);
        
        }
    }
    function next_left() {
        if ($("#fm_pic").is(":animated")) {
			return;
		}
        //小圆点跟随图片移动
        if(idx_temp==1){
            switch(idx){
                case 0:
                    idx=1;
                    break;
                case 1:
                    idx=2;
                    break;
                case 2:
                    idx=0;
                    break;
            }
        }
        $(".circles ol li").eq(idx).addClass("cur").siblings().removeClass("cur");
        idx-=1;
        idx_temp=0;
        //图片到最后一张返回第一张
        if (idx < 0) {
            idx = 2; 
        }
        //swap the class
        fmClassName.push(fmClassName[0]);
        fmClassName.shift();
        //process swaping
        for (i = 0; i < fmClassName.length; i++) {
            fmPics[i].setAttribute("class", fmClassName[i]);
        
        }
    }
     //点击小圆点跳转图片
	$(".circles ol li").click(function() {
        //alert(11);
        // let temp;
        temp=idx;
        if(idx_temp==1){
            switch(temp){
                case 0:
                    temp=2;
                    break;
                case 1:
                    temp=0;
                    break;
                case 2:
                    temp=1;
                    break;
            }
        }
        else if(idx_temp==0){
            switch(temp){
                case 0:
                    temp=1;
                    break;
                case 1:
                    temp=2;
                    break;
                case 2:
                    temp=0;
                    break;
            }
        }
        let _idx = $(this).index();
        if (_idx > temp) {
			let count = _idx - temp;
			while (count--){
				//模拟右按钮点击事件，跳转到点击圆点中的图片
				next();
			}
		} else {
			var count = temp - _idx;
			while (count--){
				next_left();
			}
		}
	});
    //鼠标移入时，更换背景图片图片，停止运动
    let intR1=0;//mouseleave()处调用setInterval的返回Id
    let mouseleaveFlag=0;//是否调用mouseenter()标志
    intR1 =setInterval( next, switch_time);
    $(".img_stop").mouseenter(function () {
        if( mouseleaveFlag!=0){
            clearInterval(intR1);
        } 
        clearInterval(intR1);
    });
    $(".img_stop").mouseleave(function () { 
        mouseleaveFlag=1;
        intR1=setInterval(next,switch_time);
    });
    $(".left_btn").mouseleave(function () { 
        $('.left_btn').css({'opacity':'0.5'})
    });
    $(".right_btn").mouseleave(function () { 
        $('.right_btn').css({'opacity':'0.5'})
    });
    $(".left_btn").mouseenter(function () { 
        $('.left_btn').css({'opacity':'2'})
    });
    $(".right_btn").mouseenter(function () { 
        $('.right_btn').css({'opacity':'2'})
    });
    
    let ms= 1000;
    let lastClick = Date.now() - ms;
    let btn_l = document.getElementsByClassName('left_btn')[0];
    btn_l.addEventListener('click', () => {
    if (Date.now() - lastClick >= ms) {
    lastClick = Date.now();
    next_left();}
    });
    let btn_r = document.getElementsByClassName('right_btn')[0];
    btn_r.addEventListener('click', () => {
    if (Date.now() - lastClick >= ms) {
    lastClick = Date.now();
    next();}
    });

    //instantiate Clipboard
    let clipboard = new ClipboardJS('.btn');

    //let texts = document.getElementsByClassName("wall_txt")[0].getElementsByTagName("p");
    let texts = document.getElementsByClassName("wall_txt")[0];
    let str = texts.innerHTML.trim();
    let length = str.length;
    let index = 0;
    setTimeout(function(){
        $(".pic_wall").css({
            "animation-duration":"20s",
            'display':'block'
        });
        $(".pic_wall").addClass("animated fadeIn");
        $(".main_nav_guang").css({
            "animation-duration":"5s",
            'display':'block'
        });
        $(".main_nav_guang").addClass("animated fadeIn");
        $(".main_nav_ab").css({
            "animation-duration":"5s",
            'display':'block'
        });
        $(".main_nav_ab").addClass("animated fadeIn");
    },500)
    let wallTXT;
    function insertTxt(){
        wallTXT=setInterval(function() {
        index++;
        texts.innerHTML = str.substr(0, index);
        if (texts.innerHTML == length) {
          clearInterval();
        }
      }, 180);
    }
    setTimeout(insertTxt(),1500);
    setTimeout(function(){
        $(".wall_txt_bottom").css('display', 'block');
        $(".wall_txt_bottom").addClass("animated fadeInLeft");
        clearInterval(wallTXT);
    },14500)
});