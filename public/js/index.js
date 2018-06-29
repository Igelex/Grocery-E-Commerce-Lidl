import 'bootstrap';
import 'popper.js';
import 'jquery-ui-bundle';
//import 'jquery-ui-bundle/jquery-ui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

let bakets_items = [];

$('#groceries').click(() => {
    $('#nav-items-container').fadeToggle(300);
});

$('#drinks').click(() => {
    $('#group-2').fadeToggle(200);
});
$('#water').click(() => {
    $('#group-3').fadeToggle(200);
});
$( "#search" ).autocomplete({
    source: ['hui', 'pizda']
});

$('.card').each((i, item) => {
    let add_button = $(item).find('.add-to-basket');

    //console.log(add_button);

    $(add_button).click(() => {

        let new_item = {
            title: $(item).find('.card-title'),
            img: $(item).find('.card-img-top').attr('src')
        };

        bakets_items.push(new_item);

        console.warn(new_item);

    })
});

function addItemToBasket() {
    if (bakets_items.length === 0) {
        $('#basket').fadeIn(300);
    }
}


