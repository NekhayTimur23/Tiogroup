<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "PHPMailer/src/PHPMailer.php";
require "PHPMailer/src/Exception.php";

try {
    $mail = new PHPMailer(true);
    $mail->CharSet = "UTF-8";

    // Проверка на существование и очистка входных данных
    $name = isset($_POST["name"]) ? htmlspecialchars($_POST["name"]) : "";
    $email = isset($_POST["email"]) ? htmlspecialchars($_POST["email"]) : "";
    $tel = isset($_POST["tel"]) ? htmlspecialchars($_POST["tel"]) : "";

    $body = $name . ' ' . $email . ' ' . $tel;
    $theme = "[Заявка на обратный звонок с сайта TrioGroup]";

    $mail->setFrom("nekhajj.timur@rambler.ru", "triogroup"); // Добавьте ваш адрес
    $mail->addAddress("grupp.trio@bk.ru");

    $mail->isHTML(true); // Если вы хотите отправлять HTML
    $mail->Subject = $theme;
    $mail->Body = $body;

    $mail->send();
    echo "Сообщение отправлено!";
} catch (Exception $e) {
    echo "Сообщение не может быть отправлено. Ошибка: {$mail->ErrorInfo}";
}
?>
