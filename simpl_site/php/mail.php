<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$order =$_POST['user_order'];
$total =$_POST['total'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.ukr.net';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'shopeakclub@ukr.net'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'kGz0DYYt4DRO53wE'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 2525; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('shopeakclub@ukr.net'); // от кого будет уходить письмо?
$mail->addAddress('telebuki@ukr.net');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

// $url = 'http://shopeak.club/cart';
// $content = file_get_contents($url);
// $doc = new DOMDocument();
// $doc->loadHtml($content);

// $raised = explode("\n", trim($doc->getElementById('php')->nodeValue))[0];

// echo $raised; 



$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$name. ' оставил заявку, его телефон ' .$phone. '<br><br>Почта этого пользователя: ' .$email. '<br><br> Состав заказа: ' .$order. '<br><br> Сумма заказа составляет: ' .$total;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>