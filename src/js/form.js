/*$(document).ready(function() {
    $('#minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 0 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('#plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  });*/

  $(function(){
    $('#add_sub').on('click',function(){
        var r= $('<label for="inputNamesub">Nombre subcategoría</label>' +
        '<input type="text" class="form-control" id="inputNamesub" placeholder="Nombre de subcategoría"></input>');
        $("#sub").append(r);
    });
});
