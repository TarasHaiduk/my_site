

let purchases_3 = {
    SOUTH_SITE: ["tour", "Slovensko_Podkarpatska_rus.html", "./img/Tatry_slovensko_1.jpg", "Татри", "На південну сторону Карпат", "Цікаве екскурсійне поєднання Словаччини та Закарпаття. Ужгород, Кошіце, Татри, Термали в Словаччині та ще багато чого...", "7 квітня по 11 квітня"],
    serednjo_hutsulskyi: ["tour", "serednjo-huculskyj-styl.html", "./img/kosivska-poljana-cerkva.jpg", "Церква в с.Косівська Поляна", "Середньо-гуцульський стиль дерев’яних церков.", "Нажаль не всі храми цього стилю збереглися...", ""],
    KRIZ_HORY: ["tour", "./central_transcarpathia.html", "./img/Synevyr.jpg", "Синевир", "Крізь гори, до сиру, замків та вина.", "Синевир з висоти пташиного польоту, бункери другої світової, вино, замки, сири та термальні води.", "14 квітня по 17 квітня"],
    prazka_spring: ["tour", "prague_blog.html", "./img/tank_at_fire.jpg", "Празька Весна", "Празька Весна та Закарпаття", "У ніч на 21 серпня 1968 року збройні сили СРСР, НДР, Польщі, Угорщини та Болгарії", ""],
    Svydovets: ["tour", "hiking_svydovets.html", "./img/svydovets-3.jpg", "Свидовець", "Свидовець - край прекрасних озер", "Третій за висотою хребет у Карпатах — має неймовірні озера та незайману природу.", ""],
    uzhock: ["tour", "Blog_uzhok.html", "./img/uzhok_12.jpg", "Ужоцький Перевал", "Ужок бальнеологічний курорт на кордоні", "Крайнє село Закарпаття, за однойменним перевалом знаходиться вже Галичина", ""],

};

let all_3 = '';
for (let key in purchases_3) {
    all_3 += `<div class="${purchases_3[key][0]}"><a href="${purchases_3[key][1]}"> <img src="${purchases_3[key][2]}" alt="${purchases_3[key][3]}"> <h2>${purchases_3[key][4]}</h2><span>${purchases_3[key][6]} </span> <p>${purchases_3[key][5]}</p></a></div>`;
}
document.getElementById("advertisement").innerHTML = all_3;

