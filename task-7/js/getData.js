// TODO: Раззобратся какого члена не отрисовывается при добавлении?
//       Капать в сторону порядка сетинга в локал сторедж...
//
// TODO: Сделать проверку на наличие поста 
//       и вывод сообщении о том что такой пост есть.

function getData() {
    var root = 'http://jsonplaceholder.typicode.com';
    var archive = {};
    // Get value from JSONplaceholder and set to LocalStorage
    this.setToLocalStorage = function (id, category) {
        $.ajax({
            url: root + '/' + category + '/' + id,
            method: 'GET'
        }).then(function (data) {
            var currentCategory = category;
            var currentId = id;

            function putToLocalStore() {
                localStorage[id + ':' + category] = JSON.stringify(data);
            }
            $.each(data, function () {
                if (null !== localStorage.key(0)) {
                    currentCategory = localStorage.key(0).replace(/.*\:/, '');
                    currentId = localStorage.key(0).replace(/\:.*/, '')
                }
                if ('' == id) {
                    id = 0;
                    localStorage.clear();
                } else if (currentCategory !== category) {
                    localStorage.clear();
                } else if (0 == currentId) {
                    localStorage.clear();
                }
                putToLocalStore();
            });
        });
        this.drawTable();
    };
    // Get Object from LocalStore
    this.getObjFromLocalStore = function () {
        var keys = Object.keys(localStorage),
            key;

        for (var i = 0; key = keys[i]; i++) {
            archive[i] = JSON.parse(localStorage.getItem(key));
        }
    };
    // Draw Table ftom localStorage
    this.drawTable = function () {
        this.getObjFromLocalStore();
        var dynamicColumns,
            dynamicRows,
            localStorCurrKey = localStorage.key(0).replace(/\:.*/, '');
        // Get dynamic Columns and Rows
        if (0 == localStorCurrKey) {
            // Get Column Header
            $.each(archive[0][0], function (key) {
                dynamicColumns += "<th>" + key + "</th>";
            });
            // Get Rows
            $.each(archive[0], function () {
                dynamicRows += "<tr>";
                $.each(this, function (kay, value) {
                    dynamicRows += "<td>" + value + "</td>";
                });
                dynamicRows += "</tr>";
            });
        } else {
            // Get Column Header
            $.each(archive[0], function (key) {
                dynamicColumns += "<th>" + key + "</th>";
            });
            // Get Rows
            $.each(archive, function () {
                dynamicRows += "<tr>";
                $.each(this, function (kay, value) {
                    dynamicRows += "<td>" + value + "</td>";
                });
                dynamicRows += "</tr>";
            });
        }
        // Draw Table Header
        $("#table").html('<thead><tr>' + dynamicColumns + '</tr></thead>');
        // Draw Table Rows
        $("#table").append('<tbody><tr>' + dynamicRows + '</tr></tbody>');
    };
}