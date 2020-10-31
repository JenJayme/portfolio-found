$(document).foundation();
var button = $('.button');

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



      $(document).on('click', function (event) {
        console.log("Clicked", $(this))
    })
})

