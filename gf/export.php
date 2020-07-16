<?php
if (!$_POST) die('приветик'); // если глобальный массив POST не передан значит приветик
// иначе продолжаем

$response = array(); // сюда будем писать то что будем возвращать скрипту

$name = isset($_POST['name']) ? $_POST['name'] : false; // сунем каждое поле в отдельную переменную
$email = isset($_POST['email']) ? $_POST['email'] : false;
$phone = $_POST['phone'];
$plan = $_POST['plan'];
$utm_source = $_POST['utm_source'];
$utm_medium = $_POST['utm_medium'];
$utm_campaign = $_POST['utm_campaign'];
$utm_term = $_POST['utm_term'];

// сюда можно положить всякие проверки полей и капчу например
if (!$name || !$email) { // в моем случае надо чтобы первые 2 поля не были пустыми
    $response['ok'] = 0; // пишем что все плохо
    $response['message'] = '<p class="error">Не заполнены первые два поля. Их всего два, ну ты чо? =)</p>'; // пишем ответ
    die(json_encode($response)); //выводим массив в json формате и умираем
}

// теперь подготовим данные для отправки в гугл форму
$url = 'https://docs.google.com/forms/d/e/1FAIpQLSfjFEII6UVPs10DBDaz6CG2kb4F9LR81mGxVRrHDOMyv1l5RA/formResponse'; // куда слать, это атрибут action у гугл формы
$data = array(); // массив для отправки в гугл форм
$data['entry.1700610002'] = $name;
$data['entry.649830599'] = $email;
$data['entry.829259051'] = $phone;
$data['entry.1705417605'] = $plan;
$data['entry.272531728'] = $utm_source;
$data['entry.1593293502'] = $utm_medium;
$data['entry.1996271560'] = $utm_campaign;
$data['entry.286039193'] = $utm_term;


$data = http_build_query($data); // теперь сериализуем массив данных в строку для отправки


$options = array( // задаем параметры запроса
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => $data,
    ),
);
$context  = stream_context_create($options); // создаем контекст отправки
$result = file_get_contents($url, false, $context); // отправляем

if (!$result) { // если что-то не так
    $response['ok'] = 0; // пишем что все плохо
    $response['message'] = '<p class="error">Что-то пошло не так, попробуйте отправить позже.</p>'; // пишем ответ
    die(json_encode($response)); //выводим массив в json формате и умираем
}

$response['ok'] = 1; // если дошло до сюда, значит все ок
$response['message'] = '<p class="">Все ок, отправилось.</p>'; // пишем ответ
die(json_encode($response)); //выводим массив в json формате и умираем

?>
