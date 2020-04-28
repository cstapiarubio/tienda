$(document).ready(function() {
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

    $('.new').on('click',function(){
      console.log("hola");
      $("#name_category").remove(".hide");
    });


    $('#add_sub').on('click',function(){
      var r= $('<div class="sub"><label for="inputNamesub" class="trash">Nombre subcategoría</label>' +
      '<input type="text" class="form-control trash" id="inputNamesub" placeholder="Nombre de subcategoría"></input>'+ '<i class="far fa-times-circle remove trash"></i></div>');
      $("#sub").append(r);
  });

    
    $(document).on('click', '.sub',function(){
      $(this).remove();
    });
      
  });



    





