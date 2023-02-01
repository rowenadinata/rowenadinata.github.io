const btn = $('#back-to-top-button');

$(window).scroll(() => {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show')
    }
});

btn.on('click', e => {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 300);

});

