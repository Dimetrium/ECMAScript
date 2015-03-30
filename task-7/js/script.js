$(document).ready(function () {
//  getData.getObjFromLocalStore();
if (getData.getObjFromLocalStore()){ getData.drawTable()}
//    getData.drawTable();
    $("#button").click(function () {
        var id = $('#input').val();
        var category = $('#category').val();
        getData.setToLocalStorage(id, category);
    });
});