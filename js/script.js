$('.accordion-item .heading').on('click', function(e) {
    e.preventDefault();

    // Add the correct active class
    if($(this).closest('.accordion-item').hasClass('active')) {
        // Remove active classes
        $('.accordion-item').removeClass('active');
    } else {
        // Remove active classes
        $('.accordion-item').removeClass('active');

        // Add the active class
        $(this).closest('.accordion-item').addClass('active');
    }

    // Show the content
    var $content = $(this).next();
    $content.slideToggle(100);
    $('.accordion-item .content').not($content).slideUp('fast');
});



$('.form__next').on('click', function(e) {
    var firstName ="", lastName="", email ="";
    var firstName2 ="", lastName2="", email2 ="";
    firstName = $( "#f_name" ).val();
    lastName = $( "#l_name" ).val();
    email = $( "#email" ).val();

    firstName2 = $( "#first_name" ).val();
    lastName2 = $( "#last_name" ).val();
    email2 = $( "#email2" ).val();


   if ($('#check').is(":checked"))
{
    checkbox = true;
  // it is checked
}else{
    checkbox = false;
}

if ($('#check2').is(":checked"))
{
    checkbox2 = true;
  // it is checked
}else{
    checkbox2 = false;
}
    if($.trim(firstName) != "" && $.trim(lastName) != "" && $.trim(email) != "" && checkbox == true){
        $('.form__check').addClass('u-notactive');
        $('.form__next').addClass('u-notactive');
        $('.form__phone').addClass('active');
        $('.form__submit').addClass('active');
        $('.form__stepone').removeClass('u-primary');
        $('.form__steptwo').addClass('u-primary');
    } else {
        if($.trim(firstName2) != "" && $.trim(lastName2) != "" && $.trim(email2) != "" && checkbox2 == true){
            $('.form__check').addClass('u-notactive');
            $('.form__next').addClass('u-notactive');
            $('.form__phone').addClass('active');
            $('.form__submit').addClass('active');
            $('.form__stepone').removeClass('u-primary');
            $('.form__steptwo').addClass('u-primary');
        }
    }
    
});

$('.form__submit').on('click', function(e) {
    
    var firstName ="", lastName="", email ="";
    var firstName2 ="", lastName2="", email2 ="";
    firstName = $( "#f_name" ).val();
    lastName = $( "#l_name" ).val();
    email = $( "#email" ).val();

    firstName2 = $( "#first_name" ).val();
    lastName2 = $( "#last_name" ).val();
    email2 = $( "#email2" ).val();
    phone = $( "#phone" ).val();
    phone2 = $( "#phone2" ).val();

    if($.trim(firstName) != "" && $.trim(lastName) != "" && $.trim(email) != "" && $.trim(phone) != ""){
        e.preventDefault();
        alert('Form submited');
    } else {
        if($.trim(firstName2) != "" && $.trim(lastName2) != "" && $.trim(email2) != "" && $.trim(phone2) != ""){
            e.preventDefault();
            alert('Form submited');
        }
    }
});

 $("#phone").intlTelInput({
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
   });

   $("#phone2").intlTelInput({
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
   });