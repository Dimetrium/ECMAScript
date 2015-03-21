window.onload = function () {
  $('#uList').bind('click', function () {
    var target = event.target || event.srcElement;
    console.log(target.innerHTML);
  });
}