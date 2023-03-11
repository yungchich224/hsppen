$('#HeadBtnBars').click(function(){
    $('#HeaderNav').slideDown(1000);
    $(this).hide();
})


$('#HeaderBtnXmark').click(function(){
    $('#HeaderNav').slideUp(5000);
    $('#HeadBtnBars').show();
})