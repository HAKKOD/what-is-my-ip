function cihazKontrolu() {
    if (window.screen.width < 992) {
        if (window.location.pathname.substring(0, 7) != "/mobil/") {
            window.location.replace(window.location.pathname.replace("/pc/", "/mobil/"));
        }
    } else if (window.location.pathname.substring(0, 4) != "/pc/") {
        window.location.replace(window.location.pathname.replace("/mobil/", "/pc/"));
    }
}
cihazKontrolu();
window.addEventListener('resize', function (event) {
    cihazKontrolu();
}, true);