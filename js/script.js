// burger 
$('.burger-toggle').on('click', function(){
    $('.menu ul').toggleClass('slide');
    $('.burger-toggle span').toggleClass('open');
});

$(window).on('load', function(){
    $('.intro span').addClass('animate');
});

$('.nav-item').on('click',function(e){
    $('.menu ul').removeClass('slide');

    // var tujuan = $(this).attr('href');
    
    // var elemenTujuan = $('#about');
    
    // console.log(elemenTujuan)
    
    // $('body').animate({
    //     scrollTop : elemenTujuan.offset().top -50
    // }, 1250 ,'swing');

    // e.preventDefault();
});


$(window).scroll(function(){
    
    var wScroll = $(this).scrollTop();

 
    $('.navbar').toggleClass('stiky', window.scrollY > 100); 
    

    
    // intro
    $('.intro h2').css({
        'transform' : 'translateY('+ wScroll/2 +'%)'
    });
    $('.intro h3').css({
        'transform' : 'translateY('+ wScroll/20 +'%)'
    });
    $('.intro .sosmed').css({
        'transform' : 'translateY('+ wScroll/3 +'%)'
    });



    // about

    if(wScroll > $('.about').offset().top -200){
       $('.about-me').addClass('animate');
    }

    // what i do
    if(wScroll > $('.whatido').offset().top -200){
        $('.card').each(function(i){
            setTimeout(() => {
                $('.card').eq(i).addClass('animate');
            }, 300 * (1+i) );
        });

      
    }
});





