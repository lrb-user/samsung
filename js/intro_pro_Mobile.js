$(document).ready(function(){
    let story_index = 1;
    let story_count = $('.story_banner').length;
    let story_auto_interval = "";
    let story_timer = 1000;

    $('.story_indi').click(function(){
        clearInterval(story_auto_interval);
        setTimeout(function(){
            story_auto()
        },story_timer);
        $('.story_banner').eq($(this).index()).animate({
            left:100+"%"
        },0).animate({
            left:0
        },story_timer);

        $('.story_banner').eq((story_index - 1) % story_count).animate({
            left:-100+"%"
        },story_timer)

        story_index = $(this).index()+1;

        $('.story_indi').removeClass('story_indi_active');
        $('.story_indi').eq($(this).index()).addClass('story_indi_active');

    })
    function story_auto(){
        story_auto_interval = setInterval(function(){
            $('.story_banner').eq(story_index % story_count).animate({
                left:100+"%"
            },0).animate({
                left:0
            },story_timer);
    
            $('.story_banner').eq((story_index - 1) % story_count).animate({
                left:-100+"%"
            },story_timer)

            $('.story_indi').removeClass('story_indi_active');
            $('.story_indi').eq(story_index % story_count).addClass('story_indi_active');

            story_index++;
        },story_timer*4);
    }

    story_auto();

    // imagin
    let imagin_index = 1;
    let imagin_count = $('.imagin_img_box a').length;
    console.log(imagin_count)
    let imagin_timer = 1000;
    
    $('.imagin_img_box a').eq(0).css({
        display:"block"
    })

    $('.imagin_indi').click(function(){
        console.log("인디화깅ㄴ")
        $('.imagin_img_box a').eq($(this).index() % imagin_count).css({zIndex: 99}).fadeIn(imagin_timer);
        $('.imagin_img_box a').eq($('.imagin_indi_active').index()).css({zIndex:1}).delay(imagin_timer).fadeOut(0);

        // $('.imagin_img_box a').removeClass('imagin_img_active');
        // $('.imagin_img_box a').eq($(this).index() % imagin_count).addClass('imagin_img_active');

        $('.imagin_indi').removeClass('imagin_indi_active');
        $('.imagin_indi').eq($(this).index() % imagin_count).addClass('imagin_indi_active');

        imagin_index = $(this).index()+1;

        $('.imagin_txt').css({
            transform:"translate(-50%, 100px)",
            opacity:"0"
        })
        $('.imagin_txt').eq($(this).index()).css({
            transform: "translate(-50%, 0px)",
            opacity: "1"
        })
        
    })

    // 최신콘텐츠
    $('.recent_plus').click(function(){
        $('.plus_1').css({
            display:"block"
        })
        $('.recent_plus1').css({
            display:"none"
        })
        $('.recent_plus2').css({
            display:"inline-block"
        })
    })
    $('.recent_plus2').click(function(){
        $('.plus_2').css({
            display:"block"
        })
        $('.recent_plus').css({
            display:"none"
        })
    })

})