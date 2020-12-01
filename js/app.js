$(document).foundation();
var button = $('.button');
var contactForm = $('#contactForm');
var homeButton = $('.home-button');

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

function scrollToTop () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function openCurtain () {
    $('body').removeClass('curtain-menu-close');
    $('body').addClass('curtain-menu-open');
}

function closeCurtain () {
    $('body').removeClass('curtain-menu-open');
    $('body').addClass('curtain-menu-close');
}
    
$(document).ready(function () {

    openCurtain();

    homeButton.click(function(){
        scrollToTop();
        $('body').addClass('curtain-menu-open');
    })

    contactForm.on('submit', function (event) {
        event.preventDefault();
        console.log("Submitting contact form.");
        emailjs.sendForm('contact_service', 'port_contact_form', this);
      })

      $(document).on('click', function (event) {
        console.log("Clicked", $(this))
    })
})

