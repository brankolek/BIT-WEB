var links = ["https:images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=350", "https://media.istockphoto.com/photos/sunrise-on-yosemite-valley-picture-id505872990?k=6&m=505872990&s=612x612&w=0&h=XcdHhkC9PF9-saYT6n_GQD-0Hf8dbI_Q4wfYlZZGpNk=", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrn6E21kd1XhFGcl2aqyiNPg4Xu1N5pk54OmoRmIPCC7xvefOV", "http://yoganature.fi/wp-content/uploads/2016/12/yoga_nature_blog_round.jpg", "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/03/18/Pictures/_3b422680-0bf1-11e7-ad00-2dd402d181d7.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDfMzHUiCG1VstOMp0hjA-wbthrbvy8GV4ksY7k4BGt_2e0-nU"];


for (var i = 0; i < links.length; i++) {

    var img = $("<img>")
    img.attr("src", links[i]);
    $('body').append(img);

}



var title = $("<h1>")

title.text("Amazing Gallery");

$('body').prepend(title);

$("img").each(function (index, element) {


    var width = Math.random() * (800 - 100) + 100;
    $(element).css("width", width);




});

$("img").each(function (index, element) {


    var currentWidth = parseInt($(element).css("width"));
    console.log(currentWidth)

    if (currentWidth < 500) {

        $(element).css({

            "border": "solid 10px red",

        });

        return false;

    }


})



function fade() {


    $('img').fadeOut(1000);
    $('img').fadeIn(1000);

}

// setInterval(fade, 2000)