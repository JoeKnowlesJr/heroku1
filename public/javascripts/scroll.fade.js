let scrollTimer = -1;

function bodyScroll() {
    $(".footer").fadeIn(1);
    if (scrollTimer !== -1)
        clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout("scrollFinished()", 1000);
}
function scrollFinished() {
    $(".footer").fadeOut(2000);
}
