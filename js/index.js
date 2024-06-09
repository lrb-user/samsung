$(document).ready(function(){
    //모바일웹 
    var a = ["android", "ipad", "iphone"]; 
    for(var i = 0; i < 3; i++) {
        if(navigator.userAgent.toLowerCase().match(a[i])) {
            location.replace("index_Mobile.html");
        }
    }
    
    // let u_agent = window.navigator.userAgent.toLowerCase();

    // document.write(u_agent +"<br>");

    // let phone_list = ['android', 'ipad', 'iphone'];

    // for(let i = 0; i<phone_list.length; i++) {
    //     // 문자열(string형).match() : () 안에 있는 정보가 문자열 안에 있는지 체크
    //     if(u_agent.match(phone_list[i])) {
    //         location.replace('index_Mobile.html')
    //     }
    //     // phone_list 안에 있는 정보('android', 'ipad', 'iphone')가 문자열(u_agent.)안에 있는지 체크
    //     // 안에 있으면 모바일홈페이지('http://m.naver.com')로 이동시켜주는 코드
    // } 

    ////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////
    // function isMobile(){

    //     var UserAgent = navigator.userAgent;
    //     if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null)
    //         {return true;}
    //     else{
    //         return false;
    //     }
    
    // }
    
    // if(isMobile()){
    //     location.href = "index_Mobile.html";	//모바일페이지
    // }
    // else{
    //     location.href = "index.html";		//PC용 페이지
    // }
    
    // function isMobile() {
    //     return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    // }
    // if (isMobile()) {
    //     location.href = "index_Mobile.html"
    // } else {
    //     location.href = "index.html";
    // }
    ///////////////////////////////////////////////
    ///////////////////////////////////////////////

    // function isMobile(){

    //     var UserAgent = navigator.userAgent;
        
    //     if (UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null)
        
    //     {
        
    //     return true;
        
    //     }else{
        
    //     return false;
        
    //     }
        
    //     }
        
    //     if(isMobile()){
        
    //     location.href = "index_Mobile.html"; //모바일페이지
        
    //     }else{
        
    //     location.href = "index.html"; //PC용 페이지
        
    //     }

    ///////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    // 메인배너 슬라이드
    let mb_index = 1;
    let mb_count = $('.main_banner').length;
    let mb_timer = 1000;
    let mb_interval = "";
    
    for(let i = 0; i < mb_count; i++){
        let mb_indi_list = 
        `<div class="indi">
        <p>${main_bn_indi_title[i]}</p>
        <div class="gauge_box">
            <div class="gauge"></div>
        </div></div>`

        $('.indi_box').append(mb_indi_list);
    }
    // $('.indi_box').append(
    //     `<div class="stop_btn"></div>
    //         <div class="start_btn"></div>`)
    
    $('.gauge').eq((mb_index -1) % mb_count).animate({
        left:-100+"%"
    },0).animate({
        left:0
    },mb_timer*3,"linear")

    function mb_color(index){
        if(index){
            $('.indi_box').css({
                color:"white"
            })

            $('.gauge').css({
                backgroundColor: "white"
            })
        }
        else{
            $('.indi_box').css({
                color:"black"
            })

            $('.gauge').css({
                backgroundColor: "black"
            })
        }
    }

    $('.indi').click(function(){
        mb_indi_init();
        clearInterval(mb_auto_slide)
        $('.gauge').stop();
        
        mb_color($(this).index() != 1 && $(this).index() != 3 && $(this).index() != 4);
        console.log($(this).index());
        
        $('.gauge').animate({
            left:-100+"%"
        },0)
        
        // 들어오는 방
        $('.main_bn').eq($(this).index()).animate({
            left:100+"%"
        },0).animate({
            left:0
        },mb_timer ,"linear");
        
        $('.gauge').eq($(this).index()).animate({
            left:-100+"%"
        },0).animate({
            left:0
        },mb_timer*3,"linear")


        // indi_active가 없어서 따로 indi 방번호 어떻게 잡아야될지 모르겠음..
        // 나가는 방
        $('.main_bn').eq((mb_index - 1) % mb_count).animate({
            left:-100+"%"
        },mb_timer, 'linear');
        
        mb_index = $(this).index() +1;
    })

    function mb_auto_slide(){
        mb_indi_init();
        mb_interval = setInterval(function(){

            mb_color(mb_index % mb_count != 1 && mb_index % mb_count != 3 && mb_index % mb_count != 4)
            
            $('.gauge').animate({
                left:-100+"%"
            },0)

            
            // 들어오는판
            $('.main_bn').eq(mb_index % mb_count).animate({
                left:100+"%"
            },0).animate({
                left:0
            },mb_timer)

            $('.main_bn').eq((mb_index -1 ) % mb_count).animate({
                left:-100+"%"
            },mb_timer);

            $('.gauge').eq(mb_index % mb_count).animate({
                left:-100+"%"
            },0).animate({
                left:0
            },mb_timer*3,"linear")

            mb_index++;
        
        },mb_timer*3);

    }
    mb_auto_slide();

    function mb_indi_init(){
        $('.indi').css({
            pointerEvents:"none"
        })
        setTimeout(function(){
            $('.indi').css({
                pointerEvents:"auto"
            })
        },mb_timer);
    }

    $('.main_box').mouseenter(function(){
        clearInterval(mb_interval);
        $('.gauge').stop(true);
    })
    $('.main_box').mouseleave(function(){
        mb_auto_slide();
        $('.gauge').eq((mb_index-1) % mb_count).animate({
            left:0
        },mb_timer,"linear")
    })

    //////////////////////////////////////////////////////////////
    // best_cate
    let best_index = 1;
    let best_count = $('.best_item').length;
    let best_timer = 1000;

    $('.best_item_btn').click(function(){
        best_btn_init();
                
        // 들어오는 방
        $('.best_item_content').eq($(this).index()).css({
            left:120+"%"
        },0).animate({
            left:0
        },best_timer);

        // 나가는 방
        $('.best_item_content').eq($('.best_item_active').index()).animate({
            left:-100+"%"
        },best_timer);

        $('.best_item_btn').removeClass('best_item_active');
        $('.best_item_btn').eq($(this).index()).addClass('best_item_active');

        best_index = $(this).index()+1;
    })

    function best_btn_init(){
        $('.best_item_btn').css({
            pointerEvents:"none"
        })
        setTimeout(function(){
            $('.best_item_btn').css({
                pointerEvents:"auto"
            })
        },best_timer)
    }

    ////////////////////////////////////////////////////////////////////
    // choice
    $('.sel_btn_1').click(function(){
        $('.select_txt_ul').eq($('.select_txt_1').index()).css({
            height:"300"
        })
    })
    $('.sel_btn_2').click(function(){
        $('.select_txt_ul').eq($('.select_txt_2').index()).css({
            height:"300"
        })
    })
    $('.sel_btn_3').click(function(){
        $('.select_txt_ul').eq($('.select_txt_3').index()).css({
            height:"300"
        })
    })

    $('.select_txt_1 .select_txt_ul li').click(function(){
        // console.log($(this).index())
        $('.select_txt_1 .sel_txt_1').removeClass('sel_txt_active');
        $('.select_txt_1 .sel_txt_1').eq($(this).index()).addClass('sel_txt_active')

        
        $('.select_txt_ul').css({
            height:"0"
        })
        
        // $('.select_content_box').css({
        //     backgroundColor:"#f3c56680"
        // })
        

        $('.select_R img').removeClass('select_R_active');
        $('.select_R img').eq($(this).index()+1).addClass('select_R_active');
    })
    $('.select_txt_2 .select_txt_ul li').click(function(){
        console.log($('.sel_txt_active').index())
        $('.select_txt_2 .sel_txt_1').removeClass('sel_txt_active');
        $('.select_txt_2 .sel_txt_1').eq($(this).index()).addClass('sel_txt_active')
        
        $('.select_txt_ul').css({
            height:"0"
        })

        // $('.select_content_box').css({
        //     backgroundColor:"red"
        // })
    })
    $('.select_txt_3 .select_txt_ul li').click(function(){

        $('.select_txt_3 .sel_txt_1').removeClass('sel_txt_active');
        $('.select_txt_3 .sel_txt_1').eq($(this).index()).addClass('sel_txt_active')
        
        $('.select_txt_ul').css({
            height:"0"
        })

        // $('.select_content_box').css({
        //     backgroundColor:"blue"
        // })
    })

    // 한칸슬라이드
    let slide_index = 0;
    let slide_item_width = $('.select_slide_item').outerWidth();
    let select_slide_count = $('.select_slide_item').length;
    let select_slide_timer = 3000;
    let select_interval = "";
    
    setTimeout(function(){
        
        for(let i = 0; i < select_slide_count; i++ ){
            slide_item_width = $('.select_slide_item').eq(i).outerWidth();

// console.log("i: " + i * slide_item_width)
            $('.select_slide_item').eq(i).css({
                left : i * slide_item_width
            })
        }
    },200)

    // console.log(slide_item_width)

    $(window).resize(function(){
        
        $('.select_slide_item').stop();
        clearInterval(select_interval);
        
       slide_item_width = $('.select_slide_item').outerWidth();

        for(let i = 0; i < select_slide_count; i++ ){
            $('.select_slide_item').eq(i).css({
                left : i*slide_item_width
            })
        }

        slide_index = 0;
        select_auto_slide();
    })
    

    function select_auto_slide(){
        select_interval = setInterval(function(){
            $('.select_slide_item').animate({
                left:"-="+slide_item_width
            },select_slide_timer,"linear")
            $('.select_slide_item').eq(slide_index % select_slide_count).animate({
                left: slide_item_width * (select_slide_count - 1)
            },0)

            slide_index++;

        },select_slide_timer)
    }
    select_auto_slide();


    /////////////////////////////////////////////////////////////////////////////
    // stroy_box
    $('.story_txt').mouseenter(function(){
// console.log($(this).index());

        $('.story_img_box img').removeClass('story_active');
        $('.story_img_box img').eq($(this).index()).addClass('story_active');
    })

    let story_o_top = $('.select_content_box').offset().top + ($('.select_content_box').height() / 2);
    let story_height = $('.story_content_box').height() / 2;

    setTimeout(() => {
        story_o_top = $('.select_content_box').offset().top + ($('.select_content_box').height() / 2);
        console.log(story_o_top)
    }, 600);

    $(window).scroll(function(){
        let s_top = $(window).scrollTop(); 
        if(s_top >= story_o_top){
            $('.story_content_box').css({
                transform:"translateY(0)",
                opacity:"1"
            })
        }
    })

    ////////////////////////////////////////////////////////////////////////////
    // 이달의 혜택
    let event_index = 0;
    let event_count = $('.event_item_box').length;
    let event_width = $('.event_item_box').outerWidth();
    let event_timer = 500;
    let event_interval ="";

    setTimeout(function(){
        event_width = $('.event_item_box').outerWidth();

        for(let i = 0; i < event_count; i++){
            $('.event_item_box').eq(i).css({
                left: i * (event_width+100)
            })
        }
    
    },50)

    $('.event_R').click(function(){
        event_btn_init();
        $('.event_item_box').animate({
            left:"-="+(event_width+100)
        },event_timer, "linear")
        
        $('.event_item_box').eq(event_index % event_count).animate({
            left: (event_width+100) * (event_count - 1)
        },0)

        event_index++;

    })

    $('.event_L').click(function(){
        event_btn_init();    
        event_index--;
        
        $('.event_item_box').eq(event_index % event_count).animate({
            left:-(event_width+100)
        },0)
        $('.event_item_box').animate({
            left:'+='+(event_width+100)
        },event_timer)
    })

    function event_auto_slide(){
        clearInterval(event_interval);
        event_interval = setInterval(function(){
            $('.event_R').trigger('click')
        },event_timer * 3);
    }

    event_auto_slide();

    function event_btn_init(){
        $('.event_btn').css({
            pointerEvents:"none"
        })
        setTimeout(function(){
            $('.event_btn').css({
                pointerEvents:"auto"
            })
        },event_timer);
    }

    $('.event_img_box ,.event_btn').mouseenter(function(){
        clearInterval(event_interval);
    })
    $('.event_img_box ,.event_btn').mouseleave(function(){
        event_auto_slide();
    })

    //////////////////////////////////////////////////////////////////
    // center_box
    let center_index = 0;
    let center_count = $('.center_content_item').length;
    let center_width = $('.center_content_item').outerWidth();
    let center_timer = 500;
    let center_gauge_count = $('.center_gauge').length;
    let center_gauge_width = $('.center_gauge').outerWidth();
    let center_count_gauge = 1;
    for(let i = 0; i < center_gauge_count; i++){
        $('.center_gauge').eq(i).css({
            left:center_gauge_width * i,
            display:"none"
        })
    }
    
    $('.center_gauge').eq(0).css({
        display:"block"
    })
    
    setTimeout(function(){
        center_width = $('.center_items a').outerWidth();

        for(let i = 0; i < center_count; i++){
            $('.center_items a').eq(i).css({
                left:(center_width+20) * i
            })
        }
    },100);
    

    $('.center_btn_R').click(function(){
        center_btn_init();
        $('.center_items a').animate({
            left:"-="+(center_width+20)
        },center_timer);

        $('.center_items a').eq(center_index % center_count).animate({
            left:(center_width+20) * (center_count - 1)
        },0)

        center_index++;
        console.log(center_index)
        
        // console.log(center_count_gauge)

        center_count_gauge++;
        $('.center_gauge').css({
            width:`calc((100% / 6 ) * ${center_count_gauge})`,
            backgroundColor: "#555"
        })

        
        if(center_count_gauge == 7){
            $('.center_gauge').css({
                width:"calc((100% / 6))",
            })
            center_count_gauge = 1;
        }
        console.log(center_count_gauge)



        // $('.center_gauge').eq((center_index) % center_count).css({
        //     display:"block"
        // });

        // if((center_index % center_count) == 0){
        //     $('.center_gauge').css({
        //         display:"none"
        //     })
        //      $('.center_gauge').eq(0).css({
        //         display:"block"
        //     })

        // }
    })

    $('.center_btn_L').click(function(){
        center_btn_init();
        center_index--;
        console.log("화화홯깅ㄴ")
        console.log(center_index % center_count)
        $('.center_items a').eq(center_index % center_count).animate({
            left:-(center_width+20)
        },0)
        $('.center_items a').animate({
            left:"+="+(center_width+20)
        },center_timer);

        center_count_gauge--;
        $('.center_gauge').css({
            width:`calc((100% / 6 ) * ${(center_count_gauge) % center_gauge_count})`,
            backgroundColor: "#555"
        })


        if(center_count_gauge == 0){
            center_count_gauge = 6;
            $('.center_gauge').css({
                width:`calc((100% / 6 ) * 7)`,
            })
        }

        console.log(center_count_gauge)

    })

    function center_btn_init(){
        $('.center_btn').css({
            pointerEvents:"none"
        })
        setTimeout(function(){
            $('.center_btn').css({
                pointerEvents:"auto"
            })
        },center_timer);
    }
})