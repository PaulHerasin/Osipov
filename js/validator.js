
      $(document).ready(function(){

        function validateForm(){
          var inputName = $(this).attr('name');
          var val = $(this).val();

           switch(inputName)
           {

                 // Проверка поля "Имя"
                 case 'name':
                    // var rv_name = /^[а-яА-ЯёЁa-zA-Z0-9]+$/; // используем регулярное выражение

                    if(val.length > 2 && val != '' )
                    {
                       $(this).removeClass('error');
                      $(this).addClass('not_error');
                    }
                    else
                    {
                      $(this).removeClass('not_error').addClass('error');
                    }
                break;

               // Проверка phone
               case 'phone':
                   if(val != '' && val.length >= 10)
                   {
                     $(this).removeClass('error');
                      $(this).addClass('not_error');
                   }
                   else
                   {
                      $(this).removeClass('not_error');
                       $(this).addClass('error');
                   }
               break;

           } // end switch(...)
        }
         // Устанавливаем обработчик потери фокуса для всех полей ввода текста
           $('input.name, input.phone').unbind().blur(validateForm); // end blur()
           $('input.name, input.phone').keypress(validateForm); // end blur()


      // Теперь отправим наше письмо

      }); // end script
