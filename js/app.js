$(document).foundation();
var button = $('.button');
var contactForm = $('#contactForm');

function testAlert () {
    alert("Button click registered")
}

button.on('click', function (event) {
    console.log("Button click registered!")
})


$('.flip-card').on('mouseover', function (event) {
    event.preventDefault();
    // var thisLink = $('.flip-card-inner a');
    var thisLink = $("<a>");
    thisLink.removeClass('hidden');
    console.log("Hovering on", thisLink)
})

$(document).ready(function () {

    contactForm.on('submit', function (event) {
        event.preventDefault();
        console.log("Submitting contact form.");
        emailjs.sendForm('contact_service', 'port_contact_form', this);
      })

      $(document).on('click', function (event) {
        console.log("Clicked", $(this))
    })
})

