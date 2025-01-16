function sendMail(){
    let parms = {
        first_name : document.getElementById("first_name").value,
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,

    }
    
    emailjs.send("service_8pv1tkc","template_shcara8",parms).then(alert("Message Envoyé !"))
}