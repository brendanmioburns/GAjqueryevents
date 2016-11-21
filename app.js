$(document).ready(function() {

    var myDivs = $(".my-divs");

    myDivs.on("click", function() {
        $(this).addClass("animate");
    });

});
