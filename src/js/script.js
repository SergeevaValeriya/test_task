

$('.phone-field').inputmask("+7(999)999-9999");
    
    jQuery.validator.addMethod("checkMaskPhone", function(value, element) {
        return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value); 
    });
    
    var form = $('.form-request');
    
    form.validate();
    $.validator.addClassRules({
        'phone-field': {
            checkMaskPhone: true,
        }
    });
    form.submit(function(e){
        e.preventDefault();
        if (form.valid()) {
            alert('Форма отправлена');
        }
        return;
    });