const parties = {
    'R': true,
    'D': true,
    'I': true
};

const classes = {
    'Class_I': true,
    'Class_II': true,
    'Class_III': true
};

function toggleParty(party) {
    if (party === 'R') parties.R = !parties.R;
    if (party === 'D') parties.D = !parties.D;
    if (party === 'I') parties.I = !parties.I;
}

function toggleSenClass(c) {
    if (c === 'Class I') classes.Class_I = !classes.Class_I;
    if (c === 'Class II') classes.Class_II = !classes.Class_II;
    if (c === 'Class III') classes.Class_III = !classes.Class_III;
}

function senPartyFilter(party) {
    const elmsP = document.querySelectorAll('td.party');
    for (let i = 0; i < elmsP.length; ++i) {
        if( (elmsP[i].innerText || elmsP[i].textContent) === party) {
            if (elmsP[i].parentElement.style.visibility === "collapse") {
                toggleParty(party);
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
                toggleSenClass(c);
                elmsC[i].parentElement.style.visibility = "visible";
            } else {
                elmsC[i].parentElement.style.visibility = "collapse";
            }
        }
    }
}
