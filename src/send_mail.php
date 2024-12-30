<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Récupérer les données du formulaire
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);
    
    // Adresse e-mail de réception
    $to = "Sophro-Qi.JC@outlook.com";
    $subject = "Nouveau message de contact";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";
    
    // Envoyer l'e-mail
    if (mail($to, $subject, $message, $headers)) {
        echo "Votre message a été envoyé avec succès !";
    } else {
        echo "Une erreur s'est produite lors de l'envoi de votre message.";
    }
} else {
    echo "Méthode de requête non supportée.";
}
