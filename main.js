type = "text/javascript">  
$(window).load(function() {
    setTimeout(function() {
        $(".content_post").show('fadeIn', {}, 500)
    }, 5200);
});

setTimeout(function() {
    $('#loading_icon').fadeOut('fast');
}, 5000);

setTimeout(function() {
    $('.loading_bar').fadeOut('fast');
}, 5000);
