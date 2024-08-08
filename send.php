<?php

$email = "no-reply@etr-sto.com";
$to = "etrhydrav@gmail.com";
$sitename = "СТО грузовых автомобилей";
$pagetitle = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["user_name"]);
$phone = trim($_POST["phone"]);


$message = "
Имя: $name <br>
Телефон: $phone <br>
";

$headers = "From: $email" . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "X-Mailer: PHP/" . phpversion() . "\r\n" .
	"Content-type: text/html; charset=\"utf-8\"";

mail($to, $pagetitle, $message, $headers);


