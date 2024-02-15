
let navbar = document.getElementById('navbar');
//  toggle navbar
function toggleNavbar() {
    navbar.classList.toggle('move-navbar');
}
// close navbar
function closeNavbar() {
    navbar.classList.remove('move-navbar');
}

// validate form on submit
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('form submitted');
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message');
    let errorNotification = document.getElementById('error-notification-id');
    let notification = document.getElementById('notification-id');
    let form = document.getElementById('contact-form');

    if (name === '' || email === '' || message === '') {

        errorNotification.classList.add('show-notification');
    
    } else {
        notification.classList.add('show-notification');
        form.reset();
    }
});
// close notification function

function closeNotification(){
    let notification = document.getElementById('notification-id');
    let errorNotification = document.getElementById('error-notification-id');
    notification.classList.remove('show-notification');
    errorNotification.classList.remove('show-notification');

}

// close error notification function
function closeErrorNotification(){
    let errorNotification = document.getElementById('error-notification-id');
    errorNotification.classList.remove('show-notification');

}
