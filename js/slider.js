+function () {
    var sliderImg = [
        'assets/img/silder1.png',
        'assets/img/silder2.png',
        'assets/img/silder3.png'
    ];
    var bannerImg = [
        'assets/img/content-bg1.png',
        'assets/img/content-bg2.png',
        'assets/img/content-bg3.png',
    ];
    var sliderDom = $('.slider-img');
    var contentBgDom = $('.banner-content');
    var status = 0;

    function img(status) {
        var list = status;
        var timer = setInterval(function () {
            sliderDom.css('opacity', '0');
            if (list >= 3) {
                list = 0;
            }
            $('.imglist:eq(' + list + ')').addClass('img-show').siblings().removeClass('img-show');
            contentBgDom.css({
                'background': 'url(' + bannerImg[list] + ') no-repeat center',
                'background-size': '100% 100%'
            });
            list++;
        }, 4000);
    }
    img(status);
}();