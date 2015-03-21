window.onload = function() {
    var element = document.getElementById('uList');

    function bubbling() {
        var target = event.target || event.srcElement;
        console.log(target.innerHTML);
    }
    return element.addEventListener('click', bubbling, true);
};