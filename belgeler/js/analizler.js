fetch('https://what-is-my-ip.hakkod.workers.dev/')
    .then((yanit) => yanit.json())
    .then(
        (veriler) => {
            document.getElementById("cloudflare-ip").innerText = veriler.ip;
            document.getElementById("cloudflare-asn").innerText = veriler.asn;
            document.getElementById("cloudflare-isp").innerText = veriler.isp;
            document.getElementById("cloudflare-country").innerText = veriler.country;
            document.getElementById("cloudflare-city").innerText = veriler.city;
            document.getElementById("cloudflare-region").innerText = veriler.region;
            document.getElementById("cloudflare-longitude").innerText = veriler.longitude;
            document.getElementById("cloudflare-latitude").innerText = veriler.latitude;
            document.getElementById("cloudflare-postal-code").innerText = veriler.postalCode;
            document.getElementById("cloudflare-timezone").innerText = veriler.timezone;
            document.getElementById("cloudflare-user-agent").innerText = veriler.userAgent;
        }
    );

fetch('http://ip-api.com/json/?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query')
    .then(
        (yanit) => yanit.text()
    )
    .then(
        (veriler) => {
            verilerJson = JSON.parse(veriler);
            document.getElementById("ip-api-as").innerText = verilerJson.as;
            document.getElementById("ip-api-asname").innerText = verilerJson.asname;
            document.getElementById("ip-api-city").innerText = verilerJson.city;
            document.getElementById("ip-api-continent").innerText = verilerJson.continent;
            document.getElementById("ip-api-continent-code").innerText = verilerJson.continentCode;
            document.getElementById("ip-api-country").innerText = verilerJson.country;
            document.getElementById("ip-api-country-code").innerText = verilerJson.countryCode;
            document.getElementById("ip-api-currency").innerText = verilerJson.currency;
            document.getElementById("ip-api-district").innerText = verilerJson.district;
            document.getElementById("ip-api-hosting").innerText = verilerJson.hosting;
            document.getElementById("ip-api-isp").innerText = verilerJson.isp;
            document.getElementById("ip-api-lat").innerText = verilerJson.lat;
            document.getElementById("ip-api-lon").innerText = verilerJson.lon;
            document.getElementById("ip-api-mobile").innerText = verilerJson.mobile;
            document.getElementById("ip-api-offset").innerText = verilerJson.offset;
            document.getElementById("ip-api-org").innerText = verilerJson.org;
            document.getElementById("ip-api-proxy").innerText = verilerJson.proxy;
            document.getElementById("ip-api-query").innerText = verilerJson.query;
            document.getElementById("ip-api-region").innerText = verilerJson.region;
            document.getElementById("ip-api-region-name").innerText = verilerJson.regionName;
            document.getElementById("ip-api-reverse").innerText = verilerJson.reverse;
            document.getElementById("ip-api-status").innerText = verilerJson.status;
            document.getElementById("ip-api-timezone").innerText = verilerJson.timezone;
            document.getElementById("ip-api-zip").innerText = verilerJson.zip;
        }
    );

function cerezDestegiKontrolu() {
    var cookieEnabled = navigator.cookieEnabled;
    if (!cookieEnabled) {
        document.cookie = "testcookie";
        cookieEnabled = document.cookie.indexOf("testcookie") != -1;
    }
    return "Available" || "Not Available";
}

document.getElementById("javascript-app-name").innerText = navigator.appName;
document.getElementById("javascript-app-code-name").innerText = navigator.appCodeName;
document.getElementById("javascript-user-agent").innerText = navigator.userAgent;
document.getElementById("javascript-app-version").innerText = navigator.appVersion;
document.getElementById("javascript-operating-system").innerText = navigator.platform;
document.getElementById("javascript-screen-colours").innerText = `${Math.pow(2, window.screen.colorDepth)} colours<br>(${window.screen.colorDepth} bits)`;
document.getElementById("javascript-screen-resolution-available").innerText = `${window.screen.width}x${window.screen.height}`;
document.getElementById("javascript-screen-resolution-used").innerText = `${window.screen.width}x${window.screen.height}`;
document.getElementById("javascript-cookie-support").innerText = cerezDestegiKontrolu();
document.getElementById("javascript-encoding").innerText = document.characterSet;
document.getElementById("javascript-browser-window-size-available").innerText = `${window.outerWidth}x${window.outerHeight}`;
document.getElementById("javascript-browser-window-size-used").innerText = `${window.innerWidth}x${window.innerHeight}`;
document.getElementById("javascript-product").innerText = window.navigator.product;
document.getElementById("javascript-os-cpu").innerText = window.navigator.oscpu;
document.getElementById("javascript-product-sub").innerText = window.navigator.productSub;
document.getElementById("javascript-build-id").innerText = window.navigator.buildID;
document.getElementById("javascript-hardware-concurrency").innerText = window.navigator.hardwareConcurrency;
document.getElementById("javascript-language").innerText = window.navigator.language;
document.getElementById("javascript-languages").innerText = window.navigator.languages;