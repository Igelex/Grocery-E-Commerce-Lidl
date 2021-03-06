import 'bootstrap';
import 'popper.js';
import 'jquery-ui-bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/circle.css';
import '../stylesheets/style.css';
import 'jquery-ui-bundle/jquery-ui.css';
//import 'bulma/css/bulma.css';

let bakets_items = [];

$('#groceries').click(() => {
    $('#nav-items-container').fadeToggle(300);
});

$('#food').click(() => {
    $('#group-2-drinks').fadeOut(0);
    $('#group-3-water').fadeOut(0);
    $('#group-3-food').fadeOut(0);
    $('#group-2-food').fadeToggle(200);
});

$('#drinks').click(() => {
    $('#group-2-drinks').fadeToggle(200);
    $('#group-2-food').fadeOut(0);
    $('#group-3-food').fadeOut(0);

});

$('#water').click(() => {
    $('#group-3-water').fadeToggle(200);
});

$('#food-2').click(() => {
    $('#group-3-food').fadeToggle(200);
});


$('.add-to-basket').click(() => {

    let new_item = {
        title: $('#item-titel').text(),
        img: $('#item-img').attr('src')
    };

    addItemToBasket(new_item.title, new_item.img);

    bakets_items.push(new_item);
});

$('.card-img-top').click(() => {
    window.location = '/details';
});

function addItemToBasket(title, img) {

    let template = $(`<div class="card shadow-sm mb-2">
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

$("#datepicker").datepicker();

$('document').ready(function () {
    setTimeout(() => {
        $('.loading-overlay').fadeOut(300);
        $('main').fadeIn(500);

    }, 300);
});