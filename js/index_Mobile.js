$(document).ready(function(){
    // 메인배너
    let mb_index = 1;
    let mb_count = $('.main_banner').length;
    let mb_timer= 1000;
    let main_interval = "";

    $('.main_indi').click(function(){
        main_indi_init();
        console.log($(this).index())
        clearInterval(main_interval);
        // if($(this).index() == 0){
        //     $('.main_indi_active').css({
        //         backgroundColor:"white"
        //     })
        //     $('.main_indi').css({
        //         border:"1px solid white"
        //     })
        // }
        // else{
        //     $('.main_indi_active').css({
        //         backgroundColor:"black"
        //     })
        //     $('.main_indi').css({
        //         border:"1px solid black"
        //     })
        // }
        
        // 들어오는방
        $('.main_img_box').eq($(this).index()).children('.main_banner').animate({
            left:100+"%"
        },0).animate({
            left:0
        },mb_timer);
        
        // 나가는 방
        $('.main_img_box').eq($('.main_indi_active').index()).children('.main_banner').animate({
            left:-100+"%"
        },mb_timer);

        $('.main_indi').removeClass('main_indi_active');
        $('.main_indi').eq($(this).index()).addClass('main_indi_active');

        mb_index = $(this).index()+1;

        main_auto();
    })

    function main_auto(){
        main_interval = setInterval(function(){
            $('.main_img_box').eq(mb_index % mb_count).children('.main_banner').animate({
                left:100+"%"
            },0).animate({
                left:0
            },mb_timer)
    
            $('.main_img_box').eq((mb_index - 1) % mb_count).children('.main_banner').animate({
                left:-100+"%"
            },mb_timer)
    
            $('.main_indi').removeClass('main_indi_active');
            $('.main_indi').eq(mb_index % mb_count).addClass('main_indi_active');

            mb_index++;
        },mb_timer*2);
    }
    main_auto();
    function main_indi_init(){
        $('.main_indi').css({
            pointerEvents:"none"
        })
        setTimeout(function(){
            $('.main_indi').css({
                pointerEvents:"auto"
            })
        },mb_timer);
    }

    // $('.main_indi').mouseenter(function(){
    //     clearInterval(main_interval);
    // })
    // $('.main_indi').mouseleave(function(){
    //     main_auto();
    // })

    // 베스트
    let best_timer = 1000;
    let best_index = 1;
    $('.best_btn').click(function(){
        $('.best_main_img_box').eq($(this).index()).animate({
            left:100+"%"
        },0).animate({
            left:0
        },best_timer);
        $('.best_main_img_box').eq($('.best_btn_active').index()).animate({
            left:-100+"%"
        },best_timer)

        $('.best_btn').removeClass('best_btn_active');
        $('.best_btn').eq($(this).index()).addClass('best_btn_active');

        best_index = $(this).index()+1;
    })

    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        let story_o_top = $('.story_content_box').offset().top;

        if(s_top >= story_o_top - 400){
            $('.story_content_box').css({
                transform:"translateY(0)",
                opacity:1
            })
        }

    })
    // 스토리
    let story_index = 1;
    let story_timer = 2000;
    let story_count = $('.story_img_box img').length;
    console.log(story_count);
    $('.story_indi').click(function(){
        console.log("확인")
        $('.story_img_box').children('img').eq($(this).index()).css({zIndex: 9999}).fadeIn(story_timer)
        $('.story_img_box').children('img').eq($('.story_indi_active').index()).css({zIndex:1}).delay(story_timer).fadeOut(0)
        story_index = $(this).index()+1;

        // $('.story_img_box img').removeClass('img_active');
        // $('.story_img_box img').eq($(this).index()).addClass('img_active');

        $('.story_title').removeClass('story_title_active');
        $('.story_title').eq($(this).index()).addClass('story_title_active')

        $('.story_indi').removeClass('story_indi_active');
        $('.story_indi').eq($(this).index()).addClass('story_indi_active');
    })

    // 이달의 혜택
    let event_index = 1;
    let event_count = $('.event_item_box').length;
    let event_timer = 1000;
    let event_interval="";
    
    function event_auto(){
        event_interval = setInterval(function(){
            $('.event_items_box a').eq(event_index % event_count).animate({
                left:100+"%"
            },0).animate({
                left:0+"%"
            },event_timer);
        
            $('.event_items_box a').eq((event_index -1) % event_count).animate({
                left:-100+"%"
            },event_timer);
    
            event_index++;
        },event_timer * 3);
    }

    event_auto();
})
