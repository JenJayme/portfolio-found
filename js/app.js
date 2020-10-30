$(document).foundation();
var button = $('.button');

function testAlert () {
    alert("Button click registered")
}

button.on('click', function (event) {
    console.log("Button click registered!")
})

$(document).ready(function () {
    button.on('click', function (event) {
        console.log("Button click registered!")
    })
})

