<?php

 
//Prefedined Variables 
$to = "chochobo.zoo@gmail.com";

// This IF condition is for improving security  and Prevent Direct Access to the Mail Script.
if($_POST) {
	// Collect POST data from form
	$name = stripslashes($_POST['name']);
	$email = stripslashes($_POST['email']);
	$subject = stripslashes($_POST['subject']);
	$message= stripslashes($_POST['message']);

	// Collecting all content in HTML Table
	$content='<table width="100%">
	<tr><td  align "center"><b>Contact Details</b></td></tr>
	<tr><td>Name:</td><td> '.$name.'</td></tr>
	<tr><td>Email:</td><td> '.$email.' </td></tr>
	<tr><td>Subject:</td><td> '.$subject.'</td></tr>
	<tr><td>Message:</td> <td> '.$message.'</td></tr>
	<tr><td>Date:</td> <td> '.date('d/m/Y').'</td></tr>
	</table> ';


	// Define email variables
	$headers = "From:hello@selaksaimaji.com \r\n";
	$headers .= "Reply-to:hello@selaksaimaji.com\r\n";
	$headers .= 'Content-type: text/html; charset=UTF-8';

	if( ! empty($name) && ! empty($email) && ! empty($content) ) {

	// Sending Email 
		if( mail($to, $subject, $content, $headers) ) {
			echo "Thank you, we will getback to you shortly<br>";
			//return true;
		}
		else {
			echo "Some errors to send the mail.";
			//return false;
		}
	}
	else {
		echo "Some errors to send the mail. Please fill the contact form";
		//return false;
	}
} else {
	echo "Please Fill The Form First";
}