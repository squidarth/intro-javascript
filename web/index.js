
$(document).ready(function() {
    var $welcomeField = $("#welcome-field"); 
    
    $("#name-form").on('submit', function(e) {
      e.preventDefault(); 
      
      $welcomeField.text("Welcome, " + $(this).find("input").val())
    });
});
