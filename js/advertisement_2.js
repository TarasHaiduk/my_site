

let purchases_2 = {
    KRIZ_HORY: ["tour", "./central_transcarpathia.html", "./img/Synevyr.jpg", "Синевир", "Крізь гори, до сиру, замків та вина.", "Синевир з висоти пташиного польоту, бункери другої світової, вино, замки, сири та термальні води.", "14 квітня по 17 квітня"],
    lemky: ["tour", "lemky_blog.html", "./img/lemky_map.jpg", "Лемки", "ЧИ УСІ ЛЕМКИ «ЛЕМ-КАЛИ»?", "Усім відомий факт, що назва «лемки» утворена від маленької частки «лем».", ""],
    UZHANSKA_VALLEY: ["tour", "uzhanska_valley.html", "./img/Nevytskyi_castle.jpg", "Невицький Замок", "Подорож Ужанською Долиною", "Унікальний маршрут Закарпаттям: Ужанська долина, Дідо Дуб, П’ять Замків. Екскурсії в Ужгороді та Мукачеві", "1 квітня по 3 квітня"],
    Gorgany: ["tour", "hiking_gorgany.html", "./img/gorgany.jpg", "Похід Горганами", "ҐОРҐАНИ", "Ґорґани, як синонім — «ґорґотати», «скреґотіти», «ґорґотіти» , «скрекотати». Тобто,коли масивні брили каменю...", ""],
    kosyno: ["tour", "koson.html", "./img/Kosyno-2.jpg", "Косино відпочинок та пам’ятки", "Косино відпочинок та пам’ятки", "Два термальні компелкси, Палац родини Етвеші та унікальні церкви. Це і не тільки чим нас здивує Косино", ""],
    masaryk_kolony: ["tour", "masaryk_kolony.html", "./img/Masaryk_Colony_slov_dim.jpg", "Масарикова колонія", "Масарикова колонія", "Унікальний функціоналістичний квартал Їндржиха Фрайвальда в містечку Хуст.", ""],

};

let all_2 = '';
for (let key in purchases_2) {
    all_2 += `<div class="${purchases_2[key][0]}"><a href="${purchases_2[key][1]}"> <img src="${purchases_2[key][2]}" alt="${purchases_2[key][3]}"> <h2>${purchases_2[key][4]}</h2><span>${purchases_2[key][6]} </span> <p>${purchases_2[key][5]}</p></a></div>`;
}
document.getElementById("advertisement").innerHTML = all_2;







