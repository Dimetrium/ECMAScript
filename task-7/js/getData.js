// TODO: Раззобратся какого члена не отрисовывается при добавлении?
//       Капать в сторону порядка сетинга в локал сторедж...
//
// TODO: Сделать проверку на наличие поста 
//       и вывод сообщении о том что такой пост есть.

function getData() {
    var root = 'http://jsonplaceholder.typicode.com',
        archive = {},
        localStorCurrKey = null;
    // Draw Table from localStorage
    function drawTable() {
        var dynamicColumns,
            dynamicRows;

        // Get dynamic Columns and Rows
        if (0 == localStorCurrKey) {
            // Get Column Header
            $.each(archive[0][0], function (key) {
                return dynamicColumns += "<th>" + key + "</th>";
            });
            // Get Rows
            $.each(archive[0], function () {
                dynamicRows += "<tr>";
                $.each(this, function (kay, value) {
                    dynamicRows += "<td>" + value + "</td>";
                });
                dynamicRows += "</tr>";
                return dynamicRows;
            });
        } else {
            // Get Column Header
            $.each(archive[0], function (key) {
                console.log('1 else Get Column Header');
                return dynamicColumns += "<th>" + key + "</th>";
            });
            // Get Rows
            $.each(archive, function () {
                console.log('2 else Get Rows');
                dynamicRows += "<tr>";
                $.each(this, function (kay, value) {
                    dynamicRows += "<td>" + value + "</td>";
                });
                dynamicRows += "</tr>";
                return dynamicRows;
            });
        }
        console.log('start dr');
        // Draw Table Header
        $("#table").html('<thead><tr>' + dynamicColumns + '</tr></thead>');
        // Draw Table Rows
        $("#table").append('<tbody><tr>' + dynamicRows + '</tr></tbody>');
        console.log('end dr');

    };

    function getObjFromLocalStore() {
        var keys = Object.keys(localStorage),
            key;

        if (null !== localStorage.key(0)) {
            localStorCurrKey = localStorage.key(0).replace(/\:.*/, '');
            for (var i = 0; key = keys[i]; i++) {
                archive[i] = JSON.parse(localStorage.getItem(key));
            }
            return drawTable();
        } 
        else {
            console.log('LocalStorage is NULL');
            return false;
        }
    };

    // Get value from JSONplaceholder and set to LocalStorage
    this.setToLocalStorage = function (id, category) {
        $.ajax({
            url: root + '/' + category + '/' + id,
            method: 'GET'
        }).then(function (data) {
            var currentCategory = category,
                currentId = id;
            // Если уже есть записи в локалсторе, 
            // записываем их значения в переменные 
            // для последнующего исспользвоания.
            // Если нет - то переменные по умолчанию те,
            // что переданные с Input Fields
            if (null !== localStorage.key(0)) {
                currentCategory = localStorage.key(0).replace(/.*\:/, '');
                currentId = localStorage.key(0).replace(/\:.*/, '')
            }
            // Если пришла пустая строка, или если сменилась категория
            // делаем очитску локалстореджа
            if ('' == id) {
                id = 0;
                localStorage.clear();
            } else if (currentCategory !== category) {
                localStorage.clear();
            } else if (0 == currentId) {
                localStorage.clear();
            }
            // Парсим в локалстор...
            localStorage[id + ':' + category] = JSON.stringify(data);
            getObjFromLocalStore();
            console.log(' 0 Putting in localStorage');
        });
    };
    // Get Object from LocalStore

}
var jsData = new getData();