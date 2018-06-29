import 'bootstrap';
import 'popper.js';
import 'jquery-ui-bundle';
//import 'jquery-ui-bundle/jquery-ui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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