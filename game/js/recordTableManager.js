var recordTableManager = {
    saveRecord : function (money){
    if(localStorage["records"] === undefined || localStorage["records"] === null){
        localStorage["records"] = JSON.stringify([]);
    }
    const nickname = saveUserName.read();
    const records = JSON.parse(localStorage["records"]);

    let checkIsRecord = true;
    for (let el of records) {
        if(el.nickname === nickname){
            checkIsRecord = false;
            if(el.level < money){
                el.level = money;
            }
        }
    }

    if(checkIsRecord) {
        records.push({nickname: nickname, level: money});
    }

    localStorage["records"] = JSON.stringify(records);
},

    getRecords : function (){
    if (localStorage["records"] === undefined || localStorage["records"] === null) {
        return [];
    }
    return JSON.parse(localStorage["records"]);
},
    DrawRecordTable : function (){
    let array = recordTableManager.getRecords();
    console.log(array);
    const modalTable = document.getElementById("modal-table");
    modalTable.style.display = "block";
    const recordsTable = document.getElementById("records-table");
    recordsTable.innerHTML = "<tr style='background: antiquewhite'><td>Имя</td><td>Монеты</td></tr>";
    let resultsStr = "";
    for (let el of array) {
        resultsStr += `<tr><td>${el.nickname}</td><td>${el.level}</td></tr>`;
    }
    recordsTable.innerHTML += resultsStr;
},
    clearRecordTable : function (){
        localStorage.clear();
    }
}

let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
});
