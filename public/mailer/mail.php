<?php
	header('Content-type: text/html; charset=UTF-8');
	
	require "phpmailer/PHPMailerAutoload.php";
	email('teste@thiagofotografia.com.br');

	function email($destinatario){

		$mail = new PHPMailer();
		$mail->IsSMTP();
		$mail->CharSet = "UTF-8";

		$mail->SMTPAuth = true;
		$mail->SMTPSecure = false;
		$mail->isHTML(true);

		$mail->Host = 'br664.hostgator.com.br';
		$mail->Port = 26;

		$mail->Username = 'send@thiagofotografia.com.br';
		$mail->Password = 'send@thiago@123';

		$mail->From = utf8_decode($_GET['from']);
		$mail->FromName = utf8_decode($_GET['name']);
		$mail->addReplyTo(utf8_decode($_GET['from']), utf8_decode($_GET['name']));
		$mail->Subject = "[[SITE]] | ". utf8_decode($_GET['name']);
				
		$mail->Body = "<strong>Contato pelo site de: </strong>". utf8_decode($_GET['name']);
		$mail->Body .= "<br>";
		$mail->Body .= "<strong>Telefone: </strong>". utf8_decode($_GET['phone']);				
		$mail->Body .= "<br>";
		$mail->Body .= "<br>";
		$mail->Body .= "<strong>Menssagem: </strong> ";				
		$mail->Body .= utf8_decode($_GET['body']);
		$mail->Body .= "<br>";
		$mail->Body .= "<br>";
		$mail->AddAddress($destinatario);
		
		if($mail->send()) 
			$response = array("send" => true, "message" => "Email enviado com sucesso!", "subMessage" => "Logo entraremos em contato.");
		else
			$response = array("send" => false, "message" => "Erro!", "subMessage" => $mail->ErrorInfo);

		echo json_encode($response);
	}
?>