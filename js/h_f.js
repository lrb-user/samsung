$(document).ready(function(){
     // 메뉴 판

    $('.h_top_menu,.h_pan').mouseenter(function(){
        $('.h_pan').css({
            height:"80vh",
            borderTop: "2px solid #ddd",
            borderBottom: "2px solid #ddd"
        })
    })
    $('.h_top_menu,.h_pan').mouseleave(function(){
        $('.h_pan').css({
            height:0,
            borderTop: "none",
            borderBottom: "none"
        })
    })
    $('.big_menu').mouseenter(function(){
        $('.pan_menu').css({
            display:"none"
        })
        $('.pan_menu').eq($(this).index()).css({
            display:"block"
        })
    })
    //  $('.h_top_menu ,.h_pan').mouseenter(function(){
    //     $('.h_pan').css({
    //         height:"800"
    //     })
    // })
    // $('.h_top_menu ,.h_pan').mouseleave(function(){
    //     $('.h_pan').css({
    //         height:0
    //     })
    // })

    // $('.pro_li_title').mouseenter(function(){
    //     // console.log($(this).index());
    //     console.log($('.pan_content').index())
    // })

    // //어쩌구저쩌구
    // $('.menu_product').mouseenter(function(){
    //     $('.pan_main').css({
    //         display:"none"
    //     })

    //     $('.product_pan').css({
    //         display:"block"
    //     })
    // })
    // $('.menu_event_plan').mouseenter(function(){

    //     $('.pan_main').css({
    //         display:"none"
    //     })

    //     $('.event_pan').css({
    //         display:"block"
    //     })

    // })
    // $('.pan_new').mouseenter(function(){
    //     $('.pan_content').css({
    //         display:"none"
    //     })
        
    //     $('.new_content').css({
    //         display:"block"
    //     })
    // })
    // $('.pan_mobile').mouseenter(function(){
    //     $('.pan_content').css({
    //         display:"none"
    //     })
    //     $('.mobile_content').css({
    //         display:"block"
    //     })
    // })
    // $('.pan_bes').mouseenter(function(){
    //     $('.pan_content').css({
    //         display:"none"
    //     })
    //     $('.bespoke_content').css({
    //         display:"block"
    //     })
    // })

    // $('.pan_gel').mouseenter(function(){
    //     $('.pan_content').css({
    //         display:"none"
    //     })
    //     $('.gal_content').css({
    //         display:"block"
    //     })
    // })
})