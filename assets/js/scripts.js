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

const colors = [ "ColorBlue", "ColorPink", "ColorGreen", "ColorYellow" ];
const cards = document.querySelectorAll('.list-Card');
const items = [];
for (let i = 0; i < cards.length; i++) {
    items.push(cards[i]);
}
items.map(x => {
    const s = Math.floor(Math.random() * colors.length);
    const el = x.querySelectorAll('a');
    for (let obj of el) {
        obj.classList.add(colors[s])
    }
});