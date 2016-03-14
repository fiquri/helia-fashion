$(function(){
    var invert = -1;
    var inTotal = 0;
    init();
    function init(){
        invertStart ();
        function invertStart () {
            if ($("*").hasClass("hl-invert")) {
                if (!$(".hl-invert").is( ":first-child" )) {
                 $(".hl-menu-icon").addClass("hl-header-invert");
                }else{
                 $(".hl-menu-icon").removeClass("hl-header-invert");
                }
            }else{
                $(".hl-menu-icon").addClass("hl-header-invert"); 
            }
        }
        function headerScroll (current) {
            if (invert <= current && current < inTotal) {
                $(".hl-menu-icon").removeClass("hl-header-invert");
            }else{
                $(".hl-menu-icon").addClass("hl-header-invert");
            }
            
        }
        function counterCheck (current) {
            counter= 0;
            counter = $(".hl-counter").prev().offset().top;
            if (current > counter) {
                count();
            };
        }
        countStart = true;
        function count () {
            if (countStart) {
               $('.hl-counter-start').each(function () {
                    $(this).prop('Counter',0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
               }
            countStart = false;
        }
        $(window).scroll(function () {
        current = $(window).scrollTop();
        if ($("*").hasClass("hl-invert")) {
            invert = $(".hl-invert").offset().top;
            inTotal = invert + $(".hl-invert").height();
            headerScroll(current);
        }
        if ($("*").hasClass("hl-counter")) {
            counterCheck (current);
        }
    });
    }
    
    

    
});
    