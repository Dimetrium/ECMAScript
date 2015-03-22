$(document).ready(function () {

            //getObjFromLocalStore();

    $("#button").click(function () {
        var id = $('#input').val();
        var category = $('#category').val();
        jsData.setToLocalStorage(id, category);
//            jsData.getObjFromLocalStore();

    });
});