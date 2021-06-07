<?php
    $to_email = "yash.mangate1@gmail.com";
    $subject = "Testing email via PHP";
    $body = "Hi, this is an email which is sent you by the php server";
    $headers = "From: localhost";


    if (mail($to_email, $subject, $body, $headers)) {
        echo "Email was successfully sent to {$to_email}";
    }else{
        echo "Email sending failed";
    }
?>