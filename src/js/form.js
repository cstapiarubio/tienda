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

    /*$('option').on('select',function(){
      console.log("hola");
      $("#name_category").remove(".hide");
      $("#name_category").add(".show");
    });

      $('select').change(function() {
          if ($(this).val(0)) {
              $('.hide').removeClass("hide");
          }
      });

      $(document).on('click', '.hide',function(){
        console.log("hola");
        $(this).parent().hide();
      });

      $('.new').on('click',function(){
        $('.hide').removeClass("hide");
    });

    $("#new").prop("selectedIndex", 0).on('click',function(){
      $('.hide').removeClass("hide");
  });*/

  $(('#new option')[0]).on('click',function(){
    $('.hide').removeClass("hide");
});


    $('#add_sub').on('click',function(){
      var r= $('<div class="sub"><label for="inputNamesub" class="trash">Nombre subcategoría</label>' +
      '<input type="text" class="form-control trash" id="inputNamesub" placeholder="Nombre de subcategoría"></input>'+ '<i class="far fa-times-circle remove trash"></i></div>');
      $("#sub").append(r);
  });

    
    $(document).on('click', '.remove',function(){
      $(this).parent().remove();
    });
      
  });



    





