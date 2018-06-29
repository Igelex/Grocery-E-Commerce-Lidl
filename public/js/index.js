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
            title: $(item).find('.card-title').text(),
            img: $(item).find('.card-img-top').attr('src')
        };

        addItemToBasket(new_item.title, new_item.img);

        bakets_items.push(new_item);
    })
});

function addItemToBasket(title, img) {

    let template = $(`<div class="card shadow-sm mb-2 disp-none">
        <img class="card-img-to basket-img" src="${img}">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <i class="fas fa-times close"></i>
        </div>
    </div>`);

    $('#basket').append(template);

    if (bakets_items.length === 0) {
        $('#basket').fadeIn(300);
    }
}


