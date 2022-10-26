const{createApp}= Vue;
let app=Vue.createApp({
data(){
    return{
        html:"<h1> introduciondonos a componentes con Vue </h1>",
        x:'navbar',
        pie:'pie'
    }
},components:{
    'navbar':{
        template:'<div><nav class="navbar navbar-expand-md navbar-dark bg-dark"><div class="container-fluid"><a class="navbar-brand" href="#"><img class="logo" src="./images/logo.png" alt="logo" /></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="menu"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item"><a class="nav-link active bg-dark" aria-current="page" href="index.html">Home</a></li><li class="nav-item "><a class="nav-link active bg-dark" href="menu.html" >Menu</a></li><li class="nav-item"><a class="nav-link active bg-dark" href="quienes-somos.html">Quienes somos</a></li><li class="nav-item"><a class="nav-link active bg-dark" href="contacto.html">Contacto</a></li><li class="nav-item clima">Temperatura en el bar&nbsp&nbsp&nbsp<img alt="clima" id="imgClima" src=""><span id="temperature">Temperatura en el bar</span></li><li class="nav-item"></li></ul></div></div></nav></div>'
    },
    'pie':{
        template:'<div class="grid-container bg-dark text-light"><div class="grid-item"><div class="horarios">Nuestros Horarios<br> Martes a Domingos y Festivos<br> de 5pm a 12am</div></div><div class="grid-item"><a href="https://instagram.com/lahuerta_bar?igshid=YmMyMTA2M2Y=" target="_blank"> <img class="igicon" src="images/instagram.png" alt="Instagram" /></a><a href="https://api.whatsapp.com/send?phone=573196111218" target="_blank"> <img class="igicon" src="images/whatsapp.png" alt="WhatsApp" /></a><p>Derechos Reservados @2022</p></div><div class="grid-item"><p>Teléfono:</p><a href="tel:+573196111218">+57 319 6111218</a></div></div>'
    }

}
}).mount("#app")




function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
    }

function sendEmail(name, email, message)  {
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "lahuertarestobar2018@gmail.com",
    Password : "C9FA9D00DF0E32464E3E6FE772F4947EAED1",
    To : "lahuertarestobar2018@gmail.com",
    From : "lahuertarestobar2018@gmail.com",
    Subject : `Contacto de: ${name}`,
    Body : `email: ${email} <br> Mensaje:  ${message}`,
    }).then( message => alert("Tu mensaje ha sido enviado. Gracias por contactarnos") );
}
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