$(document).ready(function(){
    const price = ['1030000']
    let list = `<table class="pro_detail_table">
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
        <td class="td_color">1,030,000원</td>
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
        <td class="final_price">1,030,000원</td>
    </tr>
</table>
<div class="buy_btn_box flex_container">
    <a href="intro_pro_mobile.html" class="buy_btn cart">장바구니</a>
    <a href="intro_pro_mobile.html" class="buy_btn buy">바로구매</a>
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
    $('.pro_detail_box').append(list);

    // color_box클릭시
   
    // +,- 클릭시 숫자 바뀌게 하기
    let tmp_qty = 0;
    function total_price(){
        let total_price = 0;
        console.log(price)
        total_price += Number(tmp_qty * price[0]);
        console.log(total_price)

        $('.final_price').text(total_price.toLocaleString()+"원");
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
    let pro_detail_index = 1;
    let pro_detail_count = $('.detail_img').length;
    let pro_timer = 1000;
    let pro_interval = "";
        $('.pro_detail_indi').click(function(){
        $('.detail_img').eq($(this).index()).animate({
            left:100+"%"
        },0).animate({
            left:0
        },pro_timer);
        $('.detail_img').eq($('.pro_detail_indi_active').index()).animate({
            left:-100+"%"
        },pro_timer);

        $('.pro_detail_indi').removeClass('pro_detail_indi_active');
        $('.pro_detail_indi').eq($(this).index()).addClass('pro_detail_indi_active');

        pro_detail_index = $(this).index()+1;
    })

    let first_index = 1;
    let first_count = $('.first_bot_content').length;
    let first_timer = 1000;
    $('.first_btn_R').click(function(){
        first_btn_init()

        $('.first_bot_items a').eq(first_index % first_count).animate({
            left:100+"%"
        },0).animate({
            left:50
        },first_timer);
        $('.first_bot_items a').eq((first_index - 1) % first_count).animate({
            left:-100+"%"
        },first_timer);

        $('.first_indi').removeClass('first_indi_active');
        $('.first_indi').eq(first_index % first_count).addClass('first_indi_active');

        first_index++;
    })

    $('.first_btn_L').click(function(){
        first_btn_init()
        first_index--;
        $('.first_bot_items a').eq(first_index % first_count).animate({
            left:100+"%"
        },first_timer);
        $('.first_bot_items a').eq((first_index - 1) % first_count).animate({
            left:-100+"%"
        },0).animate({
            left:50
        },first_timer);
        $('.first_indi').removeClass('first_indi_active');
        $('.first_indi').eq((first_index - 1) % first_count).addClass('first_indi_active');
    })

    function first_btn_init(){
        $('.first_btn').css({
            PointerEvents:"none"
        })
        setTimeout(function(){
            $('.first_btn').css({
                PointerEvents:"auto"
            })
        },first_timer);
    }

    $('.first_indi').click(function(){
        $('.first_bot_items a').eq(first_index % first_count).animate({
            left:100+"%"
        },0).animate({
            left:50
        },first_timer);
        $('.first_bot_items a').eq((first_index - 1) % first_count).animate({
            left:-100+"%"
        },first_timer);

        $('.first_indi').removeClass('first_indi_active');
        $('.first_indi').eq($(this).index()).addClass('first_indi_active');

        first_index++;
    })

    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        let design_o_top = $('.design_box').offset().top;
        console.log(s_top,design_o_top)

        if(s_top >= design_o_top -400){
            $('.design_title_box').css({
                transform: 'translateX(0)',
            })
        }

        if(s_top >= design_o_top -200){
            $('.design_img_box').css({
                transform:"translateX(0) rotate(1080deg)"
            })
        }

        let quick_o_top = $('.quick_content_box').offset().top;
        if(s_top >= quick_o_top - 200){
            $('.quick_img_2').css({
                transform:"translateY(0)",
                opacity:1
            })
        }

        let new_o_top = $('.new_ex_box').offset().top;
        if(s_top >= new_o_top -100){
            $('.new_ex_txt_box').css({
                transform:"translate(-50%,-50%)",
                opacity:"1"
            })
            $('.new_ex_box img').css({
                transform:"scale(1.1)"
            })
        }

    })

})