<?php
	$subject = '=?UTF-8?B?'.base64_encode('Заказ семинара Тони Роббинса').'?=';
	$toemail = "alexandr.voloshanenko@gmail.com";
	$message = "<p align='center'><strong>Спасибо, Ваше сообщение отправлено.</strong><br /> Мы свяжемся с вами в ближайшее время.<p>";

	$event = $_POST['eventChanger'];
	if (isset ($_POST['name'])) {$name = stripcslashes($_POST['name']); if ($name == '') { $name = 'emptyname'.mktime().''; }} else {
    $name = 'emptyname'.mktime().'';
  }
	if (isset ($_POST['email'])) {$email = stripcslashes($_POST['email']); if ($email == '') {$email = 'empty'.mktime().'@email.com';}} else {
    $email = 'empty'.mktime().'@email.com';
  }
	if (isset ($_POST['phone'])) {$phone = stripcslashes($_POST['phone']); if ($phone == '') {unset($phone);}}
	if (isset ($_POST['promoCode'])) {$promoCode = stripcslashes($_POST['promoCode']); if ($promoCode == '') {unset($promoCode);}}


	if (isset ($name) && isset ($email) && isset ($phone)) {



	$source = $_POST['source'];
	$channel = $_POST['channel'];
	$campaign = $_POST['campaign'];
	$keyword = $_POST['keyword'];

    $headers = "From: \"Osipov zakaz\" \r\n";
	$headers .= "Content-type: text/plain; charset=UTF-8\r\n";
	$headers .= "Mime-Version: 1.0\r\n";
	$headers .= "X-Mailer: My Send E-mail\r\n";

	$contactMessage =
"Имя отправителя: $name
E-Mail: $email
Телефон: $phone
Пакет: $event

Промокод: $promoCode
Источник: $source
Канал: $channel
Кампания: $campaign
Ключевое слово: $keyword
";


	//mail($toemail, $subject, $contactMessage, $headers);
	//echo($message);
	//header( 'Refresh: 0; url=http://upwsingapore.org/thankyou.html' );

}
	else {
		header( 'Refresh: 0; url=http://osipov.biz.ua');
}
?>
<?php
// формируем запись в клиентскую таблицу google
$url = "https://docs.google.com/forms/d/e/1FAIpQLScP3RQ_WqUIdF2o382M4fx5UFN2tdTOswBdnP7EPNu_J8fGxQ/formResponse";
$post_data = array (
"entry.1435021795"  => $_POST['eventChanger'],
"entry.582451397"  => $_POST['name'],
"entry.1115970428" => $_POST['phone'],
"entry.1606882133" => $_POST['email'],
"entry.654114586"  => $_POST['$promoCode'],
"entry.1959162300" => $_POST['source'],
"entry.966882931" => $_POST['channel'],
"entry.1510179201" => $_POST['campaign'],
"entry.2059391364" => $_POST['keyword'],
"draftResponse" => "[null,null,&quot;3051969587001649090&quot;]",
"pageHistory" => "0",
"fbzx" => "3051969587001649090"
);

// направляем пользователя после отправки формы
$link='http://osipov.biz.ua/thankyou.html';

// с помощью CURL заносим данные в клиентскую таблицу google
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// указываем, что у нас POST запрос
curl_setopt($ch, CURLOPT_POST, 1);
// добавляем переменные
curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
//заполняем таблицу google
$output = curl_exec($ch);


curl_close($ch);
//перенаправляем браузер пользователя на апсел
header('Location: '.$link);
?>
