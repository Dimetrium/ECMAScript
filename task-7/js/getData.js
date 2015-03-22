// TODO: Сделать проверку на наличие поста 
//       и вывод сообщении о том что такой пост есть.

var getData = {
    root: 'http://jsonplaceholder.typicode.com',
    archive: {},
    localStorCurrKey: null,
    refresCategoryFlag: null,
    
    // Draw Table from localStorage
    drawTable: function () {
        var dynamicColumns,
            dynamicRows;

        // Get dynamic Columns and Rows
        if (0 == this.localStorCurrKey) {
            // Get Column Header
            $.each(this.archive[0][0], function (key) {
                return dynamicColumns += "<th>" + key + "</th>";
            });
            // Get Rows
            $.each(this.archive[0], function () {
                dynamicRows += "<tr>";
                $.each(this, function (kay, value) {
                    dynamicRows += "<td>" + value + "</td>";
                });
                dynamicRows += "</tr>";
                return dynamicRows;
            });
        } else {
            // Get Column Header
            $.each(this.archive[0], function (key) {
                return dynamicColumns += "<th>" + key + "</th>";
            });
            // Get Rows
            $.each(this.archive, function () {
                dynamicRows += "<tr>";
                $.each(this, function (kay, value) {
                    dynamicRows += "<td>" + value + "</td>";
                });
                dynamicRows += "</tr>";
                return dynamicRows;
            });
        }
        // Draw Table Header

        $("#table").html('<thead><tr>' + dynamicColumns + '</tr></thead>');
        // Draw Table Rows
        $("#table").append('<tbody><tr>' + dynamicRows + '</tr></tbody>');


    },
    // Get Object from LocalStore
    getObjFromLocalStore: function () {
        var keys = Object.keys(localStorage),
            key;

        if (1 == this.refresCategoryFlag) {
            this.archive = {};
        }
        if (null !== localStorage.key(0)) {
            this.localStorCurrKey = localStorage.key(0).replace(/\:.*/, '');
            for (var i = 0; key = keys[i]; i++) {
                this.archive[i] = JSON.parse(localStorage.getItem(key));
            }console.log('getObj1 true');
            getData.drawTable();
        } else {
            console.log('getObj false');
            return false;
        }
    },
    // Get value from JSONplaceholder and set to LocalStorage
    setToLocalStorage: function (id, category) {
            var root = this.root;
            $.ajax({
                url: root + '/' + category + '/' + id,
                method: 'GET'
            }).then(function (data) {
                var currentCategory = category,
                    currentId = id,
                    _this = this;
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
                    this.refresCategoryFlag = 1;
                    localStorage.clear();
                } else if (0 == currentId) {
                    localStorage.clear();
                }
                // Парсим в локалстор...
                localStorage[id + ':' + category] = JSON.stringify(data);
                getData.getObjFromLocalStore();
                console.log(' 0 Putting in localStorage');
            });
        }
};