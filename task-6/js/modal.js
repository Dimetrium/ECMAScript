$(document).ready(function () {
  $('#myModal').click(function (event) {
    event.preventDefault();
    $('#blockscreen').fadeIn(300,
      function () {
        $('#modal-window')
          .css('display', 'block')
          .animate({
            'opacity': '1',
            'top': '0px'
          }, 600);
      });
  });


  $('#btn-close, #blockscreen').click(function () {
    $('#modal-window')
      .animate({
          'opacity': '0',
          'top': '-270'
        }, 600, 
        function () {
          $(this).css('display', 'none');
          $('#blockscreen').fadeOut(300);
        });
  });
});