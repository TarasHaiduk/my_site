

let purchases = {
    UZHANSKA_VALLEY: ["tour", "uzhanska_valley.html", "./img/Nevytskyi_castle.jpg", "Невицький Замок", "Подорож Ужанською Долиною", "Унікальний маршрут Закарпаттям: Ужанська долина, Дідо Дуб, П’ять Замків. Екскурсії в Ужгороді та Мукачеві", "1 квітня по 3 квітня"],
    individual: ["tour", "individual.html", "./img/Taras_indjpg.jpg", "індивідуальні тури", "Індивідуальні тури", "Опція доступна для невеликих компаній", ""],
    Maramorosy: ["tour", "hiking_maramorosy.html", "./img/maramorosy.jpg", "Марамороси", "Мармароси - Гуцульські альпи", "Мармароси - це дивовижне місце, не схоже на жодне інше в Українських Карпатах.", "1 квітня по 3 квітня"],
    SOUTH_SITE: ["tour", "Slovensko_Podkarpatska_rus.html", "./img/Tatry_slovensko_1.jpg", "Татри", "На південну сторону Карпат", "Цікаве екскурсійне поєднання Словаччини та Закарпаття. Ужгород, Кошіце, Татри, Термали в Словаччині та ще багато чого...", "7 квітня по 11 квітня"],
    Vododilnyi: ["tour", "hiking_vododilnyi.html", "./img/vododilnyi_1.jpg", "Вододільний Хребет г. Пікуй", "Вододільний Хребет г. Пікуй", "Верховинський Вододільний хребет знаходиться у внутрішній смузі Українських Карпат", ""],
    kosyno: ["tour", "koson.html", "./img/Kosyno-2.jpg", "Косино відпочинок та пам’ятки", "Косино відпочинок та пам’ятки", "Два термальні компелкси, Палац родини Етвеші та унікальні церкви. Це і не тільки чим нас здивує Косино", ""],

};

let all = '';
for (let key in purchases) {
    all += `<div class="${purchases[key][0]}"><a href="${purchases[key][1]}"> <img src="${purchases[key][2]}" alt="${purchases[key][3]}"> <h2>${purchases[key][4]}</h2><span>${purchases[key][6]} </span> <p>${purchases[key][5]}</p></a></div>`;
}
document.getElementById("advertisement").innerHTML = all;

