var getData = {
    root: 'http://jsonplaceholder.typicode.com',
    archive: {},
    localStorCurrKey: null,
    refreshCategoryFlag: null,
    drawTable: function () {
        var dynamicColumns,
            dynamicRows;

        if (0 == this.localStorCurrKey) {
            $.each(this.archive[0][0], function (key) {
                return dynamicColumns += "<th>" + key + "</th>";
            });
            $.each(this.archive[0], function () {
                dynamicRows += "<tr>";
                $.each(this, function (kay, value) {
                    dynamicRows += "<td>" + value + "</td>";
                });
                dynamicRows += "</tr>";
                return dynamicRows;
            });
        } else {
            $.each(this.archive[0], function (key) {
                return dynamicColumns += "<th>" + key + "</th>";
            });
            $.each(this.archive, function () {
                dynamicRows += "<tr>";
                $.each(this, function (kay, value) {
                    dynamicRows += "<td>" + value + "</td>";
                });
                dynamicRows += "</tr>";
                return dynamicRows;
            });
        }
        $("#table").html('<thead><tr>' + dynamicColumns + '</tr></thead>');
        $("#table").append('<tbody><tr>' + dynamicRows + '</tr></tbody>');
    },
    getObjFromLocalStore: function () {
        var keys = Object.keys(localStorage),
            key;

        if (true == this.refreshCategoryFlag) {
            this.archive = {};
        }
        if (null !== localStorage.key(0)) {
            this.localStorCurrKey = localStorage.key(0).replace(/\:.*/, '');
            for (var i = 0; key = keys[i]; i++) {
                this.archive[i] = JSON.parse(localStorage.getItem(key));
            }
            getData.drawTable();
        } else {
            return false;
        }
    },
    setToLocalStorage: function (id, category) {
        var root = this.root,
            _this = this;
        if (false == jQuery.isEmptyObject(localStorage[id + ':' + category])) {
            return $("#alert").html('<div class="alert alert-warning" role="alert">this id: ' + id + ' in list</div>');
        } else {
            $("#alert").html('');
        }
        $.ajax({
            url: root + '/' + category + '/' + id,
            method: 'GET'
        }).then(function (data) {
            var currentCategory = category,
                currentId = id;
            if (null !== localStorage.key(0)) {
                currentCategory = localStorage.key(0).replace(/.*\:/, '');
                currentId = localStorage.key(0).replace(/\:.*/, '')
            }
            if ('' == id) {
                id = 0;
                localStorage.clear();
            } else if (currentCategory !== category) {
                _this.refreshCategoryFlag = true;
                localStorage.clear();
            } else if (0 == currentId) {
                localStorage.clear();
            }
            localStorage[id + ':' + category] = JSON.stringify(data);
            getData.getObjFromLocalStore();
        });
    }
};