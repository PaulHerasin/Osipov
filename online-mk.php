<?
include 'core.php';



define('TITLE', '[Осипов - 3 марта 2019]');
define('START_PAGE', 'https://osipov.biz.ua/');
define('START_PAGE2', 'http://osipov.biz.ua/');
define('SUCCESS_1', START_PAGE . 'success/');
define('SUCCESS_1', START_PAGE2 . 'success/');


/* Этот блок не трогать */
$request_uri = $_SERVER['REQUEST_URI'];
$ref = preg_replace('@\?.*$@', '', $_SERVER['HTTP_REFERER']);

if (preg_match('@\?(.*)$@', $_SERVER['HTTP_REFERER'], $get))
{
    parse_str($get[1], $get);

}
/*****************************************************************/



if ($_SERVER['REQUEST_METHOD'] === 'GET'):
	header('Content-Type: application/javascript');

    switch ($ref)
    {
        case START_PAGE: ?>
            (function($) {
                $('form').submit(false);

                jQuery( document ).ajaxComplete(function( event, request, settings ) {
                    if (request.readyState === 4 && settings.url.indexOf('export.php') !== -1) {
                        $.post('<?= $request_uri ?>', settings.data, function(response){
                            if (response && response.status === 'success') {
                                window.location.href = response.url;
                            }
                        }, 'json');
                    }
                });
            })(jQuery);
        <? break;

		case START_PAGE2: ?>
            (function($) {
                $('form').submit(false);

                jQuery( document ).ajaxComplete(function( event, request, settings ) {
                    if (request.readyState === 4 && settings.url.indexOf('export.php') !== -1) {
                        $.post('<?= $request_uri ?>', settings.data, function(response){
                            if (response && response.status === 'success') {
                                window.location.href = response.url;
                            }
                        }, 'json');
                    }
                });
            })(jQuery);
        <? break;

		case SUCCESS_1: ?>
            (function($) {

                $('form').submit(false);

                /* Простая передача параметров

                jQuery( function(){
                    $.post('<?= $request_uri ?>', 'li=<?= $get['li'] ?>');
                } ); */

                /* Передача параметров и редирект */
                jQuery( document ).ajaxComplete(function( event, request, settings ) {
                    if (request.readyState === 4 && settings.url.indexOf('mh/export.php') !== -1) {

                        $.post('<?= $request_uri ?>', settings.data+'&li=<?= $get['li'] ?>', function(response){
                            if (response && response.status === 'success') {
                                window.location.href = response.url;
                            }
                        }, 'json');
                    }
                });
            })(jQuery);
        <? break;

		case LIVE: ?>
            (function($) {

                $('form').submit(false);

                /* Простая передача параметров */

                jQuery( function(){
                    $.post('<?= $request_uri ?>', 'li=<?= $get['li'] ?>');
                } );

                /* Передача параметров и редирект */
                jQuery( document ).ajaxComplete(function( event, request, settings ) {
                    if (request.readyState === 4 && settings.url.indexOf('mh/export.php') !== -1) {

                        $.post('<?= $request_uri ?>', settings.data+'&li=<?= $get['li'] ?>', function(response){
                            if (response && response.status === 'success') {
                                window.open('https://cryptominds.org/trading-pro/online-mk/');
                            }
                        }, 'json');
                    }
                });
            })(jQuery);
        <? break;

		case LIVE2: ?>
            (function($) {

                $('form').submit(false);

                /* Простая передача параметров */

                jQuery( function(){
                    $.post('<?= $request_uri ?>', 'li=<?= $get['li'] ?>');
                } );

                /* Передача параметров и редирект */
                jQuery( document ).ajaxComplete(function( event, request, settings ) {
                    if (request.readyState === 4 && settings.url.indexOf('mh/export.php') !== -1) {

                        $.post('<?= $request_uri ?>', settings.data+'&li=<?= $get['li'] ?>', function(response){
                            if (response && response.status === 'success') {
                                window.open('https://cryptominds.org/trading-pro/online-mk/');
                            }
                        }, 'json');
                    }
                });
            })(jQuery);
        <? break;

        case PAY_SUCCESS:
            if (isset($get['li']))
            {
                //16419607 - курс, оплачен
				send_to_google(GOOGLE_FORM_ACTION3);
	            pay_callback2($get['li'], 19500286, false);
	            send_to_getresponse('6WUiJ', $get['li']);
            }

            break;
    } ?>
<? elseif($_SERVER['REQUEST_METHOD'] === 'POST'):

    file_put_contents( $_SERVER['DOCUMENT_ROOT'] . '/post.txt', date('H:i:s d-m-Y') . ': '.json_encode($_POST) . "\r\n", FILE_APPEND);

	if (isset($_POST['name'],$_POST['phone'], $_POST['email']))
	{
		switch($ref) {
			case START_PAGE:


				$amo_leadId = send_to_amo(22389742, true);
				//send_to_getresponse('6fGi7', $amo_leadId);

				json_redirect(SUCCESS_1 . '?li='.$amo_leadId);
				break;

			case START_PAGE2:


				$amo_leadId = send_to_amo(22389742, true);
				//send_to_getresponse('6fGi7', $amo_leadId);

				json_redirect(SUCCESS_1 . '?li='.$amo_leadId);
				break;

			case SUCCESS_1:
				send_to_google(GOOGLE_FORM_ACTION2);
				$amo_leadId = send_to_amo(19501318, false);

				fondy_payment_process(PAY_SUCCESS . '?li='.$_POST['li']);
				break;


		}
	}
	else
    {
	    switch($ref)
        {

        }
    }
endif;
