$('li:first').addClass("borderBottom")

$("li").addClass("lowerCase")

$("li.active").css("color", "red");

var middle = (($("li").length - 1) / 2) + "";

$("li:eq(" + middle + ")").css("color", "red");