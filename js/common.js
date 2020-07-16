$('.btn-package').on('click', function(e){
    e.preventDefault();
    var packageType = $(this).data('package');
    $('#form1_az input[name="plan"]').val(packageType);
    console.log(packageType);

  });
