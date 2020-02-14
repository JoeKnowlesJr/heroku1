function colorize() {
    const elms = document.querySelectorAll('td.party');
    for (let i = 0; i < elms.length; ++i) {
        if( (elms[i].innerText || elms[i].textContent) === "R") {
            elms[i].parentElement.style.color = "red";
        }
        if( (elms[i].innerText || elms[i].textContent) === "D") {
            elms[i].parentElement.style.color = "blue";
        }
        if( (elms[i].innerText || elms[i].textContent) === "I") {
            elms[i].parentElement.style.color = "yellow";
        }
    }

    // $('td.party:contains(R)').css('color', 'red');
    // $('td.party:contains(D)').css('color', 'blue');
    // $('td.party:contains(I)').css('color', 'yellow');
}




