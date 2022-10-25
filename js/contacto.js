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
    Username : "lahuertarestobar2018@gmail.com",
    Password : "e244f3bc-7e8a-47c5-a0c5-066d1e6ed6e2",
    To : "lahuertarestobar2018@gmail.com",
    From : "lahuertarestobar2018@gmail.com",
    Subject : `Contacto de: ${name}`,
    Body : `email: ${email} <br> Mensaje:  ${message}`,
    }).then( message => alert("Tu mensaje ha sido enviado. Gracias por contactarnos") );
}

