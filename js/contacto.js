function validateForm() {
    let name = document.forms["form"]["name"].value;
    if(name == "") {
        alert("Please  enter a valid name");
        return false;
    }
    let email = document.forms["form"]["email"].value;
        if(!validateEmail(email)) {
        alert("Please enter a valid email");    
        return false;
    } 
    let message = document.forms["form"]["message"].value;
    sendEmail(name, email, message);
    document.forms["form"]["name"].value="";
    document.forms["form"]["email"].value="";
    document.forms["form"]["message"].value="";

        return false;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
    }

function sendEmail(name, email, message)  {
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "lahuerta.restobar.sanluis@gmail.com",
    Password : "6F10D0BCEEA5CDD680B0934C5AD88B38229E",
    To : "lahuerta.restobar.sanluis@gmail.com",
    From : "lahuerta.restobar.sanluis@gmail.com",
    Subject : `Contacto de: ${name}`,
    Body : `email: ${email} <br> Mensaje:  ${message}`,
    }).then( message => alert("Tu mensaje ha sido enviado. Gracias por contactarnos") );
}

