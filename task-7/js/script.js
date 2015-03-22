$(document).ready(function () {

    getData.getObjFromLocalStore();
//    getData.drawTable();

    $("#button").click(function () {
        var id = $('#input').val();
        var category = $('#category').val();
        getData.setToLocalStorage(id, category);
//            jsData.getObjFromLocalStore();

    });
});