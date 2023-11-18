<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require "PHPMailer/src/PHPMailer.php";
    require "PHPMailer/src/Exception.php";

    $mail = new PHPMailer(true);
    $mail->CharSet = "UTF-8";

    $name = $_POST["name"];
    $email = $_POST["email"];
    $tel = $_POST["tel"];

    $body = $name . ' ' . $email . ' ' . $tel;
    $theme = "[Заявка на обратный звонок с сайта TrioGroup]";

    $mail->addAddress("grupp.trio@bk.ru");

    $mail->Subject = $theme;
    $mail->Body = $body;

    $mail->send();