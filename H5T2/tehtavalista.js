$(document).ready(function() {
    $('#add').click(function(){
        var toAdd = $('input[name=task]').val();
        $('ul').append('<li>' + toAdd + '</li>');
        var input = document.getElementById("task");
        input.focus();
        input.value = ""; 
    });
    
});

$(document).on('click','li', function(){
    $(this).closest('li').toggleClass('strike').fadeOut('slow', function() { $(this).remove(); });
  });