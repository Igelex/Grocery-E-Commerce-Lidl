import 'bootstrap';
import 'popper.js';
import 'jquery-ui-bundle';
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