$(function(){
	$('.hl-form-contact').on('click','.hl-contact--button',function(e) {
          e.preventDefault();
          $.post('email_process.php',$(".hl-form-contact").serialize(), function(data) {
            alert(data); 
            $("#form")[0].reset();
             $(".hl-input__field").removeClass("hl-input--filled");

          })
      });
});