let purchases_4 = {
    MODERNIZM_UZHHOROD: ["tour", "architects_corporative.html", "./img/Uzhhorod_modernizm.jpg", "Ужгородський Модернізм", "Мандрівка модернізмом.", "Пропозиція унікальної мандрівки до світу модернізму", "Корпоративна подорож"],
    tustan: ["tour", "tustan.html", "./img/tustan.jpg", "Тустань", "Тустань", "Тустань наскельна фортеця посеред гір", ""],
    Maramorosy: ["tour", "hiking_maramorosy.html", "./img/maramorosy.jpg", "Марамороси", "Мармароси - Гуцульські альпи", "Мармароси - це дивовижне місце, не схоже на жодне інше в Українських Карпатах.", "1 квітня по 3 квітня"],
    scancen: ["tour", "Scancen_place.html", "./img/scancen-2.jpg", "Музей народної Архітектури в Ужгороді", '"Старе село". Закарпатський музей народної архітектури та побуту', "Тут розміщено понад 30 унікальних пам’яток народної архітектури кінця XVIII - початку XIX ст.", ""],
    KRIZ_HORY: ["tour", "./central_transcarpathia.html", "./img/Synevyr.jpg", "Синевир", "Крізь гори, до сиру, замків та вина.", "Синевир з висоти пташиного польоту, бункери другої світової, вино, замки, сири та термальні води.", "14 квітня по 17 квітня"],
    drohobych: ["tour", "drohobych.html", "./img/drohobych.jpg", "Дрогобич", "ДРОГОБИЧ", "Прекрасне місто та його візуальны образи", ""],

};

let all_4 = '';
for (let key in purchases_4) {
    all_4 += `<div class="${purchases_4[key][0]}"><a href="${purchases_4[key][1]}"> <img src="${purchases_4[key][2]}" alt="${purchases_4[key][3]}"> <h2>${purchases_4[key][4]}</h2><span>${purchases_4[key][6]} </span> <p>${purchases_4[key][5]}</p></a></div>`;
}
document.getElementById("advertisement").innerHTML = all_4;

