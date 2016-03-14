$(function(){
    init();
    function init(){
        function scrollingTop () {
            $(".hl-goto-top a").click(function() {
            $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
        }
        function callToAction () {
            $(".hl-hero__btn").click(function() {
            target = $(this).attr("href")
            href = $(target).offset().top;
            $("html, body").animate({ scrollTop: href }, "slow");
                return false;
            });
        }
        function nanoScroll () {
            $(".nano").nanoScroller();
        }
        function menuClick(){
            $(".hl-menu-icon").on("click", function (e) {
                $("nav").toggleClass("hl-nav-open");
                $(".hl-menu-icon").toggleClass("hl-menu-icon--move");
                return false;
            });
        }
        function accordion(){
            $("#menu-menu a").on("click", function (e) {
                if ($(this).parent().has("ul")) {
                    e.preventDefault();
                    $("#menu-menu a").each(function () {
                        $(this).addClass("hl-isntClicked");
                        $(this).removeClass("hl-isClicked");
                    });
                    $(this).addClass("hl-isClicked");
                    $("#menu-menu ul").slideUp(function () {
                        $(this).css("display","none");
                    });
                }
                $a = $(this);
                setTimeout(function(){
                 $a.next('ul').slideToggle();
                }, 300);
                
            });
        }
        function masonry(){
            $('.masonry').masonry({
                itemSelector: ".masonry-item",
                stamp: '.stamp',
                columnWidth: 1,
                gutter: 30
            });
        }
        function flexslider(){
            if ($("*").hasClass("flexslider")) {
              $('.flexslider').flexslider({
                animation: "slide"
              });
              $('.flex-caption').css("width", $(window).width());
            }
        }
        function inputFocus(){
            $(".hl-input__field").on("focus", function () {
                $(this).addClass("hl-input--filled");
            });
            $(".hl-input__field").on("focusout", function () {
                if ($(this).val().length>0) {
                    $(this).addClass("hl-input--filled");
                }else{
                    $(this).removeClass("hl-input--filled");
                }
            });

        }
        scrollingTop();
        menuClick();
        accordion();
        masonry();
        flexslider();
        inputFocus();
        nanoScroll ();
        callToAction ();
    }

});