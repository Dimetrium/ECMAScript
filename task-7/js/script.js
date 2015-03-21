$(document).ready(function () {
    var jsData = new getData();
    jsData.drawTable();

    $("#button").click(function () {
        var id = $('#input').val();
        var category = $('#category').val();

        jsData.setToLocalStorage(id, category);
        jsData.drawTable();
    });
})