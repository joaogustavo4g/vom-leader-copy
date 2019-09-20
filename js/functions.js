var img_1 = document.getElementsByClassName("first")
var img_2 = document.getElementsByClassName("second")
var button = document.getElementsByClassName("button")


$("document").ready(function($){
    var nav = $('.menu-fixo');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            nav.addClass("fixo");
        } else {
            nav.removeClass("fixo");
        }
    });
});


function hiddeImg(index) {
    img_1[index].style.display = "none"
    img_2[index].style.display = "block"
    button[index].style.display = "block"
}

function displayImg(index) {
    img_1[index].style.display = "block"
    img_2[index].style.display = "none"
    button[index].style.display = "none"
}
function more(qtd) {
    document.getElementById("more").style.display = "none"
    for (index = 0; qtd >= index; index++) {
        document.getElementsByClassName("sub")[index].style.display = "block"
    }
}

