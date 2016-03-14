$(function(){
    token = "2289856902.a95a921.5ea220a5b6f444b585f8d464d2a84a1b";
    id = "a95a9211b7d34a08bebc2c978c9ff7bf";
    // how to build instagram api
    // http://bobmckay.com/web/simple-tutorial-for-getting-an-instagram-clientid-and-access-token/
    url = 'https://api.instagram.com/v1/users/self/media/recent?access_token='+token+'&max_id='+id+'&callback=?';
    items = 4;
    $.getJSON( url, function(data){
        for (var i = items - 1; i >= 0; i--) {
            try{
                srcImg = data.data[i].images.low_resolution.url;
                altImg= data.data[i].caption.text;
                linkImg = data.data[i].link;
            }catch(e){
                // if the post doesnt have a caption
                altImg="Helia's instagram";
                linkImg = "";
            }
            $('.hl-insta .hl-thumbnail').prepend('<div class="col-md-3"><a href="'+linkImg+'" target="_blank"><img src="'+data.data[i].images.thumbnail.url+'" alt="'+altImg+'"></a></div>');

        };
        doOnOrientationChange();
    });
    function instagramTranslateY(instaTranslateY){
        $(".hl-thumbnail div:nth-child(4n+1), .hl-thumbnail div:nth-child(4n)")
        .css("-webkit-transform",'translateY('+(-instaTranslateY)+'px)')
        .css("-moz-transform",'translateY('+(-instaTranslateY)+'px)')
        .css("transform",'translateY('+(-instaTranslateY)+'px)');
    }
    function doOnOrientationChange(){
        if ($(window).width()>= 1024) {
            instaTranslateY = parseInt($(".hl-insta__intro p").css("height"))+20;
            instaTranslateY += parseInt($(".hl-insta__intro p").css("margin-bottom"));
            instagramTranslateY(instaTranslateY);
        }else if($(window).width()>= 768){
            switch(window.orientation){  
              case -90:
              case 90:
                instaTranslateY = parseInt($(".hl-insta__intro p").css("height"))+20;
                instaTranslateY += parseInt($(".hl-insta__intro p").css("margin-bottom"));
                instagramTranslateY(instaTranslateY); 
                break; 
              default:
                instagramTranslateY(0) 
                break; 
            }
        }
    }
    window.addEventListener('orientationchange', doOnOrientationChange);
    doOnOrientationChange();
});