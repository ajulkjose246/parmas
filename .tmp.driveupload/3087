<?php require("../header.php");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require("../../email.php");

require('../../PHPMailer/src/Exception.php');
require('../../PHPMailer/src/PHPMailer.php');
require('../../PHPMailer/src/SMTP.php');

?>
<link rel="stylesheet" href="/parmas/assets/css/contact.css">
<link href="/parmas/assets/css/cdn/font-awesome.min.css" rel="stylesheet" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">

<section class="pb-5">
	<div id="contact" class="contact-area section-padding">
		<div class="container">
			<div class="section-title text-center">
				<h1>Contact Us</h1>
			</div>
			<div class="row">
				<div class="col-lg-7">
					<div class="contact">
						<form class="form" method="post" action="#" onsubmit="return validation();">
							<div class="row">
								<div class="form-group col-md-6">
									<input type="text" name="name" class="form-control" placeholder="Name" required="required">
								</div>
								<div class="form-group col-md-6">
									<input type="email" name="email" class="form-control" placeholder="Email" required="required">
								</div>
								<div class="form-group col-md-12">
									<input type="text" name="subject" class="form-control" placeholder="Subject" required="required">
								</div>
								<div class="form-group col-md-12">
									<textarea rows="6" name="message" class="form-control" placeholder="Your Message" required="required"></textarea>
								</div>
								<div class="col-md-12 text-center">
									<input type="submit" name="submit" id="submitButton" class="btn btn-contact-bg" value="Send Message">
								</div>
							</div>
						</form>
					</div>
				</div>
				<div class="col-lg-5">
					<a href="https://goo.gl/maps/Cix8rEdSa8tG3MDJ7" target="_blank">
						<div class="single_address">
							<i class="fa fa-map-marker"></i>
							<h4>Our Address</h4>
							<p>Adakkakundu, Malappuram - 676525</p>
						</div>
					</a>
					<a href="mailto:someone@example.com">
						<div class="single_address">
							<i class="fa fa-envelope"></i>
							<h4>Send your message</h4>
							<p>mail.ajulkjose@gmail.com</p>
						</div>
					</a>
					<a href="tel:+8078234246">
						<div class="single_address">
							<i class="fa fa-phone"></i>
							<h4>Call us on</h4>
							<p>(+91) 8078234246</p>
						</div>
					</a>
					<div class="single_address">
						<i class="fa fa-clock-o"></i>
						<h4>Work Time</h4>
						<p>Mon - Fri: 08.00 - 16.00. <br>Sat: 10.00 - 14.00</p>
					</div>
				</div>
				<div class="col-12">
					<iframe class="pt-5 pb-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.2015388941118!2d76.34361261460968!3d11.17270859205334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba62f2367ab9381%3A0x5bcb9fed8f24de2a!2sSt.%20George%20Church!5e0!3m2!1sen!2sin!4v1676994301508!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
			</div>
		</div>
	</div>
</section>
<?php
if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];
	$mail = new PHPMailer(true);
	$mail->isSMTP();
	$mail->Host = 'smtp.gmail.com';
	$mail->SMTPAuth = true;
	$mail->Username = "$email_address";
	$mail->Password = "$email_password";
	$mail->SMTPSecure = 'ssl';
	$mail->Port = 465;

	$mail->setFrom($email);
	// $mail->setFrom('mail.ajulkjose@gmail.com');
	$mail->addAddress('mail.ajulkjose@gmail.com');
	$mail->isHTML(true);
	$mail->Subject = "$subject";
	$body = "Name : $name <br> Email : $email <br> Subject : $subject <br> Message : $message";
	$mail->Body = "$body";
	$mail->send();
	echo ("<script>alert('success')</script>");
}
?>
<?php require("../footer.php") ?>