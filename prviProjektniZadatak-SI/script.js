function hamburgerNavigacijaFja() {
    const navigacijaLinkovi = document.getElementById('navigacijaLinkovi');
    navigacijaLinkovi.style.display = navigacijaLinkovi.style.display === 'flex' ? 'none' : 'flex';
}
const hobiji = [
    { name: 'Planinarenje', image: 'slike/hobiji/planinarenje.jpg' },
    { name: 'Druženje sa prijateljima', image: 'slike/hobiji/druzenje.jpg' },
];
let trenutno = 0;
function apdejt() {
    const hobiImeElem = document.getElementById('hobiIme');
    const hobiSlikaElem = document.getElementById('hobiSlika');
    
    hobiImeElem.textContent = hobiji[trenutno].name;
    hobiSlikaElem.src = hobiji[trenutno].image;
}
function prosli() {
    trenutno = (trenutno - 1 + hobiji.length) % hobiji.length;
    apdejt();
}
function novi() {
    trenutno = (trenutno + 1) % hobiji.length;
    apdejt();
}
apdejt();
