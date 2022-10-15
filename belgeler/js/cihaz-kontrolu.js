function cihazKontrolu() {
    if (window.screen.width < 992) {
        if (window.location.pathname.substring(0, 7) != "/mobil/") {
            if (window.location.pathname.includes("/pc/"))
                window.location.replace(window.location.pathname.replace("/pc/", "/mobil/"));
            else
                window.location.replace("/mobil/");
        }
    } else if (window.location.pathname.substring(0, 4) != "/pc/") {
        if (window.location.pathname.includes("/mobil/"))
            window.location.replace(window.location.pathname.replace("/mobil/", "/pc/"));
        else
            window.location.replace("/pc/");
    }
}
cihazKontrolu();
window.addEventListener('resize', function (event) {
    cihazKontrolu();
}, true);