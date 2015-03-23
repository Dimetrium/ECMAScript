$(document).ready(function () {
    getData.getObjFromLocalStore();
    $("#button").click(function () {
        var id = $('#input').val();
        var category = $('#category').val();
        getData.setToLocalStorage(id, category);
    });
});