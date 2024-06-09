$(document).ready(function(){
    // pro_detil_click
    $('.pro_detail_item_box').eq(0).css({
            borderColor:"transparent",
            backgroundColor:"#f9e0ab91"
    })
    $('.pro_detail_item_box').click(function(){
        // console.log("클릭확인")
        $('.pro_click_img').removeClass('pro_click_active');
        $('.pro_click_img').eq($(this).index()).addClass('pro_click_active');

        $('.pro_detail_item_box').css({
            border:"1px solid #9d9d9d",
            backgroundColor:"transparent"
        })
        $(this).css({
            borderColor:"transparent",
            backgroundColor:"#f9e0ab91"
        })
    })

    // pro_detail_count
    const price = [1030000]
    let list = `<div class="pro_detail_title">
                    <h1>갤럭시 Z 플립3 비스포크 에디션</h1>
                    <p>NT950XDB-KD71S</p>
                </div>
                <div class="pro_detail_review_txt_box flex_container">
                    <p class="pro_review">⭐️⭐️⭐️⭐️ 4.9&nbsp(16건)</p>
                    <p class="pro_review">상품평 쓰기</p>
                </div>
                <table class="pro_detail_table">
                    <tr>
                        <td>판매가</td>
                        <td>1,550,000원</td>
                    </tr>
                    <tr>
                        <td>회원가</td>
                        <td>1,230,000원</td>
                    </tr>
                    <tr>
                        <td class="td_color">혜택가</td>
                        <td class="td_color">${price[0].toLocaleString('ko-KR')}원</td>
                    </tr>
                </table>
                <table class="pro_price_table">
                    <tr>
                        <td class="pro_price_title">색상</td>
                        <td class="pro_price_color_items">
                            <div class="pro_price_color">
                                <div class="pro_price_black pro_color_item"></div>
                            </div>
                            <div class="pro_price_color">
                                <div class="pro_price_white pro_color_item"></div>
                            </div>
                            <div class="pro_price_color">
                                <div class="pro_price_yellow pro_color_item"></div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="pro_price_title">수량</td>
                        <td class="pro_count">
                            <input type="text" value="-" class="pro_btn pro_btn_minus">
                            <input type="text" value="1" class="pro_txt">
                            <input type="text" value="+" class="pro_btn pro_btn_plus">
                        </td>
                    </tr>
                </table>
                <div class="pro_point">
                    삼성 멤버십 <span class="pro_point_color">128,160</span>포인트 적립
                </div>
                <div class="pro_deliever">
                    배송 1주 이상 소요 예정 
                </div>
                <table class="final_price_table">
                    <tr>
                        <td>혜택가</td>
                        <td class="final_price">${price[0].toLocaleString('ko-KR')}원</td>
                    </tr>
                </table>
                <div class="buy_btn_box flex_container">
                    <a href="intro_page.html" class="buy_btn cart">장바구니</a>
                    <a href="intro_page.html" class="buy_btn buy">바로구매</a>
                </div>
                <div class="pro_adv_box">
                    <div class="pro_adv">
                        <img src="img/detail/pro_banner_1.jpg" alt="">
                    </div>
                    <div class="pro_adv">
                        <img src="img/detail/pro_banner_2.jpg" alt="">
                    </div>
                </div>
    `
    $('.pro_detail_R').append(list);
console.log(price[0].toLocaleString('ko-KR'));
    // color_box클릭시
   
    // +,- 클릭시 숫자 바뀌게 하기
    let tmp_qty = 0;
    function total_price(){
        let total_price = 0;
        console.log(price)
        total_price += Number(tmp_qty * price[0]);
        console.log(total_price)

        $('.final_price').text(total_price.toLocaleString('ko-KR')+"원");
    }

    $('.pro_btn_plus').click(function(){
        tmp_qty = Number($(this).prev('.pro_txt').val())+1;
        $(this).prev('.pro_txt').val(tmp_qty)
        total_price();
    })

    $('.pro_btn_minus').click(function(){
        tmp_qty = Number($(this).next('.pro_txt').val())-1;
        if($(this).next('.pro_txt').val() > 1){
            $(this).next('.pro_txt').val(tmp_qty)
            total_price();
        }
        else{
            alert("최소 주문 수량은 1개 입니다.")
        }
    })

    // 좋아하던 플립 슬라이드
    let first_index = 1;
    let first_count = $('.first_bot_content').length;
    let first_timer= 1000;

    $('.first_indi').eq(0).addClass('first_indi_active');
    
    $('.first_btn_R').click(function(){
        first_btn_init();
        // console.log("클릭확인")
        // 들어오는 방
        $('.first_bot_items a').eq(first_index % first_count).animate({
            left:100+"%"
        },0).animate({
            left:50
        },first_timer);
        
        // 나가는 방
        $('.first_bot_items a').eq((first_index - 1) % first_count).animate({
            left:-100+"%"
        },first_timer);

        $('.first_indi').removeClass('first_indi_active');
        $('.first_indi').eq(first_index % first_count).addClass('first_indi_active');

        first_index++;
    })

    $('.first_btn_L').click(function(){
        first_btn_init();
        first_index--;

        // 나가는 방
        $('.first_bot_items a').eq(first_index % first_count).animate({
            left:100+"%"
        },first_timer);

        // 들어오는 방
        $('.first_bot_items a').eq((first_index - 1) % first_count).animate({
            left:-100+"%"
        },0).animate({
            left:50
        },first_timer);

        $('.first_indi').removeClass('first_indi_active');
        $('.first_indi').eq((first_index -1) % first_count).addClass('first_indi_active');
    })

    $('.first_indi').click(function(){
        
        // 들어오는 방
        $('.first_bot_items a').eq($(this).index()).animate({
            left:100+"%"
        },0).animate({
            left:50
        },first_timer);

        // 나가는 방
        $('.first_bot_items a').eq($('.first_indi_active').index()).animate({
            left:-100+"%"
        },first_timer);

        $('.first_indi').removeClass('first_indi_active');
        $('.first_indi').eq($(this).index()).addClass('first_indi_active');

        first_index = $(this).index()+1;
    })

    function first_btn_init(){
        $('.first_btn').css({
            pointerEvents:"none"
        })
        setTimeout(function(){
            $('.first_btn').css({
                pointerEvents:"auto"
            })
        },first_timer);
    }

    // 플립을 가진자
    let new_interval = "";
    let new_index = 0;
    let new_timer = 800 ;

    // function new_auto_rotate(){
    //     clearInterval(new_interval)
    //     new_interval = setInterval(function(){
    //         let new_count = new_index % 360
    //         $('.new_rotate').css({
    //             transform:`rotate(${new_count}deg)`
    //         },new_timer);
    //         new_index+=10;
    //     },new_timer);
    // }

    // new_auto_rotate();

    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        
        // 플립을 가진자
        let new_o_top = $('.new_ex_box').offset().top+20;
        if(s_top >= new_o_top){
            $('.new_ex_txt_box').css({
                transform:"translate(-50%,-50%)",
                opacity:1
            })
            $('.new_ex_box img').css({
                transform:"scale(1)"
            })
        }
        
        //좋아하던 플립
        let first_o_bot = $('.first_content').offset().top - ($('.first_top').height() + 250);
        if(s_top >= first_o_bot){
            $('.first_top_L').css({
                opacity:1,
                transform:"translateX(0)"
            })
            $('.first_top_R').css({
                opacity:1,
                transform:"translateX(0)"
            })
        }

        // 디자인
        let design_o_top = $('.design_box').offset().top;
        let cream_box_o_top = $('.cream_box').offset().top;
        let black_box_o_top = $('.black_box').offset().top;
        let lavender_box_o_top = $('.lavender_box').offset().top;
        let green_box_o_top = $('.green_box').offset().top;
        // if(s_top >= cream_box_o_top){
        //     $('.design_s_txt').css({
        //         transform:"translateY(-100px)"
        //     })   
        // }
        if(s_top >= design_o_top-500){
            $('.design_title_box').css({
                transform:"translateX(0)"
            })
        }
        if(s_top >= design_o_top+300){
            $('.design_img_box').css({
                transform:"translateX(0) rotate(1080deg)"
            })
        }

        // quick
        let quick_o_top = $('.quick_content_box').offset().top-800;
        if(s_top >= quick_o_top){
            $('.quick_img_2').css({
                // opacity:1
                transform:"translateY(0)"
            })
        }
        
    })

    // 디자인 글자 한칸씩
    let design_txt_index = 0;
    let design_txt_chk = true;
    let design_s_txt_count = $('.design_s_txt_1').length;
    let design_txt_interval = "";

    // function design_txt(){
    //     design_txt_interval = setInterval(function(){
    //         clearInterval(design_txt_interval)
    //         if(design_txt_chk){
    //             $('.design_s_txt_1').eq(design_txt_index).addClass('design_txt_active');
    //             design_txt_index+=1;
    //             if(design_txt_index >= design_s_txt_count){
    //                 design_txt_chk = false;
    //             }
    //         }
    //         else{
    //             design_txt_index-=1;
    //             $('.design_s_txt_1').eq(design_txt_index).removeClass('design_txt_active')

    //             if(design_txt_index <= 0){
    //                 design_txt_chk  = true;
    //             }
    //         }
    //     },1000)
    // }


})