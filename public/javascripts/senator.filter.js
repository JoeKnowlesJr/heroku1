function senPartyFilter(party) {
    const elmsP = document.querySelectorAll('td.party');
    for (let i = 0; i < elmsP.length; ++i) {
        if( (elmsP[i].innerText || elmsP[i].textContent) === party) {
            if (elmsP[i].parentElement.style.visibility === "collapse") {
                elmsP[i].parentElement.style.visibility = "visible";
            } else {
                elmsP[i].parentElement.style.visibility = "collapse";
            }
        }
    }
}

function senClassFilter(c) {
    const elmsC = document.querySelectorAll('td.senClass');
    for (let i = 0; i < elmsC.length; ++i) {
        if( (elmsC[i].innerText || elmsC[i].textContent) === c) {
            if (elmsC[i].parentElement.style.visibility === "collapse") {
                elmsC[i].parentElement.style.visibility = "visible";
            } else {
                elmsC[i].parentElement.style.visibility = "collapse";
            }
        }
    }
}
