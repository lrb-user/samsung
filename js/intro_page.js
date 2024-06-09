$(document).ready(function(){
    // story_mb
    let story_index = 1;
    let story_mb_count = $('.story_mb').length;
    let story_mb_timer = 1500;
    let story_interval = "";

    $('.story_mb').eq(0).css({display:"block"})

    $('.indi').click(function(){
        story_init();
        // 나오는 판
        $('.story_mb').eq($(this).index()).css({zIndex:99}).fadeIn(story_mb_timer);

        // 사라지는 판
        $('.story_mb').eq($('.indi_active').index()).css({zIndex:1}).delay(story_mb_timer).fadeOut(0);

        $('.indi').removeClass('indi_active');
        $('.indi').eq($(this).index()).addClass('indi_active')

        // $('.story_mb').eq($(this).index()).children($('.story_txt_box')).css({
        //     display:"block"
        // })

        story_index = $(this).index()+1;
    })

    function story_auto(){
        story_interval = setInterval(function(){
            $('.story_mb').eq(story_index % story_mb_count).css({zIndex:99}).fadeIn(story_mb_timer);

            // 사라지는 판
            $('.story_mb').eq($('.indi_active').index()).css({zIndex:1}).delay(story_mb_timer).fadeOut(0);

            $('.indi').removeClass('indi_active');
            $('.indi').eq(story_index % story_mb_count).addClass('indi_active')
            // console.log(story_index);

            story_index++;
        },story_mb_timer * 2);
    }
    story_auto();

    function story_init(){
        $('.indi').css({
            pointerEvents:"none"
        })
        setTimeout(function(){
            $('.indi').css({
                pointerEvents:"auto"
            })
        },story_mb_timer);
    }

    $('.indi').mouseenter(function(){
        clearInterval(story_interval);
    })
    $('.indi').mouseleave(function(){
        story_auto();
    })

    // imagin & helath
    // let imagin_s_top = $('.imagination_box').offset().top / 2;
    // let health_s_top = $('.imagination_box').offset().top + ($('.imagination_box').height() / 2);
    // let recent_s_top = $('.health_box').offset().top + ($('.health_box').height() / 2);
    
    // setTimeout(function(){
    //     imagin_s_top = $('.imagination_box').offset().top / 2;
    //     health_s_top = $('.imagination_box').offset().top + ($('.imagination_box').height() / 2);
    //     recent_s_top = $('.health_box').offset().top + ($('.health_box').height() / 2);

    //     아니면 offset().top을 scroll이벤트 안에서 구하면 제대로 구해짐.
    // },600)

    let imagin_txt_1_chk = true;
    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        let imagin_s_top = $('.imagination_box').offset().top / 2;
        let health_s_top = $('.imagination_box').offset().top + ($('.imagination_box').height() / 2);
        // health_s_top = imagin_s_top + ($('.imagination_box').height() / 2);
        let recent_s_top = $('.health_box').offset().top + ($('.health_box').height() / 2);
        console.log(s_top)
        
        if(imagin_txt_1_chk && s_top >= imagin_s_top){
            imagin_txt_1_chk=false;
            $('.imagin_title').css({
                opacity:1,
                transform:"translateY(0)"
            })
            $('.imagin_txt_1').css({
                opacity:1,
                transform:"translateY(0)"
            })
            $('.imagin_R').css({
                opacity:1,
                transform:"translateY(0)"
            })
        }
        
        if(s_top >= health_s_top){
            $('.health_title').css({
                opacity:1,
                transform:"translateY(0)"
            })
        }
        
        if(s_top >= health_s_top + 250){
            $('.health_title_1').css({
                opacity:1,
                transform: "translateY(0px)"
            })
            setTimeout(function(){
                $('.health_txt_box h1').css({
                    opacity:1,

                    transform: "translateY(0px)"
                }) 
            },200)
            setTimeout(function(){
                $('.health_title_2').css({
                    opacity:1,

                     transform:" translateY(0px)"
                }) 
            },400)
        }

        if(s_top >= recent_s_top){
            $('.recent_title').css({
                opacity:1,
                transform:"translateY(0px)"
            })
        }
    })

    $('.imagin_indi, .imagin_R_img').click(function(){
        console.log("확인인: " + $(this).index())
        $('.imagin_indi').removeClass('imagin_indi_active');
        $('.imagin_indi').eq($(this).index()).addClass('imagin_indi_active');
    
    
        $('.imagin_txt').css({
            opacity:0,
            transform: "translateY(100px)",
            transition:"all 0.1s"
        })

        $('.imagin_txt').eq($(this).index()).css({
            opacity:1,
            transform: "translateY(0px)",
            transition:"all 0.5s"
        })


        $('.imagin_R_img').css({
            width:"calc((100% - 10px) / 4)"
        })
        $('.imagin_R_img').eq($(this).index()).css({
            width:"calc((100% - 10px)/ 4 *2)"
        })
    })

    // 최근 콘텐츠
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