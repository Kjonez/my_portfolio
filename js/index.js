$(document).ready(init);

function init(){
    email();
    phone();
    closeNav();
}
function email(){
    var e = 'josh';
    e += 'huber';
    e += '.dev';
    e += '@';
    e += 'gmail.com';
    $('.email').text(e);
    e = 'mailto:' + e;
    $('.email ').attr('href', e);
}
function phone(){
    var p = '310';
    p += '-780';
    p += '-4602';
    $('.phone').text(p);
}
function closeNav(){
    $(document).click(function (event) {
        var clickover = $(event.target);
        var hamburger = $('.mobile-nav');
        var opened = hamburger.hasClass('active');
        var ul = $('.scroll-nav');
        if (opened === true && !clickover.hasClass("clearlist") && !clickover.hasClass("fa-bars") ) {
            $(".mobile-nav").click();
        }
    });
}
